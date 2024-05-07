<script setup lang="ts">
import arrowUpTray from './svg/arrow-up-tray.vue'
import documentText from './svg/document-text.vue'
import linkSVG from './svg/link.vue'
import xMark from './svg/x-mark.vue'



defineProps({
    headline: String,
  fileUpload: Boolean,
  linkedIn: Boolean,
  url: Boolean,
  timeText: String,
  bgImage: String,
  image: Boolean
})

</script>

<template>

    <div class="card w-full p-4 flex flex-col gap-2 items-start text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-lg hover:border-red-100 hover:cursor-pointer hover:!text-red-200 active:border-red-400  group/card  relative transition-0-3s  ">

        <div class="card-headline text-base font-normal z-10 pr-[40%] ">
           <h4>{{ headline }}</h4>
        </div> 

        <div class="card-tag p-2 bg-neutral-50  border border-solid border-neutral-200 rounded-lg  text-xs font-normal z-10" v-if="fileUpload || linkedIn || url">

            <div class="flex gap-1 justify-center items-center z-10" v-if="fileUpload"> <arrowUpTray class="w-4 h-4"  /> <span>File Upload</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="linkedIn"><documentText class="w-4 h-4" /><span>LinkedIn Post</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="url"><linkSVG class="w-4 h-4" /><span>URL</span></div>

        </div>

        <span class="text-xs font-normal text-neutral-500 group-hover/card:text-red-200 transition-0-3s  z-10" v-if="timeText">{{timeText}}</span>
 
        <!-- <img src="../assets/bg-image-01.png" v-if="image" alt="" class="h-full w-full object-cover absolute z-0 top-0 left-0 rounded-lg   after:h-full after:w-full after:top-0 after:left-0 after:rounded-lg  after:bg-gradient-to-r after:from-white after:from-30% "> -->

        <div class="result-close  opacity-0 group-hover/card:opacity-100 group/icon absolute -bottom-2 -right-2 transition-0-3s ">
            <button
                class="sidebar-close-btn  w-10 h-10  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hover:border-red-100 flex z-40 transition-0-3s ">
                <xMark  alt=""  class="w-6 h-6" />
            </button>
        </div>

        
    </div>


</template>

<style scoped></style>
