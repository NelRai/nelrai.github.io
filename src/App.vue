<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
// import Navigation from './components/Navigation.vue'
// import Content from './components/Content.vue'
import Clipboard from './components/Clipboard.vue'
import Projects from './components/Projects.vue'
import MobileNavBottom from './components/MobileNavBottom.vue'



let option1 = ref(false);
console.log(option1);

function increaseCount()  {
  option1.value = !option1.value;
  showProjects.value = false;

  console.log(option1);
}

let showProjects = ref(false);
console.log(showProjects);

function showSecond()  {
  showProjects.value = !showProjects.value;
  option1.value = false;
  console.log(showProjects);
}



</script>

<template>


  <div class="w-dvw h-dvh  bg-neutral-100">
    <Header />

    <main class="w-dvw h-dvh py-16" >
      <!-- <Navigation />  -->

      <div class="p-4 w-full h-full" v-show="option1"  >
          <Clipboard  />  
      </div>
      <div class="p-4 w-full h-full" v-show="showProjects"  >
          <Projects  />  
      </div>

 
      <!-- <Content /> -->
    
      <button id="clipboardBTN" class="bg-white h-8 w-8 rounded-md"></button>

      <!-- <p>Button has been clicked: {{ count }} times</p> -->

      </main>
      <MobileNavBottom @clicked="increaseCount"  @showSecond="showSecond"  />

  </div>
</template>





<style scoped></style>
