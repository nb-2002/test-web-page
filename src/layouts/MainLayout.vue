<template>
  <q-layout>
    <q-header>
      <div class="row items-center justify-between">
        <q-btn id="menu-button" flat dense rounded @click="toggleLeftDrawer">
          <q-icon name="menu" size="40px" style="padding: 10px;"/>
          2048
        </q-btn>
        <q-container class="row" >
          <q-card flat>Score {{ score }}</q-card>
          <q-card flat>Best {{ highscore }}</q-card>
        </q-container>  
        <q-btn id="new-game-button" flat>
          New Game
        </q-btn>
      </div>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const score = ref(0);
const highscore = ref(0);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
