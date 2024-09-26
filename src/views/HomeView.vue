<script setup>
import LightBulbIcon from '@heroicons/vue/20/solid/LightBulbIcon'
import CubeTransparent from '@heroicons/vue/20/solid/CubeTransparentIcon'
import LanguageIcon from '@heroicons/vue/20/solid/LanguageIcon'
import LinkCard from '../components/linkCard.vue';
</script>
<template>
    <div class="flex flex-col w-full p-2 items-center">
        <div class="flex flex-col w-5/8 p-4">
            <video class="py-10 w-[600px] rounded-xl" autoPlay loop muted>
                <source type="video/webm" src='../assets/flashcardsFeature.webm' />
            </video>
            <div class="flex flex-col w-full">
                <div class="headline">simple heuristics</div>
                <div class="flex place-self-center headline">at your fingertips</div>
            </div>
        </div>
        <!-- <div class="flex justify-end items-stretch divider">
            <Sectioner class="object-fill w-full"/>
        </div> -->
        <div class="flex py-20 flex-col w-7/8">
            <div class="flex flex-col lg:flex-row justify-evenly gap-x-8 px-8 w-full">
                <LinkCard title="Language Trainer" content="Learn Japanese using classic memory retention techniques through repetition and commitment">
                    <div class="flex justify-center p-2"><LightBulbIcon class="icon-large"/></div>
                </LinkCard>
                <LinkCard title="Expand the Mind" content="Broaden your comprehension skills through organized word matching puzzles">
                    <div class="flex justify-center p-2"><CubeTransparent class="icon-large"/></div>
                </LinkCard>
                <LinkCard title="Globally Curated" content="Sourced from defensive language institute, international foreign language center to fit lessons from basics to conversatioal">
                    <div class="flex justify-center p-2"><LanguageIcon class="icon-large"/></div>
                </LinkCard>
            </div>
            <div class="flex justify-center py-20">
                <RouterLink to="/learn/flashcards"><div class="button-primary text-center">Get Started</div></RouterLink>
            </div>
        </div>
    </div>
</template>