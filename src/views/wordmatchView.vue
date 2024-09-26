<script setup>
import {computed, ref} from 'vue'
import LinkCard from '../components/linkCard.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex w-full justify-center">
        <div class="flex flex-col w-3/4">
            <div class="flex w-3/4 featured">
                <div class="flex w-full">
                    <LinkCard title="Word pick" content="challenge your japanese with organized word matching puzzles" contentColor="8C3061">
                        <video autoPlay loop muted>
                                <source type="video/webm" src='../assets/multipickFeature.webm' />
                        </video>
                    </LinkCard>
                </div>
            </div>
            <div class="flex ">
                <div class="flex w-1/4">
                    <LinkCard title="Word Match" content="challenge your japanese with organized word matching puzzles" contentColor="D95F59">
                        <img src="../assets/blossoms-4118517_1280.jpg" class="w-full rounded-t-2xl"/>
                    </LinkCard>
                </div>
                <div class="flex w-1/4">
                    <a href="/learn/kanaflashcards">
                        <LinkCard title="Kana cards" content="master hiragana or katakana using intuitive cards to improve your literacy" contentColor="C63C51">
                            <video autoPlay loop muted>
                                    <source type="video/webm" src='../assets/kanaflashFeature.webm' />
                            </video>
                        </LinkCard>
                    </a>
                </div>
                <div class="flex w-1/4">
                    <LinkCard title="Just Getting Started?" content="Start here to build your vocabulary with easy flash cards" contentColor="227B94">
                        <img src="../assets/blossoms-4118517_1280.jpg" class="w-full rounded-t-2xl"/>
                    </LinkCard>
                </div>
            </div>
        </div>
    </div>
</template>