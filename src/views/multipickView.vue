<script setup>
    import {computed, ref, watch} from 'vue'
    import {toKana } from 'wanakana';
    import SettingsIcon from '@heroicons/vue/20/solid/Cog6ToothIcon'
    import XMarkIcon from '@heroicons/vue/20/solid/XMarkIcon';
    import CheckIcon from '@heroicons/vue/20/solid/CheckIcon'
    import XIcon from '@heroicons/vue/20/solid/XMarkIcon'
    import BulletListIcon from '@heroicons/vue/20/solid/ListBulletIcon'
    import jDictionary from '../data/headstart.json'
    import FilterData from '../data/output/Filters.json'
    import TermPair from '../components/termPair.vue';
    import { DiceRoll, shuffle, Timeout } from '../util/tools';
    import ChoiceCard from '../components/ChoiceCard.vue';
    import GameSettings from '../components/gameSettings.vue';
    import FilterList from '../components/FilterList.vue';

    const player = ref({
        // score: 0,
        translateHiragana: false,
        limit: 3
    })
    const playerSettings = computed({
        get() {return player.value},
        set(val) {player.value = val}
    })
    const setName = ref("")
    const currentSetName = computed({
        get() { return setName.value},
        set(va) { setName.value = va}
    })
    const initialSet = () => {
        let roll = DiceRoll(FilterData.length -1)
        let set = []
        if(roll == 0){
            roll = DiceRoll(FilterData[0].list.length -1)
            set = FilterData[0].list[roll].list
            currentSetName.value = FilterData[0].tag
        }
            
        else{
            set = FilterData[roll].list
            currentSetName.value = FilterData[roll].tag
        }
        return set 
    }
    const words = ref(initialSet())
    const wordSet = computed({
        get() { words.value},
        set(val) {words.value = val}
    })
    const game = {
        attempts: 0,
        challenge: 0,
        startMessage: "hajime"
    }
    const isSettingOpen = ref(false)
    const showSettings = computed({
        get() { return isSettingOpen.value},
        set(val) {isSettingOpen.value = val}
    })
    const challengeSolved = ref(true)
    const roundFinished = computed({
        get() { return challengeSolved.value},
        set(val) { challengeSolved.value = val}
    })
    const staggerIteration = ref(0)
    const deckStagger = computed({
        get() { return staggerIteration.value},
        set(val) { staggerIteration.value = val}
    })
    function toggleSettings() {
        showSettings.value = !showSettings.value
    }
    const sysMessage = ref("")
    const systemMessage = computed({
        get() {return sysMessage},
        set(val) {sysMessage.value = val}
    })
    const shiftMain = ref(false)
    const slideMainLeft = computed({
        get() { return shiftMain.value},
        set (val) { shiftMain.value = val}
    })
    const currentChallange = ref(-1)
    const challenge = computed({get() {return currentChallange.value},set(val) { currentChallange.value = val}})
    const choices = ref([])
    const currectChoices = computed({get(){ return choices.value}, set(val){choices.value = val}})
    async function rollChallenge() {
        let roll = DiceRoll(words.value.length -1)
        challenge.value = words.value[roll]
        let tempArray = []
        const limit = player.value.limit > words.value.length ? words.value.length -1 :  player.value.limit -1
        console.log(limit)
        do {
            const rng = DiceRoll(words.value.length -1)
            const choice = words.value[rng]
            if (challenge.value !== choice && tempArray.indexOf(choice) < 0)
                tempArray.push(choice)
        }while(tempArray.length < limit ) //game.choiceLimit
        let tchoices = [...tempArray, challenge.value]
        currectChoices.value = shuffle(tchoices)
        solution.value.correct = false
        roundFinished.value = false
        shownCards.value = []

        await dealCards()
    }
    async function dealCards () {
        for(let i =0; i < player.value.limit; i++) {
            deckStagger.value += 1
            await Timeout(50)
        }
        await Timeout(175)
        deckStagger.value = 0
    }
    const currentSolution = ref({correct: false})
    const solution = computed({
        get() {return currentSolution.value},
        set(val) { currentSolution.value = {...currentSolution.value, correct: val }}
    })
    const cardsShown = ref([])
    const shownCards = computed({
        get() { return cardsShown.value},
        set(val) {cardsShown.value = val}
    })
    function roundStart (position) {
        if(shownCards.value.indexOf(position) < 0)
            shownCards.value = [...shownCards.value, position]

        game.attempts += 1
    }
    function problemSolved() {
        player.score += 1
        roundFinished.value = true
        
    }
    function changeGameProperty(propertyName, value) {
        let newVal = value
        if (typeof newVal == 'string') 
            newVal = parseInt(value)
        playerSettings.value = {...playerSettings.value, [propertyName]: newVal}
        console.log(playerSettings.value)
    }
    function filterWords(filter, i) {
        wordSet.value = FilterData[i].list
        currentSetName.value = filter.tag
        rollChallenge()
        toggleSideMenu()
    }
    function toggleSideMenu() {
        slideMainLeft.value = !slideMainLeft.value
    }
</script>
<template>
    <div class="flex flex-col w-full gap-y-4 px-4 items-center">
        <div class="flex sticky settings-bar " :class="showSettings &&  'show-settings'">
            <GameSettings @change-property-emit="changeGameProperty" :player="player" />
        </div>
        <div class="flex w-full justify-between"></div>
        <SettingsIcon @click="toggleSettings" class="place-self-start icon-medium-gray" />
        <div class="sidebar-right-icon">
            <BulletListIcon @click="toggleSideMenu" class="icon-medium-gray sidecon" />
        </div>
        <div class="flex flex-col w-5/6 md:w-3/4 lg:w-1/2 multichoice-board " :class="shiftMain && 'slide-left'">
            <div class="text-6xl text-hiragana">{{ currentChallange < 0 ? toKana(game.startMessage) :toKana(jDictionary[challenge].japanese) }}</div>
            <div v-if="player.translateHiragana" class="text-xs text-phonetic">({{ jDictionary[challenge].japanese }})</div>
        </div>
        <div class="absolute flex justify-end place-self-end sidebar-right" :class="shiftMain && 'show'">
            <div class="flex-col">
                <div class="flex items-center section-title">Categories</div>
                <FilterList @filter-results-emit="filterWords" :setName="setName"/>
            </div>
                
        </div>
        <div class="system-message " :class="solution.correct ? 'system-green' : 'system-red'">{{ systemMessage }}</div>
        <div class="flex flex-wrap gap-6 items-center justify-evenly choice-list">
            <ChoiceCard v-for="(choice, i) in choices"
                @answer-clicked-emit="roundStart" 
                @challenge-solved-emit="problemSolved" 
                :key="i" 
                :answerText="jDictionary[choice].english" 
                :correctAnswer="choice == challenge" 
                :position="i"
                :shown="cardsShown.indexOf(i) > -1"
                :dealCard="i < staggerIteration"
            />
        </div>
        <div class="text-center next-round-btn" :class="challengeSolved && 'show'" @click="rollChallenge">{{currentChallange < 0 ? "begin" : "next" }}</div>
    </div>
</template>