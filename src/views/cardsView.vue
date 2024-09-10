<script setup>
import cardItem from '../components/cardItem.vue';
import squaresIcon from '@heroicons/vue/20/solid/SquaresPlusIcon'
import sparklesIcon from '@heroicons/vue/20/solid/SparklesIcon'
import rocketIcon from '@heroicons/vue/20/solid/RocketLaunchIcon'
import postcardCarousel from '../components/postcardCarousel.vue';

const itemPics1 = [
    {
        image: '/src/assets/img/jhu-01.jpg',
    },
    {
        image: '/src/assets/img/jhu-02.jpg',
    },
    {
        image: '/src/assets/img/jhu-03.jpg',
    },
]
</script>
<template>
    <div class="flex w-full justify-evenly gap-x-2">
        <cardItem class="w-1/4">
            <template #title>
                 Site Assembly
            </template>
            <template #image>
                <squaresIcon class="h-20 w-20 fill-cyan-100 stroke-cyan-900"/>
            </template>
            <div class="text-xl font-bold px-6">
                Portable components built on vue to quickly create ideas. Save time and energy for the more in-depth design. Just import and play
            </div>
        </cardItem>
        <cardItem class="w-1/4">
            <template #title>
                Elegant
            </template>
            <template #image>
                <sparklesIcon class="h-12 w-12 stroke-amber-500 fill-amber-100" />
            </template>
            <div class="text-xl font-bold px-6">
                Paired with <a href="https://tailwindcss.com/">tailwindcss</a> and <a href="https://heroicons.com/">heroicons</a> for simplicity and intuitive design. Gumponents can be easily customized for apps.
            </div>
        </cardItem>
        <cardItem class="w-1/4">
            <template #title>
                Blazing Fast
            </template>
            <template #image>
                <rocketIcon class="h-12 w-12 stroke-rose-200 fill-cyan-900" />
            </template>
            <div class="text-xl font-bold px-6">
                Gumponents are lightweight and effecient. That's why Lotus' are fast.
            </div>
        </cardItem>
    </div>
    <div class="grid grid-cols-4 gap-4">
        <cardItem>
            <template #title>
                TayTay BF Bracelets
            </template>
            <template #image>
                <postcardCarousel :cards="itemPics1">
                </postcardCarousel>
            </template>
            <div class="text-xl font-bold px-6">
                $7.80
            </div>
        </cardItem>
    </div>
</template>