<script setup lang="ts">
import { ref } from "vue";

import arrowUpTray from '../svg/arrow-up-tray.vue'
import documentText from '../svg/document-text.vue'
import linkSVG from '../svg/link.vue'
import Trash from '../svg/trash.vue'
import IconBox from '../buttons/button32.vue';
import cardWinkel from "../svg/card-winkel.vue";

// @ts-ignore
import { useProjectsStore } from '../../stores/ProjectsStore'; 
// @ts-ignore
import { useClipboardsStore } from '../../stores/ClipboardsStore'; 



import { defineProps } from 'vue';
import ts from "typescript";
// import projects from "../data/projects.js";
// @ts-ignore

useProjectsStore();
useClipboardsStore();



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
    cardRed: Boolean,
    anchorLinks: Array,
    results: Array,
    clipboard: Boolean,
    project: Boolean,
})

let activeIconBox = ref('iconBox1');

const emit = defineEmits(["activeProject", "cardRemove"]);

const cardClicked = () => {
   
emit('activeProject', props.id)
}

const cardRemove = () => {
   
   emit('cardRemove', props.id)
}
   

// function activeProject() {
//   emit("activeProject");
// }

// @ts-ignore
function iconBoxActive(id) {
    activeIconBox.value = id;
    console.log('iconBoxActive', id);
}


const image2 = ref("https://picsum.photos/id/237/536/354");


const storeProject = useProjectsStore();

const removeCardProject = () => {
    storeProject.removeCard(props.id);
    console.log('removeCard', props.id);
};



const storeClipboard = useClipboardsStore();

const removeCardClipboard = () => {
    storeClipboard.removeCard(props.id);
    console.log('removeCard CLIPBOARD', props.id);
};


</script>

<template>

<div class="relative group/cardwrap">

    <div 
    class="card w-full p-4 flex flex-col gap-2 items-start text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-lg  hover:bg-neutral-100 hover:cursor-pointer hover:text-neutral-950 active:border-dc-400 hover:shadow-lg group/card  relative transition-0-3s bg-cover	  "
    :class="{ '!border-dc-400': cardRed }"
    @click="cardClicked"
    v-bind:style="[image ?  { backgroundImage: 'url(' + image2 + ')' } : { backgroundImage: 'url(' + bgImage + ')' }]"
    >

        <div class="card-headline text-base font-normal z-10 pr-[30%]   ">
           <h4 class="text-base blinker">{{ headline }}</h4>
        </div> 

        <div class="project_content flex flex-col gap-2 " v-if="cardRed">


            <div v-for="(result, index) in props.results" :key="index">
                <div class="flex gap-2 align-top">
                    <cardWinkel :class="{ 'cardWinkel-active': activeIconBox === (result as any).id }" />
                    <IconBox :href="'/#'+ (result as any).id" :id="(result as any).id"  document-text_icon :text="(result as any).infoBox" :anchor-link="(result as any)"  @click="iconBoxActive((result as any).id)"  :class="{ '!border-dc-400 cardWinkel-active': activeIconBox === (result as any).id}"/>
                </div>
            </div>


            <!-- <div class="flex gap-2 align-top">
            <cardWinkel  :class="{ 'cardWinkel-active': activeIconBox === 'iconBox1'}"  />
                <IconBox id="iconBox1"  document-text_icon text="Ben - LinkedIn Post - All" @click="iconBoxActive('iconBox1')"  :class="{ '!border-dc-400 cardWinkel-active': activeIconBox === 'iconBox1'}"/>
            </div>

            <div class="flex gap-2 align-top">
                <cardWinkel  :class="{ 'cardWinkel-active': activeIconBox === 'iconBox2'}"  />
                <IconBox id="iconBox2"  document-text_icon text="Matthias - LinkedIn Post - All" @click="iconBoxActive('iconBox2')" :class="{ '!border-dc-400 cardWinkel-active': activeIconBox === 'iconBox2' }"  />
            </div>
 -->

        </div>

        <div class="card-tag p-2 bg-neutral-50  border border-solid border-neutral-200 group-hover/card:border-neutral-300 group-hover/card:bg-neutral-100  rounded-lg  text-xs font-normal z-10  transition-0-3s " v-if="fileUpload || linkedIn || url">

            <div class="flex gap-1 justify-center items-center z-10" v-if="fileUpload"> <arrowUpTray class="w-4 h-4"  /> <span>File Upload</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="linkedIn"><documentText class="w-4 h-4" /><span>LinkedIn Post</span></div>
            <div class="flex gap-1 justify-center items-center z-10" v-if="url"><linkSVG class="w-4 h-4" /><span>URL</span></div>

        </div>

        <span class="text-xs font-normal text-neutral-500 group-hover/card:text-neutral-950 transition-0-3s  z-10" v-if="timeText">{{timeText}}</span>
        


        <div class="white_gradient" v-if="image"
>
          <!-- <img src="../assets/bg-image-01.png"  alt="" class="h-full w-full object-cover absolute z-0 top-0 left-0 rounded-lg   after:h-full after:w-full after:top-0 after:left-0 after:rounded-lg  after:bg-gradient-to-r after:from-white after:from-30% "> -->
        </div>

    
    </div>



    <div class="result-close  opacity-0 group-hover/cardwrap:opacity-100 group/icon absolute -bottom-2 -right-2 transition-0-3s ">
            <button v-if="project"
                class="sidebar-close-btn  w-10 h-10  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hover:border-dc-100 hover:bg-neutral-100 flex z-40 transition-0-3s "
                @click="removeCardProject"
                >
                <Trash  alt=""  class="w-6 h-6" />
            </button>

            <button v-if="clipboard"
                class="sidebar-close-btn  w-10 h-10  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hover:border-dc-100 hover:bg-neutral-100 flex z-40 transition-0-3s "
                @click="removeCardClipboard"
                >
                <Trash  alt=""  class="w-6 h-6" />
            </button>
        </div>


    </div>
</template>

<style scoped>
.white_gradient::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(252,252,253);
    background: linear-gradient(90deg, rgba(252,252,253,1) 0%, rgba(252,252,253,0.9) 50%, rgba(252,252,253,0) 100%);
    z-index: 0;
    border-radius: 0.4rem;
}

.cardWinkel-active  * {
    fill: #FF646F !important;
}


</style>
