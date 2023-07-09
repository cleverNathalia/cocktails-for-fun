// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "MtAua-Ph70Q5l7KsY4ARNZNk6WcaOF2EQtCoz9n8AHk",
});

export const useAppStore = defineStore("app", {
  state: () => ({
    cocktailsByIngredient: [],
    cocktailsByName: [],
    cocktailsImages: []
  }),

  actions: {
    getCocktailsIngredientApi(ingredient: String) {
      axios
        .get("https://api.api-ninjas.com/v1/cocktail", {
          headers: {
            "X-Api-Key": "Xujko4c0reMwgSixZpP1qQ==z4j3hjZ8BhWBjSjt",
          },
          params: { ingredients: ingredient },
        })
        .then((response) => {
          // console.log(response);
          this.cocktailsByIngredient = response.data;
        });
    },
    getCocktailsNameApi(name: String) {
      axios
        .get("https://api.api-ninjas.com/v1/cocktail", {
          headers: {
            "X-Api-Key": "Xujko4c0reMwgSixZpP1qQ==z4j3hjZ8BhWBjSjt",
          },
          params: { name: name },
        })
        .then((response) => {
          // console.log(response);
          this.cocktailsByIngredient = response.data;
        });
    },
    getCocktailImages() {
      api.search
        .getPhotos({
          query: "long island iced tea cocktail",
          page: 1,
          perPage: 10,
          orderBy: "relevant",
          contentFilter: "high"
        })
        .then((result) => {
          console.log(result.response?.results);
          this.setCocktailImages(result.response?.results);
        });
    },
    setCocktailImages(cocktailsArr: []){
      this.cocktailsImages = cocktailsArr;
    }
  },
});
