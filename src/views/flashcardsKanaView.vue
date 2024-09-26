<script setup>
    import {computed, ref} from 'vue'
    import KanaNav from '../components/kanaNav.vue';
    import FlashCard from '../components/flashCard.vue'
import { shuffle } from '../util/tools';
    const kanatable = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "si", "su", "se", "so",
    "ta", "ti", "tu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "hu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "n", "ku", "tu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wi", "we", "wo",
    "ga", "gi", "gu", "ge", "go",
    "za", "zi", "zu", "ze", "zo",
    "da", "di", "du", "de", "do",
    "ba", "bi", "bu", "be", "bo",
    "pa", "pi", "pu", "pe", "po",
]
const shuffleTable = () => {
    return shuffle(kanatable)
}
</script>

<template>
    <div class="flex flex-col w-full items-center gap-y-4">
        <KanaNav></KanaNav>
        <div class="flex items-center section-title">hiragana</div>
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 px-10">
            <div v-for="(term, i) in shuffleTable()">
                <FlashCard :back="term" :front="term" :alternate="i" />
            </div>
         </div>
         <div class="flex items-center section-title">katakana</div>
         <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
            <div v-for="(term, i) in shuffleTable()">
                <FlashCard :back="term.toLocaleUpperCase()" :front="term.toLocaleUpperCase()" :alternate="i" />
            </div>
         </div>
    </div>
</template>