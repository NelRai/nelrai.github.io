<script setup lang="ts">
defineProps({
    headline: String,
  fileUpload: Boolean,
  linkedIn: Boolean,
  url: Boolean,
  timeText: String,
  bgImage: String
})

</script>

<template>

    <div class="card w-full p-4 flex flex-col gap-2 items-start text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-lg hover:border-red-400 hover:cursor-pointer relative after:h-full after:w-full after:absolute after:top-0 after:left-0 after:rounded-lg  after:bg-gradient-to-r after:from-white ">

        <div class="card-headline text-base font-normal z-10 ">
           <h4>{{ headline }}</h4>
        </div> 

        <div class="card-tag p-2  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-10" v-if="fileUpload || linkedIn || url">

            <div class="flex gap-1 justify-center items-center z-10" v-if="fileUpload"> <img src="../assets/arrow-up-tray.svg" alt="" class="w-4 h-4"><span>File Upload</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="linkedIn"><img src="../assets/document-text.svg" alt="" class="w-4 h-4"><span>LinkedIn Post</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="url"><img src="../assets/link.svg" alt="" class="w-4 h-4"><span>URL</span></div>

        </div>

        <span class="text-xs font-normal text-neutral-500 z-10" v-if="timeText">{{timeText}}</span>

        <img src="../assets/bg-image-01.png" alt="" class="h-full w-full object-cover absolute z-0 top-0 left-0 ">
        
    </div>


</template>

<style scoped></style>
