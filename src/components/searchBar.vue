<script setup>
import {ref} from 'vue'
import searchIcon from '@heroicons/vue/20/solid/MagnifyingGlassIcon';
const emits = defineEmits(['searchEmit'])
// function clearInput() {
//      currentValue.value = "games";
// }
const inputValue = ref(null)
function search() {
    emits("searchEmit", inputValue.value)
}
</script>
<template>
    <div class="flex items-center">
        <input @keyup.enter="search()" v-model="inputValue"  class="w-11/12 h-8 rounded-3xl shadow-md translate-x-12 search" />
        <button class="z-10 mx-4" @click="search()"><searchIcon class="h-5 stroke-gray-300" /></button>
    </div>
    
</template>