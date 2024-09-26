<script setup>
import { computed, ref } from 'vue';
const emits = defineEmits(['togglePropertyEmit'])

const switchProps = defineProps({
    propertyText: {
        type: String,
        required: true
    },
    propertyValue: {
        type: Boolean,
        required: true
    }
})
function toggleSwitch() {
    emits("togglePropertyEmit", switchProps.propertyText, !switchProps.propertyValue)
}
</script>
<template>
    <div class="flex items-center gap-x-4">
        <div class="switch-label">
            {{ switchProps.propertyText }}
        </div>
        <div class="flex items-center switch" @click="toggleSwitch">
            <div class="switch-toggle" :class="switchProps.propertyValue && 'switch-toggle-on'"></div>
        </div>
    </div>
</template>