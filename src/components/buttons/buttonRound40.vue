<script setup lang="ts">
// defineProps<{ image: string }>()
import adjustmentHorizontal from '../svg/adjustment-horizontal.vue'
import archiveBoxMini from '../svg/archive-box-mini.vue'
import arrowUpTray from '../svg/arrow-up-tray.vue'
import bars2 from '../svg/bars-2.vue'
import bars3 from '../svg/bars-3.vue'
import bookmarkSquare from '../svg/bookmark-square.vue'
import chatBubbleLeftRight from '../svg/chat-bubble-left-right.vue'
import chevronLeft from '../svg/chevron-left.vue'
import clipboardDocument from '../svg/clipboard-document.vue'
import clipboard from '../svg/clipboard.vue'
import cubeTransparent from '../svg/cube-transparent.vue'
import documentText from '../svg/document-text.vue'
import ellipsisHorizontal from '../svg/ellipsis-horizontal.vue'
import linkSVG from '../svg/link.vue'
import magnifyingGlass from '../svg/magnifying-glass.vue'
import OpenaiSvgrepoCom from '../svg/openai-svgrepo-com.vue'
import plusCircleMini from '../svg/plus-circle-mini.vue'
import Squares2x2 from '../svg/squares-2x2.vue'
import Trash from '../svg/trash.vue'
import xMark from '../svg/x-mark.vue'
// import linkSVG from './svg/link.vue'

defineProps({
  image: String,
  adjustmentHorizontal_icon: Boolean,
  archiveBoxMini_icon: Boolean,
  arrowUpTray_icon: Boolean,
  bars2_icon: Boolean,
  bars3_icon: Boolean,
  bookmarkSquare_icon: Boolean,
  chatBubbleLeftRight_icon: Boolean,
  chevronLeft_icon: Boolean,
  clipboardDocument_icon: Boolean,
  clipboard_icon: Boolean,
  cubeTransparent_icon: Boolean,
  documentText_icon: Boolean,
  ellipsisHorizontal_icon: Boolean,
  linkSVG_icon: Boolean,
  magnifyingGlass_icon: Boolean,
  OpenaiSvgrepoCom_icon: Boolean,
  plusCircleMini_icon: Boolean,
  Squares2x2_icon: Boolean,
  Trash_icon: Boolean,
  xMark_icon: Boolean,
})


</script>

<template>
  <button
    class="icon-btn  w-10 h-10 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 hover:border-neutral-200 hover:bg-neutral-100 active:border-dc-400 group/icon transition-0-3s">
    <!-- <img :src="image"  alt="" class="w-5 h-5 md:w-4 md:h-4" /> -->


    <adjustmentHorizontal  v-if="adjustmentHorizontal_icon" class="svgIcon " />
    <archiveBoxMini  v-if="archiveBoxMini_icon" class="svgIcon " />
    <arrowUpTray  v-if="arrowUpTray_icon" class="svgIcon " />
    <bars2  v-if="bars2_icon" class="svgIcon " />
    <bars3   v-if="bars3_icon" class="svgIcon " />
    <bookmarkSquare  v-if="bookmarkSquare_icon" class="svgIcon " />
    <chatBubbleLeftRight  v-if="chatBubbleLeftRight_icon" class="svgIcon " />
    <chevronLeft  v-if="chevronLeft_icon" class="svgIcon " />
    <clipboardDocument  v-if="clipboardDocument_icon" class="svgIcon " />
    <clipboard  v-if="clipboard_icon" class="svgIcon " />
    <cubeTransparent  v-if="cubeTransparent_icon" class="svgIcon " />
    <documentText  v-if="documentText_icon" class="svgIcon " />
    <ellipsisHorizontal  v-if="ellipsisHorizontal_icon" class="svgIcon " />
    <linkSVG  v-if="linkSVG_icon" class="svgIcon " />
    <magnifyingGlass  v-if="magnifyingGlass_icon" class="svgIcon " />
    <OpenaiSvgrepoCom  v-if="OpenaiSvgrepoCom_icon" class="svgIcon " />
    <plusCircleMini  v-if="plusCircleMini_icon" class="svgIcon " />
    <Squares2x2  v-if="Squares2x2_icon" class="svgIcon " />
    <Trash  v-if="Trash_icon" class="svgIcon " />
    <xMark  v-if="xMark_icon" class="svgIcon " />


    <!-- <arrowUpTray  v-if="svgArrowUpTray_show" class="svgIcon " /> -->



  </button>

</template>

<style scoped>
.svgIcon {
 width: 1.5rem;
 height: 1.5rem;
}



/* @media (min-width: 768px) {

  .svgIcon {
    width: 1rem;
    height: 1rem;
  }
 } */


</style>
