<script setup lang="ts">
import { ref } from "vue";

import arrowUpTray from './svg/arrow-up-tray.vue'
import documentText from './svg/document-text.vue'
import linkSVG from './svg/link.vue'
import Trash from './svg/trash.vue'
import IconBox from './IconBox.vue';

import { defineProps } from 'vue';



const props = defineProps({
    id: String,
    headline: String,
    fileUpload: Boolean,
    linkedIn: Boolean,
    url: Boolean,
    timeText: String,
    bgImage: String,
    image: Boolean,
    projectContentActive: Boolean,
    cardRed: Boolean
})

let activeIconBox = ref('iconBox1');

const emit = defineEmits(["activeProject"]);

const cardClicked = () => {
   
emit('activeProject', props.id)
}

// function activeProject() {
//   emit("activeProject");
// }


function iconBoxActive(id) {
    activeIconBox.value = id;
    console.log('iconBoxActive', id);
}


</script>

<template>

    <div 
    class="card w-full p-4 flex flex-col gap-2 items-start text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-lg  hover:bg-neutral-100 hover:cursor-pointer hover:text-neutral-950 active:border-dc-400 hover:shadow-lg group/card  relative transition-0-3s  "
    :class="{ 'border-dc-400': cardRed }"
    @click="cardClicked"
    >

        <div class="card-headline text-base font-normal z-10 pr-[40%] ">
           <h4>{{ headline }}</h4>
        </div> 

        <div class="project_content flex flex-col gap-2 " v-if="cardRed">
            <div class="flex gap-2 align-top">
                <img src="../assets/card_winkel.svg" alt="">
                <IconBox id="iconBox1"  document-text_icon text="Ben - LinkedIn Post - All" @click="iconBoxActive('iconBox1')"  :class="{ 'border-dc-400': activeIconBox === 'iconBox1'}"/>
            </div>
            <div class="flex gap-2 align-top">
                <img src="../assets/card_winkel.svg" alt="">
                <IconBox id="iconBox2"  document-text_icon text="Matthias - LinkedIn Post - All" @click="iconBoxActive('iconBox2')" :class="{ 'border-dc-400': activeIconBox === 'iconBox2' }"  />
            </div>


        </div>

        <div class="card-tag p-2 bg-neutral-50  border border-solid border-neutral-200 group-hover/card:border-neutral-300 group-hover/card:bg-neutral-100  rounded-lg  text-xs font-normal z-10  transition-0-3s " v-if="fileUpload || linkedIn || url">

            <div class="flex gap-1 justify-center items-center z-10" v-if="fileUpload"> <arrowUpTray class="w-4 h-4"  /> <span>File Upload</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="linkedIn"><documentText class="w-4 h-4" /><span>LinkedIn Post</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="url"><linkSVG class="w-4 h-4" /><span>URL</span></div>

        </div>

        <span class="text-xs font-normal text-neutral-500 group-hover/card:text-neutral-950 transition-0-3s  z-10" v-if="timeText">{{timeText}}</span>
        <div class="white_gradient">
        <img src="../assets/bg-image-01.png" v-if="image" alt="" class="h-full w-full object-cover absolute z-0 top-0 left-0 rounded-lg   after:h-full after:w-full after:top-0 after:left-0 after:rounded-lg  after:bg-gradient-to-r after:from-white after:from-30% ">
    </div>
        <div class="result-close  opacity-0 group-hover/card:opacity-100 group/icon absolute -bottom-2 -right-2 transition-0-3s ">
            <button
                class="sidebar-close-btn  w-10 h-10  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hover:border-dc-100 hover:bg-neutral-100 flex z-40 transition-0-3s ">
                <Trash  alt=""  class="w-6 h-6" />
            </button>
        </div>

        
    </div>


</template>

<style scoped></style>
