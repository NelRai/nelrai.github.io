<script setup lang="ts">


// const show = "hello"
// const emit = defineEmits({
//   option1: Boolean
// })
 
// function first() {
//   console.log(option1);
//   option1 = !option1;
//   console.log(option1);
// }

// import { defineEmits } from 'vue'

const emit = defineEmits(['clicked'])

function first() {
 
  emit('clicked')
}
</script>

<template>
  <div class="flex justify-between items-center p-4 bg-slate-500 h-16 w-full fixed bottom-0 left-0 shadow-md">
    <!-- <button id="clipboardBTN" class="bg-white h-8 w-8 rounded-md" @click="$emit('first',option1)"></button> -->
    <button class="bg-white h-8 w-8 rounded-md" @click="first"></button>
    <!-- <button
      @click="notifyParent"
      type="button"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
  >Click me!</button> -->
  </div>
</template>

<style scoped></style>
