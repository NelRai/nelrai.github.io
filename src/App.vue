<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
// import Navigation from './components/Navigation.vue'
import Content from './components/Content.vue'
import Clipboard from './components/Clipboard.vue'
import Projects from './components/Projects.vue'
import MobileNavBottom from './components/MobileNavBottom.vue'


let hideContent = ref(true);
console.log(hideContent);

let option1 = ref(false);
console.log(option1);

let showProjects = ref(false);
console.log(showProjects);

function increaseCount() {
  option1.value = !option1.value;
  showProjects.value = false;
  hideContent.value = false;

  console.log(option1);
}



function showSecond() {
  showProjects.value = !showProjects.value;
  option1.value = false;
  hideContent.value = false;

  console.log(showProjects);
}



</script>

<template>

  <div class="tablet hidden md:flex  ">

    <div class="whatever flex w-1/3 fixed lg:max-w-md">
      <div class="sidebar  w-full flex flex-col justify-between content-between h-dvh p-4 bg-neutral-400 gap-4">
        <Header />
        <Clipboard />

        <MobileNavBottom @clicked="increaseCount" @showSecond="showSecond" />

      </div>

      <div class="ausklappbar w-full p-4 bg-neutral-400 absolute left-full top-0 h-full" v-show="showProjects">

        <Projects />

      </div>

    </div>

    <Content />

    <div class="sidebar-right hidden 2xl:block w-1/3 fixed right-0 h-dvh 2xl:max-w-md">
      <Projects />
    </div>
  

  </div>


  <div class="w-dvw h-dvh  bg-neutral-100 md:hidden">
    <Header />

    <main class="w-dvw h-dvh py-16 ">
      <!-- <Navigation />  -->

      <div class="p-4 w-full h-full " v-show="option1">
        <Clipboard />
      </div>
      <div class="p-4 w-full h-full " v-show="showProjects">
        <Projects />
      </div>

      <div class="p-4 w-full h-full" v-show="hideContent">
        <Content />
      </div>

    </main>



    <MobileNavBottom @clicked="increaseCount" @showSecond="showSecond" />

  </div>
</template>





<style scoped></style>
