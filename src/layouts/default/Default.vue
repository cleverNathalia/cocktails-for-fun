<template>
  <v-app class="pb-8" style="background-image: linear-gradient(to right top, #fad294, #eaa272, #d6715f, #b93f58, #910258);">
    <default-bar />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
