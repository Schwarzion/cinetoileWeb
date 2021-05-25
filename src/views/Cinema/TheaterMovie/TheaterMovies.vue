<template>
  <div class="theater-movie">
    <div class="theater-movie__header">
      <p>Mes films à l'affiche</p>
      <router-link
        to="/movies"
        class="link"
      >
        <font-awesome-icon
          icon="plus-circle"
          class="add-icon"
        />
        Ajouter un film à l'affiche
      </router-link>
    </div>

    <movie-list
      v-if="movies"
      :movies="movies"
      :isTheaterMovie=true
    ></movie-list>
  </div>
</template>

<script>
//Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

//Components & methods imports
import MovieList from "@/components/movies/MovieList.vue";
import { getEnabledMoviesFromTheater } from "../../../services/theaterMovie.service";

//Add icons to fontAwesome library
library.add(faPlusCircle);

export default {
  components: { MovieList },

  data() {
    return {
      movies: [],
    };
  },

  beforeMount() {
    console.log("before theatermovies");
    //TODO: Récupérer l'id du cinéma connecté actuellement
    this.getMoviesFromTheater(2);
  },

  methods: {
    async getMoviesFromTheater(theaterId) {
      const res = await getEnabledMoviesFromTheater(theaterId);
      this.movies = res.data;
    },
  },
};
</script>

<style lang="scss">
.theater-movie {
  margin: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>