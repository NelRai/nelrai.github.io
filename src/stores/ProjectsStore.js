import { defineStore } from 'pinia';
import projects from '../data/projects.js';


export const useProjectsStore = defineStore('ProjectsStore', {
    state: () =>  {

        return {
            projects,
            activeCard: null,       
         }
    
    },
    actions: {  
        cardActive(id) {
            this.activeCard = id;
            console.log('cardActive IM STORE?', id);
        },
 
    },



    // state
    // actions
    // getters
  })


