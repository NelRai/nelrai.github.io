import { ref, onMounted, computed, reactive } from "vue";
import { defineStore } from 'pinia';
// import clipboards from '../data/clipboards.js';


let clipboards = ref([
    {
        "id": "card1",
        "headline": "OpenAI_App-Store_AI-models.pdf",
        "fileUpload": true,
        "linkedIn": false,
        "url": false,
        "iconContent": "fileUpload", 
        "image": false,
        "content": [
          {
            "id": "result1",
            "content": "Apple verwendet Apple GPT bereits intern RESULTS",
            "contentIcon": "Lorem - LinkedIn JS"
          }
        ]
      },
      {
        "id": "card2",
        "headline": "Apple already uses Apple GPT internally Card02",
        "fileUpload": false,
        "linkedIn": true,
        "url": false,
        "image": true,
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
        "fileUpload": false,
        "linkedIn": false,
        "url": true,
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card4",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false,
        "results": [
        ] 
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
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card7",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card8",
        "headline": "Apple verwendet Apple GPT bereits intern",
        "timeText": "16 hours ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card9",
        "headline": "Apple already uses Apple GPT internally ",
        "timeText": "17 hours ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card10",
        "headline": "Google launches generative AI search",
        "timeText": "2 days ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card11",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card12",
        "headline": "Apple already uses Apple GPT internally",
        "timeText": "17 hours ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card13",
        "headline": "Google launches generative AI search",
        "timeText": "2 days ago",
        "image": false,
        "results": [
        ] 
      },
      {
        "id": "card14",
        "headline": "Innovative Technology Too Expensive - Report on Meta's AR Glasses",
        "timeText": "2 days ago",
        "image": false,
        "results": [
        ] 
      }
]);


export const useClipboardsStore = defineStore('ClipboardsStore', {
    state: () =>  {

        return {
            clipboards: reactive(clipboards),
            activeCard: null,   
            activeResult: null,           
         }
    
    },
    actions: {  
        cardActive(id) {
            this.activeCard = id;
            console.log('cardActive IM STORE?', id);
        },
        
        addCard() {
            this.clipboards.unshift({ id: `clipboard${this.clipboards.length + 1}`, headline: 'New clipboard', timeText: 'Just now', image: false, results: []});
        },
        
        removeCard(id) {
            const index = this.clipboards.findIndex(clipboard => clipboard.id === id);
            if (index !== -1) {
                this.clipboards.splice(index, 1);
            }
            console.log('removeCard im STORE!', id);
        },
        addResult(result) {
            const clipboard = this.clipboards.find(clipboard => clipboard.id === this.activeCard);
            if (clipboard) {
                clipboard.results.push(result);
            }
            console.log('addResult im STORE!', this.activeCard);
        },

        removeResult(resultId) {
            const clipboard = this.clipboards.find(clipboard => clipboard.id === this.activeCard);
            if (clipboard) {
                const index = clipboard.results.findIndex(result => result.id === resultId);
                if (index !== -1) {
                    clipboard.results.splice(index, 1);
                }
            }
            console.log('removeResult im STORE!', resultId);
        },

        updateInfoBox(resultID, newInfoBox) {
            const clipboard = this.clipboards.find(clipboard => clipboard.id === this.activeCard);
          
                const result = resultID ? clipboard.results.find(result => result.id === resultID) : clipboard.results[0];
                if (result) {
                    result.infoBox = newInfoBox;
                }
             
            console.log('updateInfoBox in STORE!', this.activeCard, this.activeResult, newInfoBox, this.clipboard, result); 
        }

    },



    // state
    // actions
    // getters
  })


