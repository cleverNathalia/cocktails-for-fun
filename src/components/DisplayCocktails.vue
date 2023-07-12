<template>
  <v-row>
    <v-col
      cols="12"
      v-for="(cocktail, i) in cocktailList"
      :key="i"
      class="d-flex justify-center"
    >
      <v-card class="w-75">
        <v-card-actions class="d-flex justify-end">
          <v-btn
            size="x-large"
            variant="text"
            @click="isIconAlt = !isIconAlt"
            :icon="isIconAlt ? 'mdi-heart-outline' : 'mdi-heart'"
          ></v-btn>
        </v-card-actions>
        <v-card-item>
          <v-card-text>
            <v-row>
              <v-col
                xxl="6"
                xl="6"
                lg="6"
                md="6"
                sm="12"
                xs="12"
                style="text-align: -webkit-center"
              >
                <v-img
                  :src="appStore.cocktailsImages[cocktail.name]"
                  :lazy-src="appStore.cocktailsImages[cocktail.name]"
                  cover
                  class="rounded-img"
                >
                </v-img>
              </v-col>
              <v-col
                xxl="6"
                xl="6"
                lg="6"
                md="6"
                sm="12"
                xs="12"
                class="d-flex justify-start"
              >
                <v-card-text class="overflow-y-auto">
                  <v-card-title class="text-h5 font-weight-regular py-4 card-title-size">
                    {{ cocktail.name }}
                  </v-card-title>
                  <v-list
                    v-for="(ingredient, j) in cocktail.ingredients"
                    :key="j"
                    style="padding: 0px !important"
                  >
                    <v-list-item>
                      {{ ingredient }}
                    </v-list-item>
                  </v-list>
                  <v-textarea
                    class="mt-6"
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
          <v-card-actions class="d-flex justify-end">
            <v-btn
              size="large"
              color="primary"
              rounded
              variant="elevated"
              class="px-3"
              >Make it</v-btn
            >
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/app";

export default defineComponent({
  name: "neon-header",
  data: () => ({
    appStore: useAppStore(),
    isIconAlt: true,
  }),
  props: {
    cocktailList: [] as any[],
  },
});
</script>