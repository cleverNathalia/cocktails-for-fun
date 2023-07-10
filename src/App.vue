<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

</script>
