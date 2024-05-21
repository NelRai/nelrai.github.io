<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue"; 
import Header from "./components/Header.vue";
// import Navigation from './components/Navigation.vue'
import Content from "./components/Content.vue";
import Clipboard from "./components/Clipboard.vue";
import Projects from "./components/Projects.vue";
import Navigation from "./components/Navigation.vue";

import MobileNavBottom from "./components/MobileNavBottom.vue";
import UserBox from "./components/UserBox.vue";

import Icon from "./components/Icon.vue";
import chevronLeft from "./components/svg/chevron-left.vue";
import tag from "./components/atoms/tag.vue";
import svgLink from "./components/svg/link.vue";




let hideContent = ref(true);
console.log(hideContent);

let option1 = ref(false);
console.log(option1);

let visibleProjects = ref(false);
console.log(visibleProjects);

if (window.matchMedia("(min-width: 1536px)").matches) {
  visibleProjects.value = true;

console.log(visibleProjects);

}

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     console.log('11112');
//   } else {
//     console.log('asdasdasd');
//   }
// }

// // Create a MediaQueryList object
// var x = window.matchMedia("(min-width: 700px)")

// // Call listener function at run time
// myFunction(x);

// // Attach listener function on state changes
// x.addEventListener("change", function() {
//   myFunction(x);
// });

function showClipboard() {
  option1.value = !option1.value;
  visibleProjects.value = false;
  hideContent.value = false;

  console.log(option1);
}

function showProjects() {
  visibleProjects.value = !visibleProjects.value;
  option1.value = false;
  hideContent.value = false;

  console.log(showProjects);
}

let sidebarVisible = ref(true);

function sidebarHide() {
  sidebarVisible.value = !sidebarVisible.value;
}

// let projectVisible = ref(true);

function projectHide() {
  visibleProjects.value = !visibleProjects.value;
}



//Show Modal Add Link
let modalAddLinkVisible = ref(false);


function modalAddLinkFunction() {
  modalAddLinkVisible.value = true;
    console.log('modalAddLinkVisible', modalAddLinkVisible.value);
    
}

let modalAddlink_modeText = ref(false);
let modalAddlink_modeHTML = ref(false);
let modalAddlink_modeMarkdown = ref(false);

function modalAddlink_modeText_function() {
  modalAddlink_modeText.value = !modalAddlink_modeText.value;
  modalAddlink_modeHTML.value = false;
  modalAddlink_modeMarkdown.value = false;
}

function modalAddlink_modeHTML_function() {
  modalAddlink_modeHTML.value = !modalAddlink_modeHTML.value;
  modalAddlink_modeText.value = false;
  modalAddlink_modeMarkdown.value = false;
}

function modalAddlink_modeMarkdown_function() {
  modalAddlink_modeMarkdown.value = !modalAddlink_modeMarkdown.value;
  modalAddlink_modeText.value = false;
  modalAddlink_modeHTML.value = false;
}



//Results Open Close onClick
function addClassOnClick() {
  const elements = document.querySelectorAll(".result-wrapper-wrapper");

  console.log('elements', elements);

  for (let i = 0; i < elements.length; i++) {
    const resultWrappers = elements[i].querySelectorAll(".result_wrapper");
    const closeButtons = elements[i].querySelectorAll(".result_item-close-btn");
    const resultWrapper = elements[i].querySelector(".result_wrapper");
    const contentWrapper = elements[i].querySelector(".result_item-content-wrapper");



    resultWrappers.forEach(resultWrapper => {
      resultWrapper.addEventListener("click", function (event) {
        const contentWrapper = (event.currentTarget as Element)?.querySelector(".result_item-content-wrapper");
        resultWrapper.classList.remove("cursor-pointer");


        if (contentWrapper) {
          if (contentWrapper.classList.contains('resultItemHidden')) {
            // contentWrapper has the resultItemHidden class
            // Add your desired action here


            contentWrapper.classList.remove("resultItemHidden");
            console.log('contentWrapper.classList.contains(resultItemHidden ERSTER KRAM HIER)', contentWrapper.classList.contains('resultItemHidden'));

            if (closeButtons) {
              closeButtons.forEach(closeButton => {
                closeButton.classList.add("!rotate-90");
              });
            }
          }

        }
      });
    });



    closeButtons.forEach(closeButton => {
      closeButton.addEventListener("click", function () {
        if (closeButton.classList.contains('!rotate-90')) {
          // The closeButton has the !rotate-90 class
          console.log('closeButton.classList.contains(!rotate-90)', closeButton.classList.contains('!rotate-90'));


          if (resultWrapper) {
            resultWrapper.classList.add("cursor-pointer");
          }

          if (contentWrapper) {
            contentWrapper.classList.add("resultItemHidden");
          }
          closeButton.classList.remove("!rotate-90");

        }

        else if (!closeButton.classList.contains('!rotate-90')) {
          // The closeButton has the !rotate-90 class
          console.log('closeButton.classList.contains(!rotate-90) ELSE IF TEEEST', closeButton.classList.contains('!rotate-90'));
          if (resultWrapper) {
            resultWrapper.classList.remove("cursor-pointer");
          }

          if (contentWrapper) {
            contentWrapper.classList.remove("resultItemHidden");
          }
          closeButton.classList.add("!rotate-90");
        }

        else {
          // The closeButton does not have the !rotate-90 class
          console.log('closeButton.classList.contains(!rotate-90) ELSE', closeButton.classList.contains('!rotate-90'));
        }
      });
    });

  }
}



onMounted(addClassOnClick);


//Clipboard Scroll Mask Function
onMounted(() => {
  const el = document.querySelector('#asdf');
  console.log(el, "asdasdasd");
  console.log(el?.scrollHeight, el?.clientHeight, el?.scrollTop);

  if (!el) {
    console.error('Element with id "asdf" not found');
    return;
  }

  function setClasses(el: HTMLElement) {
      const isScrollable = el.scrollHeight > el.clientHeight;

      if (!isScrollable) {
        el.classList.remove('is-bottom-overflowing', 'is-top-overflowing');
        console.log('isScrollable', isScrollable);
        return;
      }

      const isScrolledToBottom = el.scrollHeight < el.clientHeight + el.scrollTop + 1;
      const isScrolledToTop = isScrolledToBottom ? false : el.scrollTop === 0;
      el.classList.toggle('is-bottom-overflowing', !isScrolledToBottom);
      el.classList.toggle('is-top-overflowing', !isScrolledToTop);
  }

  el.addEventListener('scroll', (e) => {
    const el = e.currentTarget as HTMLElement;
    setClasses(el);
  });

  setClasses(el as HTMLElement);
});
</script>

<template>
  <div class="tablet hidden lg:flex bg-neutral-50">
    <div class="whatever flex max-w-md w-full h-full fixed lg:max-w-md z-50">
      <div
        class="sidebar md:min-w-md w-full flex flex-col justify-between content-between h-dvh max-h-dvh p-4 bg-neutral-50 gap-4 md:shadow-xl z-[99]"
        v-if="sidebarVisible"
      >
        <Header @showProjectsBTN="showProjects"
        :projectsVisible="visibleProjects"
        />
        <Clipboard    @modalAddLink="modalAddLinkFunction" />
        <MobileNavBottom
          @showClipboardBTN="showClipboard"
          @showProjectsBTN="showProjects"
        />
        <UserBox />
      </div>

      <Icon chevron-left_icon 
      class="  w-8 h-8 absolute top-1/2 -right-4 z-[100] [&_svg]:!w-5 [&_svg]:!h-5"
      @click="sidebarHide"
      :class="{
          'right-auto left-0 rotate-180': !sidebarVisible,
          'md:hidden lg:hidden 2xl:flex': visibleProjects,
        }"
      />


      <div
        class="ausklappbar w-full  bg-neutral-50 absolute left-full top-0 h-full 2xl:hidden z-[90]"
        v-show="visibleProjects"
      >
        <Projects />
      </div>
  
    </div>

    <div
      class="small-desktop-content flex flex-col items-center gap-8 md:w-2/3 md:mx-8 md:mt-8 md:h-[2000px] md:ml-[480px] 2xl:mx-[480px] 2xl:w-full max-w-[960px] 2xl:max-w-none transition-0-3s"	
      :class="{
        'md:w-full md:ml-auto md:mr-auto md 2xl:ml-8 2xl:mr-[480px] 2xl:max-w-none':
          !sidebarVisible,
        '2xl:w-full 2xl:max-w-none 2xl:mr-8': !visibleProjects,
        '2xl:!mr-8 2xl:!ml-8': !visibleProjects && !sidebarVisible,
      }"
    >
      <Navigation />

      <Content />
    </div>

 

<div class="projects fixed right-0 hidden 2xl:block w-1/3 h-dvh 2xl:max-w-md " 
    :class="{
      '!w-0': !visibleProjects
    }"
>

  <div
      class="sidebar-right-desktop bg-neutral-50 h-dvh md:shadow-xl"
      v-show="visibleProjects"
    >
      <Projects />
    </div>


    <Icon chevron-left_icon 
      class="sidebar-close-btn   w-8 h-8 absolute top-1/2 -left-4 rotate-180  z-[100] [&_svg]:!w-5 [&_svg]:!h-5"
      @click="projectHide"
      :class="{
          'left-auto right-0 !rotate-0': !visibleProjects,
          'md:hidden lg:hidden 2xl:flex': visibleProjects,
        }"
      />



</div>

  </div>

  <div class="w-dvw h-dvh bg-neutral-50 lg:hidden overflow-y-scroll">
    <Header />

    <main class="w-dvw h-full py-16">
      <!-- <Navigation />  -->

      <div class="px-4 my-4 w-full h-full" v-show="option1">
        <Clipboard   @modalAddLink="modalAddLinkFunction" />
      </div>
      <div class="px-4 my-4 w-full h-full" v-show="visibleProjects">
        <Projects />
      </div>

      <div class="px-4 my-4 w-full h-full" v-show="hideContent">
        <Content />
      </div>
    </main>

    <MobileNavBottom
      @showClipboardBTN="showClipboard"
      @showProjectsBTN="showProjects"
      :clipboardVisible="option1"
      :projectsVisible="visibleProjects"
    />
  </div>



  <div class="modal-addLink z-50" v-if="modalAddLinkVisible">

    <div class="modal-addLink-content max-w-[928px] w-[calc(100%-64px)]  relative rounded-xl shadow-xl z-50"
    
    >
      <button 
       @click="modalAddLinkVisible = false"
       class="absolute top-4 right-4 w-8 h-8 items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 hover:border-dc-100 transition-0-3s"
       >X</button>

      <div class="modal-addLink-header  p-8 flex gap-2  bg-neutral-50 border-neutral-200 border-x border-t rounded-t-xl  ">
        <svgLink class="w-6 h-6" />
        <h2 class="text-lg" >Import URL</h2>
        
      </div>

      <div class="modal-addLink-body  p-8 flex flex-col gap-4 bg-neutral-50  border-neutral-200 border-x border-b rounded-b-xl   ">
        <input class="p-4 w-full border-neutral-200 border rounded-lg" type="text" placeholder="Enter URL" />
        <!-- <button>Add</button> -->

        <div class="tags">
          <h3 class="text-neutral-500 text-xs mb-1">Mode</h3>
          <div class="flex gap-2">
            <tag text="Text" :class="{'!border-dc-400 text-dc-400' : modalAddlink_modeText}" @click="modalAddlink_modeText_function" />
            <tag text="HTML" :class="{'!border-dc-400 text-dc-400' : modalAddlink_modeHTML}" @click="modalAddlink_modeHTML_function" />
            <tag text="Markdown" :class="{'!border-dc-400 text-dc-400' : modalAddlink_modeMarkdown}" @click="modalAddlink_modeMarkdown_function" />

          </div>
      
        </div>

      </div>

 

    </div>

    <div 
    @click="modalAddLinkVisible = false"
    class="white-overlay"></div>

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

.white-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 10;
}


</style>
