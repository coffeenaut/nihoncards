<script setup>
import ChevronLeft from '@heroicons/vue/20/solid/ChevronLeftIcon'
import ChevronRight from '@heroicons/vue/20/solid/ChevronRightIcon'
import { computed } from 'vue';
const emits = defineEmits(['emitNextItem', 'emitPreviousItem'])

const carouselData =  defineProps({
  index: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
});
const carouselLength = computed(() => {
    return carouselData.length
})
const nextCard = () => {
    emits("emitNextItem")
}
const prevCard = () => {
    emits("emitPreviousItem")
}
</script>
<template>
    <div class="flex items-center">
        <div><ChevronLeft class="h-8 fill-gray-600 hover:fill-gray-300" @click="prevCard"></ChevronLeft></div>
        <slot></slot>
        <div><ChevronRight class="h-8 fill-gray-600 hover:fill-gray-300" @click="nextCard"></ChevronRight></div>
        </div>
</template>