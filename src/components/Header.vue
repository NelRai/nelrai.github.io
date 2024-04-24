<script setup lang="ts">

import Icon from './Icon.vue';
import Animation from './Animation.vue';


const emit = defineEmits(["showProjectsBTN"]);


function showProjectsBTN() {
  emit("showProjectsBTN");
}
</script>




<template>
  <header
    class="flex justify-between items-center p-4 bg-neutral-50 h-16 w-full fixed top-0 left-0 shadow-lg md:shadow-none    lg:relative lg:rounded-lg z-50  overflow-hidden"
  >
    <img src="../assets/dcio-logo.svg" alt="">

    <Icon :image="('/src/assets/bars-2.svg')" class="md:hidden"/>
    <Icon :image="('/src/assets/adjustment-horizontal.svg')" class="hidden lg:flex"  @click="showProjectsBTN" />

    <Animation />


    <!-- <button
      class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal lg:hidden"
    >
      <div class="flex gap-1 justify-center items-center">
        <img src="../assets/bars-2.svg" alt="" class="w-4 h-4" />
        
      </div>
    </button> -->

    <!-- <button
      class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal hidden lg:block"  @click="showProjectsBTN"
    >
      <div class="flex gap-1 justify-center items-center">
        <img src="../assets/adjustment-horizontal.svg" alt="" class="w-4 h-4" />
        
      </div>
    </button> -->
  </header>
</template>

<style scoped></style>
