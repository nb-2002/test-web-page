<template>
    <rect v-for="box in boxes" :key="box.id" width="140" height="140" rx="10" :x="box.x" :y="box.y" :fill="box.color"/>
    <g v-if="b===true"><text v-for="box in boxes" :key="box.id" :x="box.x+70" :y="box.y+75" text-anchor="middle" alignment-baseline="middle" font-size="50px"> {{ box.n }}</text></g>
</template>

<script setup lang="ts">
import {computed} from "vue";
import type {Box} from "./structure";

interface Props{
    b:boolean;
    boxarr: Box[];
}

const boxarrays = withDefaults(defineProps<Props>(), {});

const boxes = computed(() => {
    if(boxarrays.b === true){
        return boxarrays.boxarr.filter(box => box.n !== 0);
    }
    return boxarrays.boxarr
});

</script>