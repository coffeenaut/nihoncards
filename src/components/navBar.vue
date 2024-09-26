<script setup>
import {computed, ref} from 'vue'
import menuIcon from '@heroicons/vue/20/solid/Bars3Icon'
import XMarkIcon from '@heroicons/vue/20/solid/XMarkIcon';
import MenuList from './MenuList.vue';
import MobileNavList from './MobileNavList.vue';
import { RouterLink } from 'vue-router';
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
 })
 const getRootList = computed(() => {
    return getNodeNameList(navProps.list)
 })
function closeSideMenu() {
  showSideMenu.value = false
}
</script>
<template>
    <div class="menu-overlay ":class="showSideMenu && 'show'">
        <div class="sidebar w-1/2 md:w-1/3" :class="showSideMenu && 'slide-right'">
            <div class="flex justify-between">
                <slot name="logo"></slot>
                <XMarkIcon @click="closeSideMenu" class="icon-medium-gray cursor-pointer" />
            </div>
        <div class="flex flex-col w-1/3">
                <MobileNavList v-for="(route, i) in navProps.list"
                :key="i"
                :navIndex="i"
                :item="route"
                :isParent="true"
                :displayChild="false"
                @close-menu-emit="closeSideMenu"
                />
            <!-- <RouterLink v-for="(route, i) in navProps.list" :to="`/${route.path}`">
                {{ route }}
            </RouterLink> -->
        </div>
        </div>
    </div>
    <div class="flex w-full justify-between gap-x-4 top-banner">
        <a href="/"><slot name="logo"></slot></a>
        <menuIcon @click="showMenu" class="icon-medium-gray md:hidden cursor-pointer" />
        <nav class="hidden md:flex">
            <div class="flex gap-x-10 items-center">
                <MenuList v-for="(route, i) in navProps.list"
                :key="i"
                :navIndex="i"
                :item="route"
                :isParent="true"
                :displayChild="false"
                />
            </div>
        </nav>
    </div>
</template>