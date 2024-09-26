<script setup>
    import {computed, ref} from 'vue'
    import { toHiragana, toKatakana } from 'wanakana';
    const listRef = ref([])
    //const list = computed ({get() {return list.value}, set(val) {list.value = val}})

    function processText() {
        let string = message.value
        const lines = string.split('\n');
        let dictionary = []
        for (let i = 0; i < lines.length; i++) {
            const pairSplit = lines[i].split(';')
            let accepted = pairSplit[1]
            const alts = pairSplit[1].split(',')
            let alternates = []
            if(alts.length > 1) {
                accepted = alts[0]
                for (let ii = 1; ii < alts.length; ii++){
                    alternates.push(alts[ii])
                }
            }
            const tags = pairSplit[2].split(',')
            let tag = []
            for (let ii = 0; ii < tags.length; ii++){
                tag.push(tags[ii])
            }
            const pair = {english: pairSplit[0], japanese: toKatakana(accepted), alternatives: alternates, tags: tag}
            dictionary.push(pair)
        }
        console.log(dictionary)
    }
    let message = ref("") 
</script>

<template>
    <div class="flex flex-col w-full justify-center items-center p-2 gap-y-4">
        <!-- <div v-for="item in listRef">{{item}}</div> -->
         <textarea rows="10" cols="100" v-model="message" />
         <div class="flex button-primary" @click="processText">Process</div>
    </div>
</template>