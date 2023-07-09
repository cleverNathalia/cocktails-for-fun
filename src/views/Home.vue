<template>
  <!-- <HelloWorld /> -->
  <v-row>
    <v-col cols="12">
      <v-img
        :src="`./src/assets/cocktails.jpg`"
        :lazy-src="`./src/assets/cocktails.jpg`"
        cover
        class="d-flex align-end"
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
        <div class="d-flex justify-center neonText text-h1 mb-12 pb-5">
          Cocktails for Fun
        </div>
      </v-img>
      <v-responsive class="mx-auto search-textfield" style="margin-top: -30px">
        <v-text-field
          variant="solo"
          label="Search"
          append-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-responsive>
    </v-col>
  </v-row>

  <!-- <v-list>
    <v-list-item
      v-for="(cocktail, i) in appStore.cocktailsByIngredient"
      :key="i"
    >
      {{ cocktail }}
    </v-list-item>
  </v-list> -->
  <v-row>
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
  </v-row>
  <v-row>
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
  </v-row>

</template>

<script lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'
import { useAppStore } from "@/store/app";
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    appStore: useAppStore(),
  }),
});
</script>

<style>
</style>