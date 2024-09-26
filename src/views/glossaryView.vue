<script setup>
    import {computed, ref} from 'vue'
    import jDictionary from '../data/headstart.json'
    import TermPair from '../components/termPair.vue';

    let dict = jDictionary
</script>

<template>
    <div class="flex flex-col w-full justify-center items-center p-4 gap-y-4">
         <div class="grid grid-cols-3 gap-x-4">
            <div v-for="(term, i) in dict">
                <TermPair :english="term.english" :japanese="term.japanese" :alternate="i" />
            </div>
         </div>
    </div>
</template>