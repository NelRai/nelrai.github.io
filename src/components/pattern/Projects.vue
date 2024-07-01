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

//https://primevue.org/iconfield/ &  https://primevue.org/popover/
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import magnifyingGlass from "../svg/magnifying-glass.vue";


import Popover from 'primevue/popover';
const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}

</script>

<template>

    <div
        class="projects w-full h-full flex flex-col gap-4 md:p-8 md:pl-4 bg-neutral-50  rounded-lg md:rounded-none md:pt-8 md:shadow-md 2xl:h-full 2xl:w-auto ">

        <div class="projects_header flex justify-between items-center md:pl-4">

            <div class="flex gap-2">

                <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
                    <bookmarkSquare alt="" class="w-6 h-6 "  />
                    <h4 class="text-lg blinker">{{$t('project.Projects')}}</h4>
                </div>

                <div class="icons flex md:flex-col gap-2 md:gap-4" id="search">
                    <span class="  z-index-999 "   >
                        <Icon magnifyingGlass_icon v-tooltip.top="$t('tooltips.search')"  @click="toggle"   /> 
                    </span>  

                    <Popover ref="op" class=" 	">
                        <div class="flex flex-col gap-4 w-[25rem] p-popover-content	 confirmPopup  rounded-lg shadow-lg border-0 z-40 transform origin-center mt-3 absolute left-0 top-0 dark:border dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-surface-0/80 before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-surface-0 dark:before:border-b-surface-800">
                            <div class=" " >
                                <!-- <span class="font-medium block mb-2">Share this document</span> -->
      
                                <IconField>
                                    <InputIcon> <magnifyingGlass class="w-4 h-4 ml-2" /> </InputIcon>
                                    <InputText v-model="value1" placeholder="Search" class="pl-7" />
                                </IconField>
                            </div>
                        </div> 
                    </Popover>


        
                </div>

            </div>

            <IconBox plus-circle-mini_icon :text="$t('project.NewProject')" 
                @click="store.addCard(); console.log('addCard:', store.addCard)"       
            />
        </div>

        <div class="w-full h-full flex flex-col md:pl-4 lg:pr-4 pb-8   gap-4 lg:overflow-y-scroll  ">


        <Card project
            v-for="project in projects" :key="project.id" :id="project.id" :headline="project.headline" :time-text=" project.timeText + ' ' + $t('project.HoursAgo')" :image="project.image" :results="project.results" @activeProject="cardActive" :cardRed="store.activeCard === project.id"
            @click="store.cardActive(project.id); console.log('activeCard:', store.activeCard)"
         />
      
        </div>

    </div>

</template>

<style scoped></style>
