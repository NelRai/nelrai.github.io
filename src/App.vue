<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
// import Navigation from './components/Navigation.vue'
import Content from './components/Content.vue'
import Clipboard from './components/Clipboard.vue'
import Projects from './components/Projects.vue'
import Navigation from './components/Navigation.vue'

import MobileNavBottom from './components/MobileNavBottom.vue'


let hideContent = ref(true);
console.log(hideContent);

let option1 = ref(false);
console.log(option1);

let visibleProjects = ref(false);
console.log(showProjects);

function showClipboard() {
  option1.value = !option1.value;
  visibleProjects.value = false;
  hideContent.value = false;

  console.log(option1);
}



function showProjects() {
  visibleProjects.value = !visibleProjects.value;
  option1.value = false;
  hideContent.value = false;

  console.log(showProjects);
}


let sidebarVisible = ref(true);

function sidebarHide() {
  sidebarVisible.value = !sidebarVisible.value;
}

// let sidebarVisible = ref(true);

// function sidebarHide() {
//   sidebarVisible.value = !sidebarVisible.value;
// }


</script>

<template>

  <div class="tablet hidden lg:flex  ">

    <div class="whatever flex max-w-md w-full h-full fixed lg:max-w-md">
      <div class="sidebar md:min-w-md  w-full flex flex-col justify-between content-between h-dvh p-4 bg-neutral-400 gap-4" v-if="sidebarVisible">
        <Header @showProjectsBTN="showProjects"  />
        <Clipboard />
        <MobileNavBottom @showClipboardBTN="showClipboard" @showProjectsBTN="showProjects"  />
    </div>

    <button class="sidebar-close-btn w-8 h-8 absolute top-1/2 -right-4  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hidden lg:flex" 
    @click="sidebarHide"  :class="{  'right-auto left-0 rotate-180' : !sidebarVisible, 'md:hidden lg:hidden 2xl:flex' : visibleProjects }" 
    >
      <img src="./assets/chevron-left.svg" alt="" class="w-4 h-4" />
    </button>


      <div class="ausklappbar w-full p-4 bg-neutral-400 absolute left-full top-0 h-full 2xl:hidden" v-show="visibleProjects">

        <Projects />

      </div>
<!-- 
      <button class="sidebar-close-btn w-8 h-8 absolute top-1/2 -right-4  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hidden lg:flex" 
    @click="projectsHide" v-if="!showProjects" :class="showProjects ? 'myFirstClass' : 'right-auto left-0 rotate-180'"
    >
      <img src="./assets/chevron-left.svg" alt="" class="w-4 h-4" />
    </button> -->


    </div>

    <div class="flex flex-col items-center gap-8 md:w-2/3 md:mx-8 md:mt-8 md:h-[2000px] md:ml-[480px] 2xl:mx-[480px] 2xl:w-full "
    :class="{'md:w-full md:ml-0 2xl:ml-0' : !sidebarVisible ,   'md:w-full md:mr-0 2xl:mr-0' : !visibleProjects } "
    >

      <Navigation />

      <Content />

    </div>

  

    <div class="sidebar-right hidden 2xl:block w-1/3 fixed right-0 h-dvh 2xl:max-w-md bg-neutral-400"  v-show="visibleProjects">
      <Projects />
    </div>
  

  </div>


  <div class="w-dvw h-dvh  bg-neutral-100 lg:hidden">
    <Header />

    <main class="w-dvw h-dvh py-16 ">
      <!-- <Navigation />  -->

      <div class="p-4 w-full h-full " v-show="option1">
        <Clipboard />
      </div>
      <div class="p-4 w-full h-full " v-show="visibleProjects">
        <Projects />
      </div>

      <div class="p-4 w-full h-full" v-show="hideContent">
        <Content />
      </div>

    </main>



    <MobileNavBottom @showClipboardBTN="showClipboard" @showProjectsBTN="showProjects" />

  </div>
</template>





<style scoped></style>
