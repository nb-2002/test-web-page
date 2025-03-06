<template>
    <rect v-for="box in boxes" :key="box.id" width="140" height="140" rx="10" :x="box.x" :y="box.y" :fill="box.color"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {Box} from "./structure";

interface Props{
    boxes: Box[];
}

const props = withDefaults(defineProps<Props>(), {
    boxes: () => []
})

</script>