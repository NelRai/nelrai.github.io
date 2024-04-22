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

const emit = defineEmits(["showClipboardBTN", "showProjectsBTN"]);

function showClipboardBTN() {
  emit("showClipboardBTN");
}

function showProjectsBTN() {
  emit("showProjectsBTN");
}
</script>

<template>
  <div
    class="flex justify-between items-center p-4 bg-slate-500 h-16 w-full fixed bottom-0 left-0 shadow-md lg:relative lg:rounded-lg z-50"
  >
    <!-- <button class="bg-blue-400 h-8 w-8 rounded-md" ></button> -->
    <!-- <button class="bg-red-400 h-8 w-8 rounded-md" @click="second"></button> -->

    <button
      class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal lg:hidden "  @click="showClipboardBTN"
    >
      <div class="flex gap-1 justify-center items-center">
        <img src="../assets/clipboard.svg" alt="" class="w-4 h-4" /><span
          >Clipboard</span
        >
      </div>
    </button>

    <button 
      class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal lg:hidden"  @click="showProjectsBTN"
    >
      <div class="flex gap-1 justify-center items-center">
        <img src="../assets/bookmark-square.svg" alt="" class="w-4 h-4" /><span
          >Projects</span
        >
      </div>
    </button>

  </div>
</template>

<style scoped></style>
