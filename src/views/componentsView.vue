<script setup>
import {computed, ref} from 'vue'
import cardItem from '../components/cardItem.vue';
</script>

<template>
    <div class="flex w-full justify-center">
        <cardItem>
            <template #image>
                <img src="../assets/swarm.svg" />
            </template>
            <div>
                Current round: 197926
                <br />
                Phase: Reveal
                <br/>
                Last round played: 197756
                <br />
                Last round won: 100
            </div>
                
        </cardItem>
    </div>
</template>