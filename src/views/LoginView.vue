<script setup>
import {ref, computed} from 'vue'
import { useRouter } from 'vue-router';
import Logo from '@heroicons/vue/20/solid/KeyIcon'
const shake = ref(false);
const shakeThing = computed({
  get () {
    return shake.value;
  },
  set (val) {
    shake.value = val;
  }
})
const router = useRouter()
const uInputUser = ref(null);
const uInputPassword = ref(null);
const title = computed(() => {
    return "maul2";
})
function loginUser()
{
    //TODO: import guard
    let isUserAuthorized = guard.signInUser(uInputUser.value, uInputPassword.value)
    if(!isUserAuthorized) 
      shakeEmUp()
    else {
      //TODO: store authToken
      router.push({name: "home"})
    }

}
function shakeEmUp() {
  shakeThing.value = true;
    setTimeout(() => {
      shakeThing.value=false
    },1000)
}
</script>
<template>
    <div class="flex justify-center" :class="{shaker:shakeThing}">
        <div class="container">
        <div class="flex text-xl font-bold justify-center">
            {{title}}
        </div>
        <div class="flex justify-center" ><Logo class="h-24 w-24 rounded-full fill-green-500" /></div>
        <div class="flex justify-center">
            <div class="grid grid-cols-3 gap-y-2">
            <label for="uiUsername">Username</label><input class="inputForm px-3 col-span-2 h-8 rounded-md shadow-md" v-model="uInputUser" id="uiUsername"/>
            <label for="uiPassword">Password</label><input type="password" class="inputForm col-span-2 h-8 rounded-md shadow-md" @keyup.enter="loginUser()" v-model="uInputPassword" id="uiPassword"/>
        </div>
        </div>
        <div class="flex justify-center py-2"><button @click="loginUser()" class="h-8 w-20 bg-sky-800 rounded-lg shadow-lg">Login</button></div>
    </div>
    </div>
</template>