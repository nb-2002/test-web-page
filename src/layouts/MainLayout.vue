<template>
  <q-layout>
    <q-header>
      <div class="row items-center justify-around">
      <div class="col-3 row justify-center"><q-btn col-3 id="menu-button" flat dense rounded>
        <q-icon name="menu" size="40px" style="padding: 10px;"/>
        2048
        <q-menu>
          <q-list v-close-popup>
            <q-item clickable to="#"><q-item-section><q-item-label>1</q-item-label></q-item-section></q-item>
            <q-item clickable to="/"><q-item-section><q-item-label>2</q-item-label></q-item-section></q-item>
            <q-item clickable to=""><q-item-section><q-item-label>3</q-item-label></q-item-section></q-item>
          </q-list>
        </q-menu>
      </q-btn></div>
      <div class="col-3 row items-center justify-center">
        <q-card flat class="q-px-xl q-mr-xs" style="border-radius: 30px; background-color: #E9E7DA; color: #958978; font-weight: 1000;"><q-card-section class="column items-center"><div>Score</div><div>{{ gm2048.state.score }}</div></q-card-section></q-card>
        <q-card flat bordered class="q-px-xl q-ml-xs" style="border-radius: 30px; background-color: #FAF8F1; border-color: #ECEADD; border-width: 3px; font-weight: 1000;"><q-card-section class="column items-center"><div>Best</div><div>{{ highscore }}</div></q-card-section></q-card>
      </div>  
      <div class="col-3 row justify-center"><q-btn id="new-game-button" @click="newButton">
        New Game
      </q-btn></div>
      </div>
    </q-header>
    
    <q-page-container>
      <router-view :gm2048="gm2048" :boxarr="boxes1"/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Box } from 'components/structure';
import { BoxColor } from 'components/structure';
import { Game2048 } from 'components/game';

const highscore = ref(0);

const gm2048 = ref<Game2048>(new Game2048());

const boxes1 = ref<{b: boolean, boxarr: Box[]}>({b:true, boxarr:[...Array(16).keys()].map(i => ({id:i, x:10+150*(i/4|0), y:10+150*(i%4), n:i%2?2:0, t:true, color:BoxColor[i%2?2:0] as string}))})
gm2048.value.refreshBoard(boxes1.value.boxarr);

onMounted(() => {
  gm2048.value.doMoves(boxes1.value.boxarr, highscore);
});

function newButton() {
  gm2048.value.state = gm2048.value.initialize();
  gm2048.value.refreshBoard(boxes1.value.boxarr);
}

</script>
