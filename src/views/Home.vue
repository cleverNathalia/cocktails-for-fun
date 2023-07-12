<template>
  <v-row>
    <v-col cols="12">
      <!-- HEADING  -->
      <v-img
        src="/cocktails.jpg"
        lazy-src="/cocktails.jpg"
        cover
        class="d-flex align-end elevation-8"
      >
        <float-button color="primary" icon="mdi-chevron-triple-down" />
        <neon-header text="Cocktails for Fun" />
      </v-img>
      <search-field />
    </v-col>
  </v-row>
  <!-- NO RESULTS -->
  <v-row
    v-if="
      appStore.cocktailsByIngredient.length == 0 ||
      appStore.cocktailsByName.length == 0
    "
    class="py-3"
  >
    <v-col cols="12" class="d-flex justify-center">
      <v-icon icon="mdi-glass-cocktail" size="50" color="grey-darken-1">
      </v-icon>
      <v-icon icon="mdi-glass-flute" size="50" color="grey-darken-1"> </v-icon>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <div style="font-family: Tiltneon !important; color: grey">
        No Cocktails Yet
      </div>
    </v-col>
  </v-row>
  <!-- COCKTAILS RESULTS -->
  <display-cocktails :cocktailList="appStore.cocktailsByIngredient" />
  <display-cocktails :cocktailList="appStore.cocktailsByName" />
</template>

<script lang="ts">
import FloatButton from "@/components/FloatButton.vue";
import NeonHeader from "@/components/NeonHeader.vue";
import SearchField from "@/components/SearchField.vue";
import DisplayCocktails from "@/components/DisplayCocktails.vue";
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  components: { FloatButton, NeonHeader, SearchField, DisplayCocktails },
  data: () => ({
    appStore: useAppStore(),
  }),
});
</script>

<style>
</style>