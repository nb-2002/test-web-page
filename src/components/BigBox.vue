<template>
    <div class="row items-center justify-evenly">
        <svg width="610" height="610">
            <rect width="610" height="610" rx="10" fill="#998C7E" />
            <box-array :boxarr="boxes.boxarr" :b="boxes.b"/>
            <box-array :boxarr="boxes1.boxarr" :b="boxes1.b"/>
        </svg>
    </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import type {Box} from "./structure";
import {BoxColor} from "./structure";
import {Game2048} from "./game";
import BoxArray from "./BoxArray.vue";

const boxes = ref<{b: boolean, boxarr: Box[]}>({b:false, boxarr:[...Array(16).keys()].map(i => ({id:i, x:10+150*(i/4|0), y:10+150*(i%4), n:0, color:BoxColor[0] as string}))})
const boxes1 = ref<{b: boolean, boxarr: Box[]}>({b:true, boxarr:[...Array(16).keys()].map(i => ({id:i, x:10+150*(i/4|0), y:10+150*(i%4), n:i%2?2:0, t:true, color:BoxColor[i%2?2:0] as string}))})

const gm2048 = new Game2048();

console.log(gm2048.state.board)
for(let row=0 ; row<4 ; row++){
    for(let col=0 ; col<4 ; col++){
        if(boxes1.value.boxarr[row*4+col] !== undefined && gm2048.state.board[row] !== undefined){
            const bvb = boxes1.value.boxarr[row*4+col];
            const gms = gm2048.state.board[row]?.[col];
            if(bvb?.["n"] !== undefined && bvb["color"] !== undefined && gms !== undefined){
                bvb["n"] = gms;
                bvb["color"] = BoxColor[gms] as string;
            }
        }
    }
}

</script>