<script setup>
import { computed, ref } from 'vue';
import ChevronDown from '@heroicons/vue/20/solid/ChevronDownIcon'
const hoverIndex = ref(-1)
const hoverdex = computed({
    get() {
        return hoverIndex.value
    },
    set(value) {
        hoverIndex.value = value
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
function hoverOn() {
    hoverdex.value = listProps.navIndex
}
function hoverOff() {
    hoverIndex.value = -1
    
}
</script>
    <template>
<div class="flex flex-col w-full">
    <div class="flex flex-col py-2" @mouseover="hoverOn" @mouseleave="hoverOff">
        <RouterLink v-if="!hasChildren" :to="listProps.item.path" class="navitem">
            {{ listProps.item.name }}
        </RouterLink>
        <div v-else class="flex flex-col">
            <div class="flex items-center justify-center gap-x-1 topmenu"><div class="navitem">{{ listProps.item.name }}</div><ChevronDown v-if="hasChildren" class="icon-small-white" /></div>
            <div class="flex flex-nowrap flex-col gap-2 p-2 submenu " :class="listProps.navIndex === hoverdex && 'show'" v-if="hasChildren">                
                <RouterLink v-for="(ite, i) in listProps.item.path" :to="ite.path" class="navitem">
                    {{ite.name }}
                </RouterLink>
            </div>
            <!-- <MenuList v-if="hasChildren" v-for="(ite, i) in listProps.item.path"
                :displayChild="false"
                :key="i",
                :item="ite"
                :isParent="false" 
            /> -->
        </div>
    </div>
</div>
</template>