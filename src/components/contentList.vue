<script setup>
 import {useRouter} from 'vue-router'
 import {computed} from 'vue'
 const emits = defineEmits(['hoveredOverEmit'])
 const router = useRouter()
 const listProps = defineProps({
    list: {
        type: Array,
        required: true
    },
    //default true
    vertical: {
        type: Boolean,
        required: false,
        default: true
    }
 })
 const listStyle = computed(() => {
    return listProps.vertical
 })
function hoveredOn(item) {
    emits("hoveredOverEmit", item)
} 
function goToUrl(link) {
    router.push({name: link})
}
</script>
<template>
    <div class="flex lg:gap-x-2" :class="listStyle ? 'flex-col' : 'flex-row'">
            <div class="cursor-pointer navLink" v-for="listItem, i in listProps.list" :key="i" @mouseover="hoveredOn(listItem)" @click="goToUrl(listItem)">{{ listItem }}</div>
    </div>
</template>