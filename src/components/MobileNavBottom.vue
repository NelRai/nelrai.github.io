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

const emit = defineEmits(['clicked', 'showSecond'])

function first() {
 
  emit('clicked')
}

function second() {
 
 emit('showSecond')
}
</script>

<template>
  <div class="flex justify-between items-center p-4 bg-slate-500 h-16 w-full fixed bottom-0 left-0 shadow-md">
    <button class="bg-white h-8 w-8 rounded-md" @click="first"></button>
    <button class="bg-white h-8 w-8 rounded-md" @click="second"></button>

  </div>
</template>

<style scoped></style>
