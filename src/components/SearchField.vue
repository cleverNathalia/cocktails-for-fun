<template>
  <v-responsive class="mx-auto search-textfield" style="margin-top: -30px">
    <v-text-field
      v-model="searchValue"
      variant="solo"
      label="Search"
      append-inner-icon="mdi-magnify"
      @click:append-inner="getCocktails"
      @keydown.enter="getCocktails"
    ></v-text-field>
  </v-responsive>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "search-field",
  data: () => ({
    appStore: useAppStore(),
    searchValue: "",
  }),
  methods: {
    getCocktails() {
      this.appStore.getCocktailsIngredientApi(this.searchValue);
      this.appStore.getCocktailsNameApi(this.searchValue);
      // this.appStore.getCocktailImages(this.searchValue);
      let amount =
        this.appStore.cocktailsByIngredient.length +
        this.appStore.cocktailsByName.length;
      this.appStore.getCocktailImages(this.searchValue);
    },
  },
});
</script>