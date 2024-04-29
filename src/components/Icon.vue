<script setup lang="ts">
// defineProps<{ image: string }>()


import bars3 from './svg/bars-3.vue'
import bars2 from './svg/bars-2.vue'
import linkSVG from './svg/link.vue'
import svgArrowUpTray from './svg/arrow-up-tray.vue'


defineProps({
  image: String,
  bars30: Boolean,
  bars20: Boolean,
  linkSVG2: Boolean,
  svgArrowUpTray_show: Boolean,
  url: Boolean
})


</script>

<template>
  <button
    class="sidebar-close-btn  w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 hover:border-neutral-100 group">
    <!-- <img :src="image"  alt="" class="w-5 h-5 md:w-4 md:h-4" /> -->
    <bars3   v-if="bars30" class="w-5 h-5 md:w-4 md:h-4 stroke-blue-400 group-hover:stroke-red-800" />
    <bars2  v-if="bars20" class="w-5 h-5 md:w-4 md:h-4 stroke-blue-400 group-hover:stroke-red-800" />
    <linkSVG  v-if="linkSVG2" class="w-5 h-5 md:w-4 md:h-4 stroke-blue-400 group-hover:stroke-red-800" />
    <svgArrowUpTray  v-if="svgArrowUpTray_show" class="w-5 h-5 md:w-4 md:h-4 stroke-blue-400 group-hover:stroke-red-800" />
  </button>

</template>

<style scoped></style>
