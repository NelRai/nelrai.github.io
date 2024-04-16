<script setup lang="ts">
// import { ref } from 'vue'
import Header from './components/Header.vue'
// import Navigation from './components/Navigation.vue'
// import Content from './components/Content.vue'
import Clipboard from './components/Clipboard.vue'
// import Projects from './components/Projects.vue'
import MobileNavBottom from './components/MobileNavBottom.vue'

let option1:Boolean = false;


// const count = ref(0)

function increaseCount()  {
  console.log(option1);
  option1 = !option1;
  console.log(option1);
}

</script>

<template>


  <div class="w-dvw h-dvh  bg-neutral-100">
    <Header />

    <main class="w-dvw h-dvh py-16" >
      <h1 v-show="option1">Hello!</h1>
      <!-- <Navigation />  -->

      <div class="p-4 w-full h-10" v-show="option1"  >
              <Clipboard  />

      </div>
      <button class="bg-white h-8 w-8 rounded-md absolute -mt-5" @click="increaseCount">GAGAG</button>

<!-- 
      <Content />
      <Projects /> -->
      <button id="clipboardBTN" class="bg-white h-8 w-8 rounded-md"></button>

      <!-- <p>Button has been clicked: {{ count }} times</p> -->

      </main>
      <MobileNavBottom @clicked="increaseCount"  />

  </div>
</template>





<style scoped></style>
