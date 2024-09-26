<script setup>
import { computed, ref } from 'vue';
import {Timeout, isObject} from '../util/tools'
import FilterData from '../data/output/Filters.json'
import { toKana } from 'wanakana';
const emits = defineEmits(['filterResultsEmit'])
const inputValue = ref(null)
function filterItemClicked(filter, index) {
    if(filter.tag === "alphabet") {
        filterData.value = filter.list
    }
    else
        emits("filterResultsEmit", filter, index)
}
const filters = ref(FilterData)
const filterData = computed({
    get() {return filters.value},
    set(val) {filters.value = val}
})
const flip = ref(false)
const animateFlip = computed({
    get() { return flip.value},
    set(val) { flip.value = val}
})
const filterProps = defineProps({
    setName: {
        type: String,
        required: true
    }
 })
</script>
<template>
    <div class="flex flex-col justify-center items-center filter-list">
        <div class="filter-listItem " :class="filterProps.setName == filter.tag && 'active-filter'" @click="filterItemClicked(filter, i)" v-for="(filter, i) in filters" :key="i">
            {{filter.tag}}
        </div>
    </div>
</template>