<template>
  <q-page class="items-center justify-evenly">
    <big-box :gm2048="props.gm2048" :boxes="props.boxarr">
    </big-box>
  </q-page>
</template>

<script setup lang="ts">
import BigBox from "components/BigBox.vue";
import type { Game2048 } from 'components/game';
import type { Box } from 'components/structure';

const props = defineProps<{gm2048:Game2048, boxarr:{b: boolean; boxarr: Box[]}}>();

</script>
