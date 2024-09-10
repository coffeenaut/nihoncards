<script setup>
import {computed, ref} from 'vue'
import contentList from './contentList.vue';
import menuOverlay from './menuOverlay.vue';
import NestedContentList from './nestedContentList.vue';
const emits = defineEmits(['showMenuEmit', 'closeMenuEmit'])

const sideMenuShown = ref(false)
const showSideMenu = computed ({
  get() {
    return sideMenuShown.value
  },
  set(value) {
    sideMenuShown.value = value
  }
})
const currentHover = ref(null)
const activeHover = computed({
    get() {
        return currentHover.value
    },
    set(value) {
        currentHover.value = value
    }
})
function showMenu() {
    // emits("showMenuEmit")
    showSideMenu.value = !showSideMenu.value
}
 const navProps = defineProps({
    list: {
        type: Array,
        required: true
    }
 });
 const getNests = computed(() => {
    let nests = []
    for (let child of navProps.list) {
        if (Array.isArray(child.path)) {
            nests.push(child)
        }       
    }
    return nests
 })
 const getRootList = computed(() => {
    return getNodeNameList(navProps.list)
 })
const getHasSubMenuList = computed( () =>  {
    return getNodeNameList(getNests.value)
})
 function getNodeNameList(list) {
    let nodes = []
    for(let child of list) {
        nodes.push(child.name)
    }
    return nodes
 }
function closeMenu() {
    emits('closeMenuEmit');
}
</script>
<template>
    <div class="flex w-full shadow-md gap-x-4 p-2">
            <div class="flex w-full flex-col">
                <NestedContentList @link-clicked-emit="closeMenu" v-for="lItem, i in navProps.list" :item="lItem" />
            </div>
            <slot></slot>
    </div>
</template>