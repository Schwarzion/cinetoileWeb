<template>
  <div class="movies">
    <div class="movies__header">
      <p>Films disponibles</p>
      <router-link
        to="/movie/add"
        class="link"
      >
        <font-awesome-icon
          icon="plus-circle"
          class="add-icon"
        />
        Proposer un film à ajouter
      </router-link>
    </div>

    <movie-list
      v-if="movies.length"
      :movies="movies"
    ></movie-list>
    <p v-else>
      no data </p>
  </div>
</template>

<script>
//Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

//Components & methods imports
import MovieList from "@/components/movies/MovieList.vue";
import { getMovies } from "../../services/movie.service";

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
    console.log("before movies");
    this.getMovies();
  },

  methods: {
    async getMovies() {
      const res = await getMovies();
      console.log(res.data);
      this.movies = res.data;
    },
  },
};
</script>

<style lang="scss">
.movies {
  margin: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>