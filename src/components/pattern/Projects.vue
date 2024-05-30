<script setup lang="ts">
// @ts-nocheck 
import { ref, computed } from "vue";

import Card from '../elements/Card.vue';
import Icon from '../buttons/buttonRound40.vue';
import IconBox from '../buttons/button32.vue';
import bookmarkSquare from '../svg/bookmark-square.vue'
// import projects from "../data/projects.js";
import { useProjectsStore } from '../../stores/ProjectsStore'; 

useProjectsStore();

const store = useProjectsStore();
// Use a computed property to always get the latest value of the projects array
const projects = computed(() => store.projects);

let isActive = ref(false);
let activeCard = ref(null);
// function cardActive() {
//     isActive.value = !isActive.value;
//     console.log('cardActive');

// }  
// @ts-ignore
// function cardActive(id) {
//     activeCard.value = id;
//     console.log('cardActive', id);
    
// }

// store.cardActive()


// let cards = ref([
//     { id: 'card1', headline: 'Apple verwendet Apple GPT bereits intern', timeText: '16 hours ago aaa',  image: false, anchorLinks: ['AnchorLink01', 'AnchorLink02'],
//         results: [
//             { id: 'result1', headline: 'Apple verwendet Apple GPT bereits intern', infoBox: 'Lorem - LinkedIn', text: 'Text Beispiel', image: false },
//             { id: 'result2', headline: 'Apple already uses Apple GPT internally', infoBox: 'Ipsum - LinkedIn', text: 'Text Beispiel', image: false },
//         ]
//       },
//     { id: 'card2', headline: 'Apple already uses Apple GPT internally Card02', timeText: '17 hours ago', image: false },
//     { id: 'card3', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
//     { id: 'card4', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
//     { id: 'card5', headline: 'Apple already uses Apple GPT internally', timeText: '17 hours ago', image: false },
//     { id: 'card6', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
//     { id: 'card7', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
//     { id: 'card8', headline: 'Apple verwendet Apple GPT bereits intern', timeText: '16 hours ago', image: false },
//     { id: 'card9', headline: 'Apple already uses Apple GPT internally ', timeText: '17 hours ago', image: false },
//     { id: 'card10', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
//     { id: 'card11', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
//     { id: 'card12', headline: 'Apple already uses Apple GPT internally', timeText: '17 hours ago', image: false },
//     { id: 'card13', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
//     { id: 'card14', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
// ]);

// function addCard() {
//     projects.value.unshift({ id: `project${projects.value.length + 1}`, headline: 'New project', timeText: 'Just now', image: false });
// }


// function removeCard(id: string) {
//     projects.value = projects.value.filter(project => project.id !== id);
// }



</script>

<template>

    <div
        class="projects w-full h-full flex flex-col gap-4 md:p-8 md:pl-4 bg-neutral-50  rounded-lg md:rounded-none md:pt-8 md:shadow-md 2xl:h-full 2xl:w-auto ">
        <div class="projects_header flex justify-between items-center md:pl-4">

            <div class="flex gap-2">

                <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
                    <bookmarkSquare alt="" class="w-6 h-6 "  />
                    <h4 class="text-lg blinker">Projects</h4>
                </div>

                <div class="icons flex md:flex-col gap-2 md:gap-4" id="search">
                    <span class="  z-index-999 "   >
                        <Icon magnifyingGlass_icon v-tooltip.top="'Search'"   /> 
             
                        <!-- <span class="tooltiptext z-index-999 text-xs">Search </span> -->


                    </span>  
                </div>

            </div>

            <IconBox plus-circle-mini_icon text="New Project" 
            @click="store.addCard(); console.log('addCard:', store.addCard)"
            
            
            />

            
        </div>

        <div class="w-full h-full flex flex-col md:pl-4 lg:pr-4 pb-8   gap-4 lg:overflow-y-scroll  ">


        <Card 
            v-for="project in projects" :key="project.id" :id="project.id" :headline="project.headline" :time-text="project.timeText" :image="project.image" :results="project.results" @activeProject="cardActive" :cardRed="store.activeCard === project.id"
            @click="store.cardActive(project.id); console.log('activeCard:', store.activeCard)"
         />
      
        </div>

<!--         
        <Card id="card1" headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" image  @activeProject="cardActive"  :cardRed="activeCard === 'card1'"  />
        <Card id="card2" headline="Apple already uses Apple GPT internally" time-text="17 hours ago"            @activeProject="cardActive"  :cardRed="activeCard === 'card2'" />
        <Card id="card3" headline="Google launches generative AI search" time-text="2 days ago"     @activeProject="cardActive"  :cardRed="activeCard === 'card3'" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" image />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" /> -->

    </div>


</template>

<style scoped></style>
