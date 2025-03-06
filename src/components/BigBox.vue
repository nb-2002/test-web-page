<template>
    <div class="row items-center justify-evenly">
        <svg width="610" height="610">
            <rect width="610" height="610" rx="10" fill="#998C7E" />
            <box-array :boxarray="boxes"/>
        </svg>
    </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import type {Box} from "./structure";
import BoxArray from "./BoxArray.vue";

const boxes = ref<Box[]>([...Array(16).keys()].map(i => ({id:i, x:10+150*(i/4|0), y:10+150*(i%4), n:0, color:"#BAAD9A"})))
console.log("hello",boxes);
</script>