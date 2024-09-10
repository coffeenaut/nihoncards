<script setup>
 import xIcon from '@heroicons/vue/20/solid/XMarkIcon'
const emits = defineEmits(['closeMenuEmit'])
const navProps = defineProps({
    toggleAnimate: {
        type: Boolean,
        default: false
    }
})
function closeMenu() {
    emits("closeMenuEmit")
}
</script>
<template>
    <div class="z-50 w-1/2 md:w-1/3 p-2 h-screen fixed sideMenuOverlay" :class="{'sideNavSlideRight': navProps.toggleAnimate}">
        <div class="flex justify-between">
            <slot name="logo"></slot>
            <xIcon @click="closeMenu" class="cursor-pointer h-8 w-8 fill-gray-400" />
        </div>
        <div><slot></slot></div>
    </div>
    <div class="z-40 w-full h-screen bg-black opacity-50 absolute top-0 left-0">
    </div>
    
</template>