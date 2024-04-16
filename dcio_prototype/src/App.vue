<script setup>
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
let option1 = ref(false);
console.log(option1);

function increaseCount()  {
  console.log(option1);
  option1.value = !option1.value;
  console.log(option1);
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank" v-show='option1'>
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <h1 v-show="option1">Hello!</h1>

  <HelloWorld msg="Vite + Vue" />

  <button class="bg-white h-8 w-8 rounded-md absolute mt-5" @click="increaseCount">GAGAG</button>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
