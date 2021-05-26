<template>
  <form id="addTheaterMovieForm" @submit.prevent="saveTheaterMovie">
    <div class="datepicker">
      <p>{{movie.name}}</p>
      <p>Période de disponibilité</p>

      <vc-date-picker v-model="dateRange" is-range />
    </div>

    <p v-if="errors.length">
      <b>Veuillez corriger les erreurs suivantes:</b>
      <ul>
        <li v-for="error in errors" :key=error>{{ error }}</li>
      </ul>
    </p>

    <button type="submit" class="form-add-btn">Ajouter</button>
  </form>
</template>

<script>
import {
  addTheaterMovie,
  editTheaterMovie,
} from "@/services/theaterMovie.service";
import { displayError } from "@/tools/displayError";

export default {
  props: ["movie", "theaterMovieId"],

  data() {
    return {
      errors: [],

      dateRange: {
        start: (this.movie && this.movie.startDate) || new Date(),
        end: (this.movie && this.movie.endDate) || new Date(),
      },
    };
  },

  methods: {
    checkForm() {
      this.errors = [];

      !this.dateRange.start && this.errors.push("Date de début requise.");
      !this.dateRange.end && this.errors.push("Date de fin requise.");
    },

    async saveTheaterMovie() {
      const theaterMovie = {
        theaterId: 2,
        movieId: this.movie.movieId || this.movie.id,
        startDate: this.dateRange.start,
        endDate: this.dateRange.end,
        status: true,
        theaterFav: false,
      };

      try {
        this.checkForm();

        //Check des erreurs dans le formulaire
        if (this.errors.length > 0) {
          return false;
        } else {
          //Check si c'est une modif ou un ajout
          if (this.theaterMovieId) {
            const theaterMovieUpdated = {
              id: this.theaterMovieId,
              ...theaterMovie,
            };
            await editTheaterMovie(theaterMovieUpdated);
          } else {
            await addTheaterMovie(theaterMovie);
          }

          //Redirection
          this.$router.push("/theater/movies");
        }
      } catch (error) {
        displayError(error.response);
      }
    },
  },
};
</script>

<style>
#addTheaterMovieForm {
  margin-top: 16px;
  text-align: center;
}
</style>