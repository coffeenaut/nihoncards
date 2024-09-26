<script setup>
import { computed } from 'vue';
import { toKana } from 'wanakana';
 const emits = defineEmits(['hoveredOverEmit'])
 const termProps = defineProps({
    english: {
        type: String,
        required: true
    },
    japanese: {
        type: String,
        required: true
    },
    alternate: {
        type: Number,
        required: false,
        default: 0
    }
 })
const alternate = computed(() =>{
    return termProps.alternate % 2 > 0
})
function hoveredOn(item) {
    emits("hoveredOverEmit", item)
} 
</script>
<template>
    <div class="flex" :class="alternate && 'term-row-alternate'">
            <div class="flex term-cell text-english">
                {{ termProps.english }}
            </div>
            <div class="flex flex-col term-cell">
                <div class="text-hiragana">
                    {{ toKana(termProps.japanese) }}
                </div>
                <div class="text-phonetic">
                    {{ termProps.japanese }}
                </div>
            </div>
    </div>
</template>