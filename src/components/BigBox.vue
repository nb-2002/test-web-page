<template>
    <div class="q-mt-xl row items-center justify-evenly">
        <svg width="610" height="610">
            <rect width="610" height="610" rx="10" fill="#998C7E" />
            <box-array :boxarr="bgboxes.boxarr" :b="bgboxes.b"/>
            <box-array :boxarr="props.boxes.boxarr" :b="props.boxes.b"/>
        </svg>
    </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import type {Box} from "./structure";
import {BoxColor} from "./structure";
import type {Game2048} from "./game";
import BoxArray from "./BoxArray.vue";

const bgboxes = ref<{b: boolean, boxarr: Box[]}>({b:false, boxarr:[...Array(16).keys()].map(i => ({id:i, x:10+150*(i/4|0), y:10+150*(i%4), n:0, color:BoxColor[0] as string}))})

const props = defineProps<{gm2048:Game2048, boxes:{b: boolean; boxarr: Box[]}}>();

</script>