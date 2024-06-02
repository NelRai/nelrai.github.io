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
                    </span>  
                </div>

            </div>

            <IconBox plus-circle-mini_icon text="New Project" 
                @click="store.addCard(); console.log('addCard:', store.addCard)"       
            />
        </div>

        <div class="w-full h-full flex flex-col md:pl-4 lg:pr-4 pb-8   gap-4 lg:overflow-y-scroll  ">


        <Card project
            v-for="project in projects" :key="project.id" :id="project.id" :headline="project.headline" :time-text="project.timeText" :image="project.image" :results="project.results" @activeProject="cardActive" :cardRed="store.activeCard === project.id"
            @click="store.cardActive(project.id); console.log('activeCard:', store.activeCard)"
         />
      
        </div>

    </div>

</template>

<style scoped></style>
