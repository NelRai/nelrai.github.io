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
// defineProps<{ clipboardVisible: Boolean }>()
defineProps({
  clipboardVisible: Boolean,
  projectsVisible: Boolean
})

// import { option1 } from "/App.vue";  

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
    class="flex justify-between items-center p-4 bg-neutral-50 h-16 w-full fixed bottom-0 left-0 shadow-mdInvert md:shadow-none  lg:relative lg:rounded-lg z-50 lg:hidden"
  >

    <button
      class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal lg:hidden "  @click="showClipboardBTN"
      :class="{
          'text-dc-400 border-dc-400': clipboardVisible
        }"
    >
      <div class="flex gap-1 justify-center items-center">
        <img src="../../assets/clipboard.svg" alt="" class="w-4 h-4" /><span
          >Clipboard</span
        >
      </div>
    </button>

    <button 
      class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal lg:hidden"  @click="showProjectsBTN"
      :class="{
          'text-dc-400 border-dc-400': projectsVisible
        }"
    >
      <div class="flex gap-1 justify-center items-center">
        <img src="../../assets/bookmark-square.svg" alt="" class="w-4 h-4" /><span
          >Projects</span
        >
      </div>
    </button>

  </div>
</template>

<style scoped></style>
