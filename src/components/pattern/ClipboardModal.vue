<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted } from "vue";
import selectButton24 from '../buttons/button24.vue';
import svgLink from '../svg/link.vue';
import arrowUpTray from '../svg/arrow-up-tray.vue'
import arrowDownTray from '../svg/arrow-down-tray.vue'
import Icon from '../buttons/buttonRound40.vue';
import IconBox from "../buttons/button32.vue";
import button40 from "../buttons/button40.vue";
import plusCircleMini from '../svg/plus-circle-mini.vue'
import questionMark from "../svg/question-mark.vue";
import FileUpload from 'primevue/fileupload';

//i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();



const props = defineProps({
    headline: String,
    content: String,
    IconBoxText: String,
    linkIcon: Boolean,
    arrowUpTray_icon: Boolean,
    datasetButton: Boolean,
    newText: Boolean,
    importURL: Boolean,
    uploadFiles: Boolean,
    fileUpload: Boolean,
    imageUpload: Boolean,
    videoUpload: Boolean,
    audioUpload: Boolean,
    linkedIn: Boolean,
    url: Boolean,
    urlLink: String,
    text: Boolean,
    image: String,
})

console.log('imageLink geht?', props.image);
const image2 = ref(props.image);


// const modal3barsVisible = ref(true);

// const modalAddlink_modeText = ref(true);
// const modalAddlink_modeHTML = ref(false);
// const modalAddlink_modeMarkdown = ref(false);

// const modalAddlink_modeText_function = () => {
//     modalAddlink_modeText.value = true;
//     modalAddlink_modeHTML.value = false;
//     modalAddlink_modeMarkdown.value = false;
// }

// const modalAddlink_modeHTML_function = () => {
//     modalAddlink_modeText.value = false;
//     modalAddlink_modeHTML.value = true;
//     modalAddlink_modeMarkdown.value = false;
// }

// const modalAddlink_modeMarkdown_function = () => {
//     modalAddlink_modeText.value = false;
//     modalAddlink_modeHTML.value = false;
//     modalAddlink_modeMarkdown.value = true;
// }
           

function onAdvancedUpload(event: Event | undefined) {
}

import { usePrimeVue } from 'primevue/config';
// import Content from "./Content.vue";
// import { useToast } from "primevue/usetoast";

const $primevue = usePrimeVue();


// Quill 
import Quill from 'quill';


onMounted(() => {
  const editors = document.querySelectorAll('.editor');
  
  editors.forEach((editor) => {
    //@ts-ignore

    const quill = new Quill(editor, {
      theme: 'bubble'
    });
  });
});


//Action (3dot) Menu
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
// import Square2Stack from "../svg/square-2-stack.vue";
import ArrowDownTrayMini from "../svg/arrow-down-tray-mini.vue";
import clipboardDocumentMini from "../svg/clipboard-document-mini.vue";
// import Sparkles from "../svg/sparkles.vue";
import chevronRight from "../svg/chevron-right.vue";


const menu = ref(null);


const menuItems2 = ref([

  { 
    label: t('clipboard.ActionMenu.RequestUrlOptimization'),
    component: clipboardDocumentMini,
  },
  {
    label: t('clipboard.ActionMenu.SaveAs'),
    component: ArrowDownTrayMini,
    hasSubmenu: true,
    items: [
      {
        label: 'PDF',
        icon: 'pi pi-fw pi-copy',
        command: () => {
          console.log('Copy clicked');
        }
      },
      {
        label: 'Word',
        icon: 'pi pi-fw pi-copy',
        command: () => {
          console.log('Copy clicked');
        }
      },
      {
        label: 'TXT',
        icon: 'pi pi-fw pi-copy',
        command: () => {
          console.log('Copy clicked');
        }
      }
    ]
  }
]);
</script>


<template>

    <div class="modal-addLink z-50 ">

        <div class="modal-addLink-content max-w-[928px] w-[calc(100%-64px)]  relative rounded-xl shadow-xl z-50">

            <Icon xMark_icon @click="$emit('close')" class="absolute -top-4 -right-4 " />

            <div
                class="modal-addLink-header px-8 py-8 flex justify-between items-center bg-neutral-50 border-neutral-200 border-x border-t rounded-t-xl border-b bg-no-repeat	bg-cover bg-center relative overflow-hidden"
                v-bind:style="[image ?  { backgroundImage: 'url(' + image2 + ')' } : { backgroundImage: 'url(' + bgImage + ')' }]"


                >

                <div class="flex flex-col gap-2 items-start z-10">
                    <div class="flex flex-col gap-1">
                        <!-- <svgLink v-if="linkIcon" class="w-6 h-6" />
                        <arrowUpTray v-if="arrowUpTray_icon" class="w-6 h-6" /> -->
                        <h3 class="text-xs leading-4 text-neutral-500" v-if="url" >{{urlLink}}</h3>
                        <h2 class="text-lg leading-[1.375rem] blinker">{{ headline }}</h2>
                    </div>
                    <IconBox bars3_icon text="Text" v-if="text" />
                    <IconBox arrowUpTray_icon text="File Upload" v-if="fileUpload" />
                    <IconBox documentText_icon text="LinkedIn" v-if="linkedIn" />
                    <IconBox linkSVG_icon text="URL" v-if="url" />

                </div>

                <div class="flex gap-4 ">
                    <Icon ellipsisHorizontal_icon v-on:click="menu.show($event)" />
                    <TieredMenu ref="menu" :model="menuItems2" popup>
                        <template #item="{ item, props, hasSubmenu }">
                            <a class="flex align-items-center font-body" v-bind="props.action">
                                <component :is="item.component" />
                                <!-- <span  >{{item.icon}} </span>  -->
                                <span class="ml-1 font-body">{{ item.label }}</span>
                                <!-- <Badge v-if="item.badge" class="ml-auto" :value="item.badge" /> -->
                                <!-- <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span> -->
                                <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto ">
                                    <chevronRight class="!w-5 !h-5" />
                                </i>
                            </a>
                        </template>
                    </TieredMenu>
          
                </div>

                <div class="white_gradient absolute left-0 w-full h-full " v-if="image">
                <!-- <img src="../assets/bg-image-01.png"  alt="" class="h-full w-full object-cover absolute z-0 top-0 left-0 rounded-lg   after:h-full after:w-full after:top-0 after:left-0 after:rounded-lg  after:bg-gradient-to-r after:from-white after:from-30% "> -->
                </div>


            </div>

            
             <!-- Clipboard Text content -->
              
             <div class="modal-addLink-body p-8  bg-neutral-50  border-neutral-200 border-x border-b rounded-b-xl"
                >

                <div
                    class="modal-newText-content w-full flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4 bg-neutral-50 rounded-lg rounded-t-none  relative overflow-hidden">

                    <div class="icons flex md:flex-col gap-2 md:gap-4">
                        <!-- <Icon OpenaiSvgrepoCom_icon class="rounded-lg" /> -->
                        <Icon document_icon class="rounded-lg" v-if="fileUpload" />
                        <Icon photo_icon class="rounded-lg" v-if="imageUpload" />
                        <Icon videoCamera_icon class="rounded-lg" v-if="videoUpload" />
                        <Icon speakerWave_icon class="rounded-lg" v-if="audioUpload" />
                        <Icon speakerWave_icon class="rounded-lg" v-if="linkedIn" />
                        <Icon speakerWave_icon class="rounded-lg" v-if="url" />
                    </div>

                    <div
                        class="result_item-content-wrapper w-full border border-neutral-200 rounded-lg p-4 pb-10 break-words relative  quill">
                        <div class="result_item-content editor " id="editor">
                            <p>
                               {{ content }}
                            </p>
                        </div>
                    </div>

                </div>

            </div>




        </div>

        <div @click="$emit('close')" class="white-overlay"></div>

    </div>
</template>

<style scoped>
.modal-addLink {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(255, 255, 255, 0.5); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* backdrop-filter: blur(10px); */
}

/* .modal-addLink-header div {
    z-index: 1;
} */

.white-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    z-index: 0;
}

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
    /* border-radius: 0.4rem; */
}

.cardWinkel-active  * {
    fill: #FF646F !important;
}


</style>