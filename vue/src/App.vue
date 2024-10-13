<template>

  <div class="container">
    
    <h1 class="text-primary">bonjour</h1>
  
    <div v-if="state === 'error'">
      <p>
        Impossible de charger le questionnaire
      </p>
    </div>
    <div>
      <Quiz :quiz="quiz" v-if="quiz"></Quiz>
    </div>

  </div>


</template>

<script setup>
import { onMounted, ref } from 'vue';
import Quiz from './components/quiz.vue'


const quiz = ref(null)
const state = ref('loading')


onMounted(() =>{
  fetch('/quiz.json')
  .then(r => {
    if(r.ok){
      return r.json()
    }
    else throw new Error('Impossible de récupérer le quizz');
    
  })
  .then(data =>{
    quiz.value = data
    state.value = 'idle'
  })
  .catch(e => {
    state.value = 'error'
  })

})


</script>