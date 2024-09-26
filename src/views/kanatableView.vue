<script setup>
import {computed, ref} from 'vue'
import { toHiragana, toKatakana } from 'wanakana';
import Switch from '../components/switch.vue';
import KanaTable from '../components/kanaTable.vue';
import KanaNav from '../components/kanaNav.vue';

const vowels = ["a", "i", "u", "e", "o"]
const consonants = ["","k", "s", "t", "n", "h", "m", "y", "r", "w", "g", "z", "d", "b", "p"]
const compounds = ["","ky", "sh", "ch", "ny", "hy", "my", "ry", "gy", "j", "by", "py"]
const ignores = [71, 73, 92]

const phoneticsActive = ref(false)
const phoneticsSwitch = computed({
    get() { return phoneticsActive.value },
    set(val) { phoneticsActive.value = val}
})
const particles = ["n", "tsu"]

function ignorable(rowNum, colNum) {
    let cellNum = rowNum * 10 + colNum
    return (ignores.indexOf(cellNum) > -1)
}
function togglePhonetics (p, v) {
    console.log(p, v)
    phoneticsSwitch.value = !phoneticsActive.value
}

</script>
<template>
    <div class="flex flex-col w-full items-end">
        <div class="flex w-full p-4 justify-end">
            <Switch
                @toggle-property-emit="togglePhonetics"
                :propertyText="'show phonetics'" 
                :propertyValue="phoneticsSwitch" />
        </div>
        <KanaNav></KanaNav>
        <div class="flex flex-col lg:flex-row w-full items-center justify-between px:16 lg:px-24">
            <!--hiragana-->
            <div class="flex flex-col">
                <div class="flex justify-center section-title">hiragana</div>
                <KanaTable :vowels="vowels" :consonants="consonants" :ignores="ignores" :showPhonetics="phoneticsActive" :displayKatakana="false"/>
                <div class="flex mb-10">
                        <div class="kana-table-header">n</div>
                        <div class="kana-table-2cell">{{ toHiragana(particles[0]) }}</div>
                        <div class="kana-table-header">tsu</div>
                        <div class="kana-table-2cell">{{ toHiragana(particles[1]) }}</div>
                </div>
                <div class="flex p-6 justify-center section-title">extended hiragana</div>
                <KanaTable :vowels="vowels" :consonants="compounds" :ignores="[]" :showPhonetics="phoneticsActive" :displayKatakana="false"/>
            </div>
            <!--katakana-->
            <div class="flex flex-col">
                <div class="flex justify-center section-title">katakana</div>
                <KanaTable :vowels="vowels" :consonants="consonants" :ignores="ignores" :showPhonetics="phoneticsActive" :displayKatakana="true"/>
                <div class="flex mb-10">
                        <div class="kana-table-header">n</div>
                        <div class="kana-table-2cell">{{ toKatakana(particles[0]) }}</div>
                        <div class="kana-table-header">tsu</div>
                        <div class="kana-table-2cell">{{ toKatakana(particles[1]) }}</div>
                </div>
                <div class="flex p-6 justify-center section-title">extended katakana</div>
                <KanaTable :vowels="vowels" :consonants="compounds" :ignores="[]" :showPhonetics="phoneticsActive" :displayKatakana="true"/>
            </div>
        </div>
    </div>
</template>