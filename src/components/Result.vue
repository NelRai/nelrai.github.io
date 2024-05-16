<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

import Animation from "./Animation.vue";
import Icon from "./Icon.vue";
import documentText from "./svg/document-text.vue";
import chevronLeft from "./svg/chevron-left.vue";
import chevronRight from "./svg/chevron-right.vue";
import clipboardDocumentMini from "./svg/clipboard-document-mini.vue";
import Sparkles from "./svg/sparkles.vue";
import openaiSvgrepoCom from "./svg/openai-svgrepo-com.vue";

import Trash from "./svg/trash.vue";


//PrimeVue OverlayPanel
import OverlayPanel from 'primevue/overlaypanel';
const op = ref();
//@ts-ignore
const toggle = (event) => {
    op.value.toggle(event);
}

import Quill from 'quill';
// // Or if you only need the core build
// // import Quill from 'quill/core';

// // const quill = new Quill('#editor');
const showResult = ref(true);
console.log(showResult.value);

// function resultClosed() {
//   const elements = document.querySelectorAll(".result_header, .result_item");

//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("click", function (event) {
//       if (showResult.value === true) {
//         // This function will be called when the element is clicked
//         console.log("Element clicked:", event.target);
//         showResult.value = false;
//         console.log(showResult.value);
//       } else {
//         console.log("Number is not greater than 10");
//       }
//     });
//   }
// }

//  onMounted(resultClosed);

// function handleClick() {
//     if (showResult.value) {
//         console.log('Button clicked');
//         showResult.value = false;
//         // Add your desired action here
//     }
// }



onMounted(() => {
  const editors = document.querySelectorAll('.editor');
  
  editors.forEach((editor) => {
    //@ts-ignore

    const quill = new Quill(editor, {
      theme: 'bubble'
    });
  });
});

// let items =
//     [
//         'item 1',
//         'item 1'
//         ]
// ;

// function addItem() {`

import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import Square2Stack from "./svg/square-2-stack.vue";
import ArrowDownTrayMini from "./svg/arrow-down-tray-mini.vue";

const menu = ref(null);

const menuItems = ref([

  {
    label: 'Copy to Clipboard',
    component: clipboardDocumentMini,
  },
  {
        separator: true
    },
  {
    label: 'Post Processing',
    component: Sparkles,
  },
  {
    label: 'Compare',
    component: Square2Stack,
  },
  {
        separator: true
    },
  {
    label: 'Save as',
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


  <div class="result-wrapper-wrapper relative group/closeBTN   ">
    <div
      class="result_wrapper w-full h-auto bg-white border border-solid border-neutral-200 rounded-xl shadow-xl relative cursor-pointer transition-0-3s">
      <div
        class="result_header flex justify-between items-center !mb-0 rounded-lg rounded-b-none p-4 md:p-8 relative overflow-hidden z-20">
        <div class="result_header-headline flex flex-col gap-2 items-start">
          <div class="card-headline text-base font-normal z-20">
            <h4>Google launches "AI Opportunity Initiative for Europe"</h4>
          </div>

          <div
            class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20">
            <div class="flex gap-1 justify-center items-center">
              <documentText alt="" class="w-5 h-5 md:w-4 md:h-4" /><span>Ben - LinkedIn - All</span>


            </div>
          </div>
        </div>

        <div class="result_header-icons flex gap-2 z-20">
          <Icon cubeTransparent_icon />
          <Icon ellipsisHorizontal_icon class="hidden md:flex" />
          <!-- 
                <button
                    class="  w-10 h-10 md:w-8 md:h-8  items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40">
                    <img src="../assets/cube-transparent.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
                </button>
                <button
                    class="  w-10 h-10 md:w-8 md:h-8  items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200  z-40 hidden md:flex">
                    <img src="../assets/ellipsis-horizontal.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
                </button> -->
        </div>

        <Animation />
      </div>

      <div
      id="result_item"
        class="result_item w-full flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4 bg-neutral-50 rounded-lg rounded-t-none p-4 md:p-8 relative overflow-hidden">
        <div class="icons flex md:flex-col gap-2 md:gap-4">


          <Icon OpenaiSvgrepoCom_icon class="rounded-lg" @click="toggle" />


          <OverlayPanel ref="op" > 
            <div class=" gap-2 grid grid-cols-3  [&>*:nth-child(odd)]:text-right [&>*:nth-child(1)]:!text-left [&>*:nth-child(even)]:col-span-2  ">
            <p class="col-span-3 pb-2 border-b border-neutral-500">GPT-4 128K (Azure)</p>
            <p>Characters</p> <p>2049</p>
            <p>Characters excluding spaces</p> <p>1968</p>
            <p>Words</p> <p>153</p>
            </div>
          </OverlayPanel>



          <div class="flex flex-col gap-2">
          
            <Icon chatBubbleLeftRight_icon />
           <!-- @vue-ignore -->
            <Icon ellipsisHorizontal_icon v-on:click="menu.show($event)" />

            <TieredMenu ref="menu" :model="menuItems" popup>
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




          <!-- <button
                    class="sidebar-close-btn  w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                    <img src="../assets/chevron-left.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
                </button>
                <button
                    class="sidebar-close-btn  w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                    <img src="../assets/chat-bubble-left-right.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
                </button>

                <button
                    class="sidebar-close-btn  w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                    <img src="../assets/ellipsis-horizontal.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
                </button> -->
        </div>

        <div
          class="result_item-content-wrapper w-full border border-neutral-200 rounded-lg p-4 pb-10 break-words relative resultItemHidden quill">
          <div class="result_item-content editor " id="editor">

            <p>
              💡 Google launches "AI Opportunity Initiative for Europe" to boost
              AI knowledge in the European workforce with a €25 million
              investment. <br /><br />

              🌍 Empowering European workers<br />
              Google's initiative allocates €10 million of the total €25 million
              from Google.org to equip workers with essential skills to prevent
              them from being "left behind."<br />
              In collaboration with the Centre for Public Impact, Google is
              specifically seeking applications from social enterprises,
              non-profit organizations, and "vulnerable" communities.<br /><br />

              🚀 Google for Start-ups Growth Academies<br />
              The initiative includes a new series of "Google for Start-ups Growth
              Academies" across Europe, the Middle East, and Africa.<br />
              These academies focus on start-ups using AI to address major
              societal challenges in health, education, and cybersecurity.<br />
              Google launches "Growth Academy: AI for Health," now accepting
              applications.<br /><br />

              🔚 Investing in Europe's AI future<br />
              Google's "AI Opportunity Initiative for Europe" aims to strengthen
              the European workforce's AI knowledge and foster innovation. While
              benefiting from Google's resources, it's essential to remember the
              value of networking and seeking knowledge from various sources. The
              future is AI, and Europe is getting ready.
              <br /><br />
              More: [URL]
              <br /><br />
              🔔 Follow me for more updates:
              https://www.linkedin.com/in/benjamin-danneberg/
            </p>
          </div>



        </div>

        <div class="result_item-copy absolute top-3 right-3 opacity-0 group-hover/closeBTN:opacity-100 transition-0-3s">
          <Icon clipboardDocument_icon />

          <!-- <button
                    class="sidebar-close-btn  w-10 h-10 md:w-8 md:h-8 absolute -top-1 -right-1  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 flex z-40">
                    <img src="../assets/clipboard-document.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
                </button> -->
        </div>
      </div>

      <div class="result-close opacity-0 group-hover/closeBTN:opacity-100 group/icon transition-0-3s">
        <Icon Trash_icon class="absolute -top-1 -right-1" />
      </div>


    </div>
    <div class="result_item-close group/icon opacity-0 group-hover/closeBTN:opacity-100 transition-0-3s">
      <button
        class="result_item-close-btn w-10 h-10 md:w-8 md:h-8 absolute bottom-4 left-[calc(50%-16px)] items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hover:border-neutral-100 hover:bg-neutral-100 transition-0-3s flex z-40 -rotate-90 ">
        <chevronLeft alt="" class="w-5 h-5 md:w-4 md:h-4" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
