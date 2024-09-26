<script setup> 
import { toHiragana, toKatakana } from 'wanakana';
const tableProps = defineProps({
    consonants: {
        type: Array,
        Required: true
    },
    vowels: {
        type: Array,
        Required: true
    },
    ignores: {
        type: Array,
        Required: true
    },
    showPhonetics: {
        type: Boolean,
        Required: true
    },
    displayKatakana: {
        type: Boolean,
        Required: false,
        default: false
    }
})
function ignorable(rowNum, colNum) {
    let cellNum = rowNum * 10 + colNum
    return (tableProps.ignores.indexOf(cellNum) > -1)
}
</script>
<template>
    <div class="kana-table">
        <div class="flex">
            <div class="kana-table-header"></div>
            <div v-for="v in vowels" class="kana-table-header">{{ v }}</div>    
        </div>
        <div class="flex flex-col">
            <div v-for="(c,i) in tableProps.consonants" class="flex">
                <div class="kana-table-header">{{ c }}</div>
                <div v-for="(v, ii) in tableProps.vowels" class="kana-table-cell">
                    <div class="text-hiragana">{{ ignorable(i, ii) ? ""  : (tableProps.displayKatakana ? toKatakana(c+v) : toHiragana(c+v)) }}</div>
                    <div v-if="tableProps.showPhonetics" class="text-phonetic">{{ ignorable(i, ii) ? ""  :c+v }}</div>
                </div>
            </div>
        </div>
    </div>
</template>