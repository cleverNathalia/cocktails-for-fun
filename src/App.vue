<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

appStore.getCocktailsIngredientApi("vodka");
appStore.getCocktailImages();
</script>
