<script setup>
import { computed, ref } from 'vue';
import Switch from './switch.vue';
const emits = defineEmits(['changePropertyEmit'])

const settingProps = defineProps({
    player: {
        type: Object,
        required: true
    },
})
const settings = computed(() => {
    return Object.entries(settingProps.player)
})
function toggleSwitch(pName, pValue) {
    emits("changePropertyEmit", pName, pValue)
}
function propertyChange(e) {
    emits("changePropertyEmit", e.target.id, e.target.value)
}
</script>
<template>
    <div class="grid grid-cols-3 gap-x-8" >
        <div class="flex items-center" v-for="(property, i) in settings">
            <Switch v-if="typeof property[1] == 'boolean'"
            @toggle-property-emit="toggleSwitch"
            :key="i" 
            :propertyText="property[0]" 
            :propertyValue="property[1]" />
            <div v-else-if="typeof property[1] == 'number'" class="flex gap-x-2">
                <div class="flex items-center">{{ property[0] }}</div>
                <input 
                :id="property[0]" 
                :value="property[1]" 
                type="number" 
                @change="propertyChange"
                class="setting" />
            </div>
        </div>
    </div>
</template>