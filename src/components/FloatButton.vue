<template>
  <div class="d-flex justify-center scroll-float-button">
    <v-btn
      :color="color"
      elevation="8"
      :icon="icon"
      size="x-large"
      style="color: white"
    ></v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "float-button",
  props: {
    color: String,
    icon: String,
  }
});
</script>