<script setup>
import {computed} from 'vue'

//props
const blurbProps = defineProps({
  picturePath: {
    type: String,
    required: false
  },
  pictureWidth: {
    type: Number,
    required: false,
    default: 20
  },
  pictureHeight: {
    type: Number,
    required: false,
    default: 20
  },
  blurbFlow : {
    type: Boolean,
    required: false,
    default: true
  },
  
})
const hasPicture = computed(() =>{
  if(blurbProps.picturePath) return true;
  else return false;
})
const styleSize = computed(() => {
  return `w-${blurbProps.pictureWidth} h-${blurbProps.pictureHeight}`;
})
</script>
<template>
  <div class="w-full flex flex-wrap justify-evenly" :class="[blurbProps.blurbFlow ? 'flex-row' : 'flex-row-reversed']">
    <div v-if="hasPicture">
      <img :src="picturePath" :class="[styleSize]" />
    </div>
    <div class="lg:basis-1/3">
      <slot></slot>
      </div>
  </div>
</template>