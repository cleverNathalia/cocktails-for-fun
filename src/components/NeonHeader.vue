<template>
  <div class="d-flex justify-center neonText text-h1 mb-12 pb-5">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "neon-header",
  props: {
    text: String,
  },
});
</script>