<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/navBar.vue'
import Logo from './components/Logo.vue'
import routes from './data/routes.json'

const links = ["play", "learn", "about"]
</script>
<template>
    <div class="flex flex-col w-full">
      <div class="flex w-full">
        <NavBar :list="routes">
          <template #logo>
            <div class="flex gap-x-10 items-center">
              <Logo class="h-10 w-16" />
              <div class="site-title">nihon cards</div>
          </div>
          </template>
        </NavBar>
      </div>
      <div class="flex w-full">
        <RouterView />
      </div>
    </div>
</template>
