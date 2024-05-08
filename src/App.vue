<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
// import Navigation from './components/Navigation.vue'
import Content from "./components/Content.vue";
import Clipboard from "./components/Clipboard.vue";
import Projects from "./components/Projects.vue";
import Navigation from "./components/Navigation.vue";

import MobileNavBottom from "./components/MobileNavBottom.vue";
import UserBox from "./components/UserBox.vue";

import chevronLeft from "./components/svg/chevron-left.vue";


let hideContent = ref(true);
console.log(hideContent);

let option1 = ref(false);
console.log(option1);

let visibleProjects = ref(false);
console.log(visibleProjects);

if (window.matchMedia("(min-width: 1536px)").matches) {
  visibleProjects.value = true;

console.log(visibleProjects);

}

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     console.log('11112');
//   } else {
//     console.log('asdasdasd');
//   }
// }

// // Create a MediaQueryList object
// var x = window.matchMedia("(min-width: 700px)")

// // Call listener function at run time
// myFunction(x);

// // Attach listener function on state changes
// x.addEventListener("change", function() {
//   myFunction(x);
// });

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

// let projectVisible = ref(true);

function projectHide() {
  visibleProjects.value = !visibleProjects.value;
}
</script>

<template>
  <div class="tablet hidden lg:flex bg-neutral-50">
    <div class="whatever flex max-w-md w-full h-full fixed lg:max-w-md z-50">
      <div
        class="sidebar md:min-w-md w-full flex flex-col justify-between content-between h-dvh max-h-dvh p-4 bg-neutral-50 gap-4 md:shadow-xl"
        v-if="sidebarVisible"
      >
        <Header @showProjectsBTN="showProjects"
        :projectsVisible="visibleProjects"
        />
        <Clipboard />
        <MobileNavBottom
          @showClipboardBTN="showClipboard"
          @showProjectsBTN="showProjects"
        />
        <UserBox />
      </div>

      <button
        class="sidebar-close-btn w-8 h-8 absolute top-1/2 -right-4 items-center justify-center rounded-full bg-neutral-50 border  border-neutral-200 hover:border-red-100 hidden lg:flex transition-0-3s group/icon  " 
        @click="sidebarHide"
        :class="{
          'right-auto left-0 rotate-180': !sidebarVisible,
          'md:hidden lg:hidden 2xl:flex': visibleProjects,
        }"
      >
      <chevronLeft class=" w-5 h-5"  />

        <!-- <img src="./assets/chevron-left.svg" alt="" class="w-5 h-5" /> -->

        
      </button>

      <div
        class="ausklappbar w-full  bg-neutral-50 absolute left-full top-0 h-full 2xl:hidden z-[90]"
        v-show="visibleProjects"
      >
        <Projects />
      </div>
  
    </div>

    <div
      class="small-desktop-content flex flex-col items-center gap-8 md:w-2/3 md:mx-8 md:mt-8 md:h-[2000px] md:ml-[480px] 2xl:mx-[480px] 2xl:w-full max-w-[960px] 2xl:max-w-none transition-0-3s"	
      :class="{
        'md:w-full md:ml-auto md:mr-auto md 2xl:ml-8 2xl:mr-[480px] 2xl:max-w-none':
          !sidebarVisible,
        '2xl:w-full 2xl:max-w-none 2xl:mr-8': !visibleProjects,
        '2xl:!mr-8 2xl:!ml-8': !visibleProjects && !sidebarVisible,
      }"
    >
      <Navigation />

      <Content />
    </div>

 

<div class="projects fixed right-0 hidden 2xl:block w-1/3 h-dvh 2xl:max-w-md ">

  <div
      class="sidebar-right-desktop bg-neutral-50 h-dvh md:shadow-xl"
      v-show="visibleProjects"
    >
      <Projects />
    </div>

  <button 
        class="sidebar-close-btn w-8 h-8 absolute top-1/2 -left-4 items-center justify-center rounded-full bg-neutral-50 border border-neutral-200  hover:border-red-100 hidden lg:flex z-50 rotate-180 transition-0-3s group/icon"
        @click="projectHide"
        :class="{
          'left-auto right-0 !rotate-0': !visibleProjects,
          'md:hidden lg:hidden 2xl:flex': visibleProjects,
        }"
      >
      <chevronLeft class=" w-5 h-5"  />
      </button>
</div>

  </div>

  <div class="w-dvw h-dvh bg-neutral-50 lg:hidden overflow-y-scroll">
    <Header />

    <main class="w-dvw h-full py-16">
      <!-- <Navigation />  -->

      <div class="px-4 my-4 w-full h-full" v-show="option1">
        <Clipboard />
      </div>
      <div class="px-4 my-4 w-full h-full" v-show="visibleProjects">
        <Projects />
      </div>

      <div class="px-4 my-4 w-full h-full" v-show="hideContent">
        <Content />
      </div>
    </main>

    <MobileNavBottom
      @showClipboardBTN="showClipboard"
      @showProjectsBTN="showProjects"
      :clipboardVisible="option1"
      :projectsVisible="visibleProjects"
    />
  </div>
</template>

<style scoped></style>
