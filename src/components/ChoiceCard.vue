<script setup>
import XMarkIcon from '@heroicons/vue/20/solid/XMarkIcon';
import CheckIcon from '@heroicons/vue/20/solid/CheckIcon';
import { computed, ref, watch } from 'vue';
const emits = defineEmits(['answerClickedEmit', 'challengeSolvedEmit'])

const showAnswer = ref(false)
const answerShown = computed({
    get() {return showAnswer.value},
    set(val) {showAnswer.value = val}
})
const cardProps = defineProps({
    position: {
        type: Number,
        required: true
    },
    answerText: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: Boolean,
        required: true
    },
    shown: {
        type: Boolean,
        required: true
    },
    dealCard: {
        type: Boolean,
        required: true
    }
 })

function itemClicked() {
    emits("answerClickedEmit", cardProps.position)
    if(cardProps.correctAnswer)
        emits("challengeSolvedEmit")
}
</script>
<template>
    <div>
        <div class="card-grade " :class="cardProps.shown && 'show'">
            <CheckIcon v-if="correctAnswer" class="answer-correct " :class="cardProps.shown && 'show animate-bounce'" />
            <XMarkIcon v-else class="answer-incorrect" :class="cardProps.shown && 'show animate-shake'"/>
        </div>
        <div class="card-stack">
            <div class="card-stack">
                <div class="choice-card" @click="itemClicked" :class="dealCard && 'animate-deal-card'">
                {{ cardProps.answerText }}
                </div>

            </div>
        </div>
    </div>
</template>