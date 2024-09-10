<script setup>
import {computed, ref, shallowReactive} from 'vue'
import postcardCarousel from '../components/postcardCarousel.vue';
import carousel from '../components/carousel.vue';
const currentIndex = ref(0);
const showIndex = computed({
    get() {
        return currentIndex.value;
    },
    set(val) {
        currentIndex.value = val
    }
})
const pictures = [
    {
        image: '/src/assets/img/jhu-01.jpg',
        title: 'A Day Under the Cherry Blossoms',
        description: 'As spring unfurls its delicate charm, Japan\'s Cherry Blossom Season paints the landscape with ethereal beauty. In this fleeting spectacle of nature, where delicate pink and white blooms adorn the trees like delicate jewels. Stroll through enchanting parks, capture mesmerizing photographs, and savor the tranquility of hanami picnics beneath these iconic sakura trees.'
    },
    {
        image: '/src/assets/img/jhu-02.jpg',
        title: 'Embracing the Rich Traditions: A Vibrant Turkish Celebration',
        description: 'Turkey festivals in various European cities offer a fascinating journey into Anatolian traditions, art, music, and cuisine. From lively bazaars and Turkish folk dances to mouthwatering kebabs and baklava, these festivals bring a piece of Turkey to European streets. Immerse yourself in the warm hospitality, vibrant colors, and the enchanting aromas that make Turkish culture so captivating.'
    },
    {
        image: '/src/assets/img/jhu-03.jpg',
        title: 'Copenhagen\'s Nightlife: Where the City Comes Alive After Dark',
        description: 'Not the Turkey holiday you expect - the city\'s nightlife offers a kaleidoscope of options, from trendy cocktail bars and cozy jazz clubs to pulsating nightclubs. Enjoy a night of laughter and conversation at intimate cafes, dance to the latest beats at world-class venues, or discover hidden gems where live music and local DJ talents thrive. Whether you\'re into craft cocktails, electronic music, or just a casual night out, Copenhagen\'s nightlife has something for everyone, ensuring that your evenings here are as unforgettable as your days.'
    },
]
function getNextCard() {
    showIndex.value++
}
function getPreviousItem() {
    showIndex.value--
}
</script>
<template>
    <div class="flex justify-center">
        <div class="w-3/5">
        <carousel :index="currentIndex" :length="1" @emit-next-item="getNextCard" @emit-previousItem="getPreviousItem">
            {{ showIndex }}
        </carousel>
    </div>
    </div>
    
</template>