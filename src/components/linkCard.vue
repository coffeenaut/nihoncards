<script setup>
import XMarkIcon from '@heroicons/vue/20/solid/XMarkIcon';
import CheckIcon from '@heroicons/vue/20/solid/CheckIcon';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const hover = ref(false)
const isHovered = computed({
    get() {return hover.value},
    set(val) {hover.value = val}
})
const cardProps = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    contentColor: {
        type: String,
        required: true
    }
 })
</script>
<template>
    <div class="flex flex-col linkCard">
        <slot></slot>
        <div class="linkCard-info">
            <div class="linkCard-title">
                {{ cardProps.title }}
            </div>
            <div class="linkCard-content">
                {{ cardProps.content }}
            </div>
        </div>
    </div>
</template>