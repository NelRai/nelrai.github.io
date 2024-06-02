<script setup lang="ts">
import Icon from '../buttons/buttonRound40.vue';
import Animation from '../Animation.vue';

defineProps({
  clipboardVisible: Boolean,
  projectsVisible: Boolean
})

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
    class="user-box hidden lg:flex justify-between items-center p-4 gap-4 bg-[#F8F8FC] w-full fixed bottom-0 left-0 shadow-mdInvert md:shadow-none  lg:relative lg:rounded-xl z-50"
  >
 <img src="/avatar-big.png" alt="" class="z-50">

    <div class="user_name text-xs grow z-50">
      <p class="text-neutral-700 ">Benjamin Danneberg</p>
      <p class="text-neutral-500">Deep Content GmbH</p>
    </div>

    <Icon Squares2x2_icon class="h-10"  v-tooltip.top="'Launcher'" />

    <div class="overflow-hidden absolute top-0 left-0 w-full h-full rounded-lg">
      <Animation class="overflow-hidden"/>
    </div>

  </div>
</template>

<style scoped></style>
