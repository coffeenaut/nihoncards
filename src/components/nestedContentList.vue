<script setup>
 import {useRouter} from 'vue-router'
 import {computed, ref} from 'vue'
import plusIcon from '@heroicons/vue/20/solid/PlusIcon'
 const emits = defineEmits(['hoveredOverEmit', 'linkClickedEmit'])
 const router = useRouter()
 const listProps = defineProps({
    item: {
        type: Object,
        required: true
    },
 })
 function hasChildren() {
    return Array.isArray(listProps.item.path)
 }
function childrenToggle() {
    childrenShown.value = !childrenCollapsed.value
} 
function goToUrl(link) {
    router.push({name: link})
    emits('linkClickedEmit');
}
const childrenCollapsed = ref(false)
const childrenShown = computed({
    get () {
        return childrenCollapsed.value
    },
    set(val) {
        childrenCollapsed.value = val    }
})
</script>
<template>
    <div class="flex flex-col">
            <div class="flex flex-col">
                <div class="flex cursor-pointer border-b border-gray-600 justify-between py-2">
                    <div @click="goToUrl(listProps.item.name)" >{{ listProps.item.name }}</div>
                    <div class=""><plusIcon @click="childrenToggle" class="h-6 w-6 stroke-gray-400" v-if="hasChildren()" /></div>
                </div>
                <div class="rounded-md subNest" v-if="hasChildren()" :class="{'uncollapsed' : childrenShown}">
                    <nestedContentList @link-clicked-emit=" emits('linkClickedEmit')" v-for="lItem, i in listProps.item.path" :item="lItem"></nestedContentList>
                </div>
            </div>
            
    </div>
</template>