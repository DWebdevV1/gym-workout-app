<script setup lang="ts">
import {ref} from 'vue';

const gitHubRepo = ref('https://github.com/DWebdevV1/gym-workout-app');
const jsonServerUrl = ref('https://github.com/typicode/json-server');
</script>

<template>
  <h1 class="text-3xl mb-5 text-center uppercase">TO-DO list for the workout app</h1>
  <div class="flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:gap-5 h-full">
    <div class="flex-1 bg-gray-600 px-10 py-5 rounded-lg shadow-lg">
      <h2 class="text-2xl text-neon-green-default pb-5">TO-DOs Allgemein (Technologie)</h2>
      <ul class="list-disc">
        <li class="text-lg py-2">GitHub Repo anlegen
          (<a class="link" :href="gitHubRepo" target="_blank">{{ gitHubRepo }}</a>)
        </li>
        <li class="text-lg py-2">Backend mit JSON Fake Server
          (<a class="link"
              :href="jsonServerUrl" target="_blank">{{ jsonServerUrl }}</a>)
        </li>
        <li class="text-lg py-2">Backend mit Node JS mit Express.js & MongoDB</li>

        <li class="text-lg py-2">Backend Authentifizierung (JWT)</li>
        <li class="text-lg py-2">REST API & Swagger</li>
        <li class="text-lg py-2">Documentation (Frontend & Backend)</li>

        <li class="text-lg py-2">Tests für die Component (Unit Test mit ViTest)</li>
        <li class="text-lg py-2">e2e Test mit Cypress</li>

        <li class="text-lg py-2">App hosten (Frontend & Backend)</li>
        <li class="text-lg py-2">Web App erstellen (Google Play Store / Androide Store)</li>
      </ul>
    </div>
    <div class="flex-1 bg-gray-600 px-10 py-5 rounded-lg shadow-lg">
      <h2 class="text-2xl text-neon-green-default pb-5">TO-DOs App Funktionalität</h2>
      <ul class="list-disc">
        <li class="text-lg py-2">Trainingsplan erstellen (Mo bis So)</li>
        <li class="text-lg py-2">Trainingsplan einsehen</li>
        <li class="text-lg py-2">Trainingsplan suchen</li>
        <li class="text-lg py-2">Traingsplan bearbeiten</li>
        <li class="text-lg py-2">Zwischen Trainingsplänen wechseln (aktiven setzen)</li>


        <li class="text-lg py-2">Übungen erstellen (mit Beschreibung / Bild / Video)</li>
        <li class="text-lg py-2">Übungen einsehen</li>
        <li class="text-lg py-2">Übungen suchen</li>
        <li class="text-lg py-2">Übungen bearbeiten</li>

        <li class="text-lg py-2">Wochenübersicht</li>
        <li class="text-lg py-2">Monatsübersicht</li>
        <li class="text-lg py-2">Jahresübersicht</li>

        <li class="text-lg py-2">User Registrierung</li>
        <li class="text-lg py-2">User Anmeldung</li>

        <li class="text-lg py-2">Trainingsplan exportieren / importieren</li>

        <li class="text-lg py-2">Trainingsplan / Übung teilen (social media)</li>

        <li class="text-lg py-2">(Leaderboard mit Erfolgen <br/>(Trainingsziele, Motivation, Ranking etc.))</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>