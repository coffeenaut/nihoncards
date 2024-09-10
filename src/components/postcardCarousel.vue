<script setup>
import ChevronLeft from '@heroicons/vue/20/solid/ChevronLeftIcon'
import ChevronRight from '@heroicons/vue/20/solid/ChevronRightIcon'
import postCard from './postCard.vue';
import { ref, computed } from 'vue';

const carouselData =  defineProps({
  cards: {
    type: Array,
    required: true
  }
});
const carouselLength = computed(() => {
    return carouselData.cards.length -1
});
const currentCard = ref(0);
const shownCard = computed({
    //get
    get() {
        return currentCard.value;
    },
    //set
    set(value) {
        currentCard.value = value;
    }
})

const fadeCard = ref(false);
const animateFade = computed({
    //get
    get() {
        return fadeCard.value;
    },
    //set
    set(value) {
        fadeCard.value = value;
    }
})
const cardRight = ref(false);
const animateSlideRight = computed({
    //get
    get() {
        return cardRight.value;
    },
    //set
    set(value) {
        cardRight.value = value;
    }
})
const cardLeft = ref(false);
const animateSlideLeft = computed({
    //get
    get() {
        return cardLeft.value;
    },
    //set
    set(value) {
        cardLeft.value = value;
    }
})
const nextCard = () => {
    animateFade.value = true
    animateSlideRight.value = true
      setTimeout(() => {
        if(currentCard.value == carouselLength.value) {
            shownCard.value = 0    
        }
        //loop back to the beginning
        else {
            shownCard.value +=  1;
        }
        animateFade.value = false
        animateSlideRight.value = false
      }, 200)
    

}
const prevCard = () => {
    animateFade.value = true
    animateSlideLeft.value = true
      setTimeout(() => {
        //will always stay at beginning if at first index
        if(currentCard.value > 0) {
            shownCard.value  -= 1;
        }
        else {
            shownCard.value = carouselLength.value;
        }
        animateFade.value = false
        animateSlideLeft.value = false
      }, 200)
    

}
const showCard = (i) => {
    animateFade.value = true
      setTimeout(() => {
        shownCard.value = i;
        animateFade.value = false
      }, 275)
}
</script>
<template>
    <div class="flex items-center">
        <div><ChevronLeft class="h-8 fill-gray-600 hover:fill-gray-300" @click="prevCard()"></ChevronLeft></div>
        <postCard class="carousel" :class="{'fadeOut': animateFade}">
            <template #image>
                <img class="rounded-lg h-96 w-full cImg" :class="{'carouselSlideRight': animateSlideRight, 'carouselSlideLeft': animateSlideLeft}" :src="carouselData.cards[shownCard].image"/>
            </template>
            <template #title>
                <span class="opacity-80 text-gray-100 text-lg font-bold">{{carouselData.cards[shownCard].title}}</span>
            </template>
            <div class="w-container flex justify-center gap-x-4">
                <div v-for="(card, i) in carouselLength +1" class="flex w-2 h-2 rounded-full cursor-pointer" @click="showCard(i)" :class="[i == shownCard ? 'bg-sky-500' : 'bg-slate-400']"></div>
            </div>
            <span class="text-slate-400 text-md">{{carouselData.cards[shownCard].description}}</span>
        </postCard>
        <div><ChevronRight class="h-8 fill-gray-600 hover:fill-gray-300" @click="nextCard"></ChevronRight></div>
        </div>
</template>