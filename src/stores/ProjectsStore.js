import { ref, onMounted, computed, reactive } from "vue";
import { defineStore } from 'pinia';
// import projects from '../data/projects.js';


let projects = ref([
    {
        "id": "card1",
        "headline": "Apple verwendet Apple GPT bereits intern JS",
        "timeText": "16 hours ago aaa",
        "image": false,
        "anchorLinks": ["AnchorLink01", "AnchorLink02"],
        "results": [
          {
            "id": "result1",
            "headline": "Apple verwendet Apple GPT bereits intern RESULTS",
            "infoBox": "Lorem - LinkedIn JS",
            "text": "Text Beispiel JS RESULT LALA",
            "image": false
          },
          {
            "id": "result2",
            "headline": "Apple already uses Apple GPT internally",
            "infoBox": "Ipsum - LinkedIn",
            "text": "Text Beispiel",
            "image": false
          },
          {
            "id": "result3",
            "headline": "Apple verwendet Apple GPT bereits intern RESULTS",
            "infoBox": "Lorem - LinkedIn JS",
            "text": "Text Beispiel JS RESULT LALA",
            "image": false
          },
          {
            "id": "result4",
            "headline": "Apple already uses Apple GPT internally",
            "infoBox": "Ipsum - LinkedIn",
            "text": "Text Beispiel",
            "image": false
          },
          {
            "id": "result5",
            "headline": "Apple verwendet Apple GPT bereits intern RESULTS",
            "infoBox": "Lorem - LinkedIn JS",
            "text": "Text Beispiel JS RESULT LALA",
            "image": false
          },
          {
            "id": "result6",
            "headline": "Apple already uses Apple GPT internally",
            "infoBox": "Ipsum - LinkedIn",
            "text": "Text Beispiel",
            "image": false
          }
        ]
      },
      {
        "id": "card2",
        "headline": "Apple already uses Apple GPT internally Card02",
        "timeText": "17 hours ago",
        "image": false,
        "anchorLinks": ["AnchorLink01", "AnchorLink02"],
        "results": [
          {
            "id": "result1",
            "headline": "Apple verwendet Apple GPT bereits intern RESULTS CARD 02",
            "infoBox": "Lorem - LinkedIn JS CARD 02",
            "text": "Text Beispiel JS RESULT CARD 02",
            "image": false
          },
          {
            "id": "result2",
            "headline": "Apple already uses Apple GPT internally",
            "infoBox": "Ipsum - LinkedIn",
            "text": "Text Beispiel",
            "image": false
          }
        ]
      },
      {
        "id": "card3",
        "headline": "Google launches generative AI search",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card4",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card5",
        "headline": "Apple already uses Apple GPT internally",
        "timeText": "17 hours ago",
        "image": false
      },
      {
        "id": "card6",
        "headline": "Google launches generative AI search",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card7",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card8",
        "headline": "Apple verwendet Apple GPT bereits intern",
        "timeText": "16 hours ago",
        "image": false
      },
      {
        "id": "card9",
        "headline": "Apple already uses Apple GPT internally ",
        "timeText": "17 hours ago",
        "image": false
      },
      {
        "id": "card10",
        "headline": "Google launches generative AI search",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card11",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card12",
        "headline": "Apple already uses Apple GPT internally",
        "timeText": "17 hours ago",
        "image": false
      },
      {
        "id": "card13",
        "headline": "Google launches generative AI search",
        "timeText": "2 days ago",
        "image": false
      },
      {
        "id": "card14",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false
      }
]);


export const useProjectsStore = defineStore('ProjectsStore', {
    state: () =>  {

        return {
            projects: reactive(projects),
            activeCard: null,       
         }
    
    },
    actions: {  
        cardActive(id) {
            this.activeCard = id;
            console.log('cardActive IM STORE?', id);
        },
        
        addCard() {
            this.projects.unshift({ id: `project${this.projects.length + 1}`, headline: 'New project', timeText: 'Just now', image: false });
        },
        
        removeCard(id) {
            const index = this.projects.findIndex(project => project.id === id);
            if (index !== -1) {
                this.projects.splice(index, 1);
            }
            console.log('removeCard im STORE!', id);
        }
    },



    // state
    // actions
    // getters
  })


