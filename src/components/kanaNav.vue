<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import BookIcon from '../components/BookIcon.vue'
import SquaresIcon from '@heroicons/vue/20/solid/Squares2X2Icon'
import TableIcon from '@heroicons/vue/20/solid/TableCellsIcon'
const mediumWidth = 768
const largeWidth = 1024
const isMedium = computed(() => {
    return window.innerWidth < largeWidth
})
</script>
<template>
    <div class="flex flex-col navlist">
        <RouterLink to="/learn/kanainfo">
            <BookIcon v-if="isMedium" class="icon-small-gray" />
            <span v-else>Learn</span>
        </RouterLink>
        <RouterLink to="/learn/kanatables">
            <TableIcon v-if="isMedium" class="icon-small-gray" />
            <span v-else>Tables</span>
        </RouterLink>
        <RouterLink to="/learn/kanaflashcards">
            <SquaresIcon v-if="isMedium" class="icon-small-gray" />
            <span v-else>Flashcards</span>
        </RouterLink>
    </div>
</template>
