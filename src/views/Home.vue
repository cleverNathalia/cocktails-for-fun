<template>
  <!-- <HelloWorld /> -->
  <v-row>
    <v-col cols="12">
      <v-img
        src="/cocktails.jpg"
        lazy-src="/cocktails.jpg"
        cover
        class="d-flex align-end elevation-8"
      >
        <div class="d-flex justify-center scroll-float-button">
          <v-btn
            color="#910258"
            elevation="8"
            icon="mdi-chevron-triple-down"
            size="x-large"
            style="color: white"
          ></v-btn>
        </div>
        <div
          id="cocktailsHeader"
          class="d-flex justify-center neonText text-h1 mb-12 pb-5"
        >
          Cocktails for Fun
        </div>
      </v-img>
      <v-responsive class="mx-auto search-textfield" style="margin-top: -30px">
        <v-text-field
          v-model="searchValue"
          variant="solo"
          label="Search"
          hint="Search for a cocktail by ingredient or name"
          append-inner-icon="mdi-magnify"
          @click:append-inner="getCocktails"
          @keydown.enter="getCocktails"
        ></v-text-field>
      </v-responsive>
    </v-col>
  </v-row>
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
  <v-row>
    <v-col
      cols="12"
      v-for="(cocktail, i) in appStore.cocktailsByIngredient"
      :key="i"
      class="d-flex justify-center"
    >
      <v-card class="w-75">
        <v-card-actions class="d-flex justify-end">
          <v-btn
            size="large"
            variant="text"
            @click="isIconAlt = !isIconAlt"
            :icon="isIconAlt ? 'mdi-heart-outline' : 'mdi-heart'"
          ></v-btn>
        </v-card-actions>
        <v-card-item>
          <v-card-text>
            <v-row>
              <v-col class="d-flex justify-center" xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                <v-img
                  :src="appStore.cocktailsImages[0].urls.regular"
                  :lazy-src="appStore.cocktailsImages[0].urls.regular"
                  cover
                  class="rounded-img"
                >
                </v-img>
              </v-col>
              <v-col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12" class="d-flex justify-start">
                <v-card-text>
                  <v-card-title class="text-h5 font-weight-regular">
                    {{ cocktail.name }}
                  </v-card-title>
                  <v-list
                    v-for="(ingredient, j) in cocktail.ingredients"
                    :key="j"
                  >
                    <v-list-item>
                      {{ ingredient }}
                    </v-list-item>
                  </v-list>
                  <v-textarea
                    label="Instructions"
                    auto-grow
                    variant="outlined"
                    rows="1"
                    row-height="15"
                    readonly
                    :model-value="cocktail.instructions"
                  ></v-textarea>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      cols="12"
      v-for="(cocktail, i) in appStore.cocktailsByName"
      :key="i"
      class="d-flex justify-center"
    >
      <v-card class="w-75">
        <v-card-actions class="d-flex justify-end">
          <v-btn
            size="large"
            variant="text"
            @click="isIconAlt = !isIconAlt"
            :icon="isIconAlt ? 'mdi-heart-outline' : 'mdi-heart'"
          ></v-btn>
        </v-card-actions>
        <v-card-item>
          <v-card-text>
            <v-row>
              <v-col class="d-flex justify-center" xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                <v-img
                  :src="appStore.cocktailsImages[0].urls.regular"
                  :lazy-src="appStore.cocktailsImages[0].urls.regular"
                  cover
                  class="rounded-img"
                >
                </v-img>
              </v-col>
              <v-col xxl="6" xl="6" lg="6" md="6" sm="12" xs="12">
                <v-card-text>
                  <v-card-title class="text-h5 font-weight-regular">
                    {{ cocktail.name }}
                  </v-card-title>
                  <v-list
                    v-for="(ingredient, j) in cocktail.ingredients"
                    :key="j"
                  >
                    <v-list-item>
                      {{ ingredient }}
                    </v-list-item>
                  </v-list>
                  <v-textarea
                    label="Instructions"
                    auto-grow
                    variant="outlined"
                    rows="1"
                    row-height="15"
                    readonly
                    :model-value="cocktail.instructions"
                  ></v-textarea>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>

  <!-- <v-row>
    <v-col>
      <v-list>
        <v-list-item
          v-for="(cocktail, i) in appStore.cocktailsByIngredient"
          :key="i"
        >
          {{ cocktail.name }}
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-list>
        <v-list-item v-for="(cocktail, i) in appStore.cocktailsByName" :key="i">
          {{ cocktail.name }}
        </v-list-item>
      </v-list>
    </v-col>
  </v-row> -->

  <!-- <v-row>
    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="6"
      lg="4"
      xl="4"
      xxl="4"
      v-for="(cocktail, i) in appStore.cocktailsByIngredient"
      :key="i"
    >
      <v-card class="mx-auto" max-width="450">
        <v-card-title>
          {{ cocktail.name }}
        </v-card-title>
        <v-card-text>
          <v-list v-for="(ingredient, j) in cocktail.ingredients" :key="j">
            <v-list-item>
              {{ ingredient }}
            </v-list-item>
          </v-list>
          <v-textarea
            label="Instructions"
            auto-grow
            variant="outlined"
            rows="1"
            row-height="15"
            readonly
            :model-value="cocktail.instructions"
          ></v-textarea>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn variant="text" color="teal-accent-4">See More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row> -->
  <!-- <v-row>
    <v-col
      v-for="(cocktailImage, i) in appStore.cocktailsImages"
      :key="i"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`${cocktailImage.urls.regular}`"
        :lazy-src="`${cocktailImage.urls.regular}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
      </v-img>
    </v-col>
  </v-row> -->
</template>

<script lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'
import { useAppStore } from "@/store/app";
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    appStore: useAppStore(),
    searchValue: "",
    isIconAlt: true,
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

<style>

</style>