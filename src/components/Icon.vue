<script setup lang="ts">
defineProps<{ image: string }>()


</script>

<template>
  <button
    class="sidebar-close-btn  w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
    <img :src="image"  alt="" class="w-5 h-5 md:w-4 md:h-4" />
  </button>

</template>

<style scoped></style>
