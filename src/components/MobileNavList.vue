<script setup>
import { computed, ref } from 'vue';
import ChevronDown from '@heroicons/vue/20/solid/ChevronDownIcon'
import ChevronRight from '@heroicons/vue/20/solid/ChevronRightIcon'
const emits = defineEmits(['closeMenuEmit'])
const showChildren = ref(false)
const openMenu = computed({
    get() {
        return showChildren.value
    },
    set(value) {
        showChildren.value = value
    }
})
const listProps = defineProps ({
    isParent: {
        type: Boolean,
        required: false
    },
    item: {
        type: Object,
        required: false
    },
    displayChild: {
        type: Boolean,
        required: false
    },
    navIndex: {
        type: Number,
        required: true
    }
})
const hasChildren = Array.isArray(listProps.item.path)
const parentNode = listProps.isParent
// function hoverOn() {
//     hoverdex.value = listProps.navIndex
// }
// function hoverOff() {
//     hoverIndex.value = -1
    
// }
function toggleSubMenu() {
    console.log('click')
    openMenu.value = !openMenu.value
}
function emitCloseMenu() {
    emits("closeMenuEmit")
}
</script>
    <template>
<div class="flex flex-col w-full">
    <div v-if="!hasChildren" class="flex px-4 mobile-top-menu">
        <RouterLink :to="listProps.item.path" @click="emitCloseMenu" class="navitem">
            {{ listProps.item.name }}
        </RouterLink>    
    </div>
    <div v-else class="flex flex-col">
        <div @click="toggleSubMenu" class="flex items-center justify-center gap-x-1 mobile-top-menu">
            <div class="navitem">{{ listProps.item.name }}</div>
            <ChevronDown v-if="hasChildren && showChildren" class="icon-small-white" />
            <ChevronRight v-if="hasChildren && !showChildren" class="icon-small-white" />
        </div>
        <div class="flex flex-nowrap flex-col gap-2 p-2 mobile-submenu" :class="showChildren && 'dropdown'" v-if="hasChildren">                
            <RouterLink v-for="(ite, i) in listProps.item.path" :to="ite.path" @click="emitCloseMenu" class="navitem">
                {{ite.name }}
            </RouterLink>
        </div>
    </div>
</div>
</template>