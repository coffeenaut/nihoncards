<script setup>
import { computed, ref } from 'vue';
import {Timeout} from '../util/tools'
import { toKana } from 'wanakana';
const flipped = ref(false)
const cardFlipper = computed({
    get() {return flipped.value},
    set(val) {flipped.value = val}
})
const flip = ref(false)
const animateFlip = computed({
    get() { return flip.value},
    set(val) { flip.value = val}
})
const cardProps = defineProps({
    back: {
        type: String,
        required: true
    },
    front: {
        type: String,
        required: true
    },
    flipCard: {
        type: Boolean,
        required: false,
    }
 })
 async function flipCard() {
    cardFlipper.value = !cardFlipper.value
    animateFlip.value = true
    await Timeout(400)
    animateFlip.value = false
 }
</script>
<template>
    <div>
        <div class="flex justify-center items-center flash-card " @click="flipCard" :class="(flip || cardProps.flipCard) && 'animate-flip-card'">
        {{ flipped ? cardProps.back : toKana(cardProps.front) }}
        </div>
    </div>
</template>