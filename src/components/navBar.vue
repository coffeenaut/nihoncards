<script setup>
import {computed, ref} from 'vue'
import menuIcon from '@heroicons/vue/20/solid/Bars3Icon'
import contentList from './contentList.vue';
import menuOverlay from './menuOverlay.vue';
import sideBar from './sideBar.vue';
const emits = defineEmits(['showMenuEmit'])

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
function closeSideMenu() {
  showSideMenu.value = false
}
 function hover(it) {
    activeHover.value = it
 }
 function unhover() {
    let subList = getHasSubMenuList
    if(activeHover.value == 'subNav') {
        console.log(activeHover.value)
        activeHover.value = null
    }
    else if(subList.value.indexOf(activeHover.value) > -1) {

    }
        

 }
 const showHover = computed (() => {
    let subList = getHasSubMenuList
    if(!activeHover.value) {
        return false
    }
    else {
        if( subList.value.indexOf(activeHover.value) > -1 || activeHover.value === "subNav")
            return true
    }
 })
</script>
<template>
    <div class="screenOverlay" :class="showSideMenu ? 'show' : 'hide'">
        <menuOverlay @close-menu-emit="closeSideMenu" :toggle-animate="sideMenuShown">
            <template #logo>
            <img src="../assets/Gx250.svg" />
            </template>
            <sideBar @close-menu-emit="closeSideMenu" :list="navProps.list" />
        </menuOverlay>
    </div>
    <div class="flex w-full justify-between shadow-md gap-x-4 p-2">
        <slot name="logo"></slot>
        <menuIcon @click="showMenu" class="cursor-pointer h-8 w-8 stroke-gray-500 lg:hidden" />
        <nav class="hidden lg:flex">
            <div class="flex flex-col">
                <contentList @hovered-over-emit="hover" @mouseleave="unhover" :list="getRootList" :vertical="false"></contentList>
                <div @mouseover="hover('subNav')" @mouseleave="unhover" class="z-10 px-4 py-3 shadow-lg rounded-md fixed delay-100 subNavigation" :class="{'showSNav': showHover}">
                    <contentList v-for="nList, i in getNests" :list="getNodeNameList(nList.path)" :vertical="false"/>
                </div>
            </div>
            <slot></slot>
        </nav>
    </div>
</template>