<script setup>
    import {computed, ref} from 'vue'
    import jDictionary from '../data/headstart.json'
    import FlashCard from '../components/flashCard.vue';
    import FilterData from '../data/output/Filters.json'
    import { DiceRoll, shuffle, Timeout } from '../util/tools';
    import FilterList from '../components/FilterList.vue';
    const filterName = ref("")
    const currentSetName = computed({
        get() {return filterName.value},
        set (val) {filterName.value = val}
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
        console.log(filterName.value)
        return set 
    }
    const dicts = ref(initialSet())
    const currentSet = computed({
        get() {return dicts.value},
        set (val) {dicts.value = val}
    })
    const flippem = ref(false)
    const flipCards = computed({
        get() {return flippem.value},
        set (val) {flippem.value = val}
    })
    async function filterWords(filter, i) {
        currentSet.value = shuffle(FilterData[i].list)
        currentSetName.value = filter.tag
        flipCards.value = true
        await Timeout(400)
        flipCards.value = false
    }
</script>

<template>
    <div class="flex flex-col md:flex-row w-full px-20 justify-between">
         <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full md:w-3/4">
            <div v-for="(term, i) in dicts">
                <FlashCard :back="jDictionary[term].english" :front="jDictionary[term].japanese" :alternate="i" :flipCard="flippem"/>
            </div>
         </div>
         <div class="flex flex-col">
            <div class="flex items-center section-title">Categories</div>
            <FilterList @filter-results-emit="filterWords" :setName="filterName"/>
        </div>
    </div>
</template>