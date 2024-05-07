<script setup lang="ts">
import Icon from './Icon.vue';

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
    class="hidden lg:flex justify-between items-center p-4 gap-4 bg-red-50 w-full fixed bottom-0 left-0 shadow-mdInvert md:shadow-none  lg:relative lg:rounded-lg z-50"
  >
 <img src="/avatar-big.png" alt="">

    <div class="user_name text-xs grow ">
    <p class="text-neutral-700">Benjamin Danneberg</p>
    <p class="text-neutral-500">Deep Content GmbH</p>
    </div>

    <Icon Squares2x2_icon class="h-10" />


  </div>
</template>

<style scoped></style>
