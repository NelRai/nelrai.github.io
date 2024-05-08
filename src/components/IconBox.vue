<script setup lang="ts">
// defineProps<{ image: string }>()



import adjustmentHorizontal from './svg/adjustment-horizontal.vue'
import archiveBoxMini from './svg/archive-box-mini.vue'
import arrowUpTray from './svg/arrow-up-tray.vue'
import bars2 from './svg/bars-2.vue'
import bars3 from './svg/bars-3.vue'
import bookmarkSquare from './svg/bookmark-square.vue'
import chatBubbleLeftRight from './svg/chat-bubble-left-right.vue'
import chevronLeft from './svg/chevron-left.vue'
import clipboardDocument from './svg/clipboard-document.vue'
import clipboard from './svg/clipboard.vue'
import cubeTransparent from './svg/cube-transparent.vue'
import documentText from './svg/document-text.vue'
import ellipsisHorizontal from './svg/ellipsis-horizontal.vue'
import linkSVG from './svg/link.vue'
import magnifyingGlass from './svg/magnifying-glass.vue'
import plusCircleMini from './svg/plus-circle-mini.vue'
import Squares2x2 from './svg/squares-2x2.vue'
import Trash from './svg/trash.vue'
import xMark from './svg/x-mark.vue'


// import linkSVG from './svg/link.vue'





defineProps({
  text: String,
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
  plusCircleMini_icon: Boolean,
  Squares2x2_icon: Boolean,
  Trash_icon: Boolean,
  xMark_icon: Boolean,
})


</script>

<template>
  
  <div class="card-tag px-2 py-[6px] bg-neutral-50  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20 hover:cursor-pointer hover:bg-neutral-100 active:border-dc-400   group/icon transition-0-3s  ">
    <div class="flex gap-1 justify-center items-center">
      <adjustmentHorizontal  v-if="adjustmentHorizontal_icon" class="svgIconBox " />
      <archiveBoxMini  v-if="archiveBoxMini_icon" class="svgIconBox " />
      <arrowUpTray  v-if="arrowUpTray_icon" class="svgIconBox " />
      <bars2  v-if="bars2_icon" class="svgIconBox " />
      <bars3   v-if="bars3_icon" class="svgIconBox " />
      <bookmarkSquare  v-if="bookmarkSquare_icon" class="svgIconBox " />
      <chatBubbleLeftRight  v-if="chatBubbleLeftRight_icon" class="svgIconBox " />
      <chevronLeft  v-if="chevronLeft_icon" class="svgIconBox " />
      <clipboardDocument  v-if="clipboardDocument_icon" class="svgIconBox " />
      <clipboard  v-if="clipboard_icon" class="svgIconBox " />
      <cubeTransparent  v-if="cubeTransparent_icon" class="svgIconBox " />
      <documentText  v-if="documentText_icon" class="svgIconBox " />
      <ellipsisHorizontal  v-if="ellipsisHorizontal_icon" class="svgIconBox " />
      <linkSVG  v-if="linkSVG_icon" class="svgIconBox " />
      <magnifyingGlass  v-if="magnifyingGlass_icon" class="svgIconBox " />
      <plusCircleMini  v-if="plusCircleMini_icon" class="svgIconBox " />
      <Squares2x2  v-if="Squares2x2_icon" class="svgIconBox " />
      <Trash  v-if="Trash_icon" class="svgIconBox " />
      <xMark  v-if="xMark_icon" class="svgIconBox " />    
      <span>{{text}}</span>
    </div>
</div>



</template>

<style scoped>
.svgIconBox {
 width: 1.25rem;
 height: 1.25rem;
}



/* @media (min-width: 768px) {

  .svgIconBox {
    width: 1rem;
    height: 1rem;
  }
 } */


</style>
