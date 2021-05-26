<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie">
      <div class="movie__poster">
        <img :src="'data:image/jpeg;base64,'+ movie.image" />
      </div>

      <div class="movie__details">
        <div class="movie__details-infos">
          <p id="movieName">{{ movie.name }}</p>
          <p id="movieDuration">{{ movie.duration }}</p>
        </div>
      
        <!-- Condition d'affichage du bouton Modifier/Ajouter -->
        <div v-if="isTheaterMovie" class="movie__details-btns movie__details-btns--theaterMovies">
          <router-link :to="{ name: 'EditTheaterMovie', params: { theaterMovieId: movie.id, movie: movie } }" class="edit-btn">
            <font-awesome-icon icon="edit"/>
          </router-link>

          <span v-on:click="removeTheaterMovie(movie)" class="delete-btn">
            <font-awesome-icon icon="trash-alt"/>
          </span>
        </div>

        <div v-else class="movie__details-btns movie__details-btns--movies">
          <router-link :to="{ name: 'AddTheaterMovie', params: { movie: movie } }" class="link">
            <font-awesome-icon icon="plus-circle" id="add-btn"/> 
            <span>Ajouter</span>
          </router-link>
          <button class="info-btn" v-on:click="toMovieDetails(movie.id)">Plus d'informations</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { editTheaterMovie } from '@/services/theaterMovie.service';

//Add icons to fontAwesome library
library.add(faEdit, faTrashAlt);

export default {
  props: ["movies", "isTheaterMovie"],

  data() {
    return {};
  },

  methods: {
    async removeTheaterMovie(theaterMovie) {
      const theaterMovieUpdated = {
        id: theaterMovie.id,
        theaterId: theaterMovie.theaterId, 
        movieId: theaterMovie.movieId,
        startDate: theaterMovie.startDate,
        endDate: theaterMovie.endDate,
        status: false, 
        theaterFav: theaterMovie.theaterFav
      }

      await editTheaterMovie(theaterMovieUpdated);
      this.$router.go();
    },

    toMovieDetails(movieId) {
      this.$router.push({name: 'MovieDetails', params: {movieId: movieId} })
    }
  }
};
</script>

<style lang="scss">
.movie-list{
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
}

.movie {
  width: 350px;
  margin: 8px;
  border-radius: 8px;
  align-self: center;
  justify-self: center;
  background-color: #EAEAEA;
  color: #707070;

  &__poster{
    img{
      height: 350px;
      width: 350px;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 8px 8px 0 0;
    }
  }

  &__details{
    display: flex;
    justify-content: space-between;
  }

  &__details-infos{
    padding: 8px;
  }

  &__details-btns{
    padding: 8px;

    &--theaterMovies{
      display: flex;
      align-items: center;
      font-size: 24px;
    }

    &--movies{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-decoration: none;
    }
  }
}

#movieName{
  font-weight: bold;
}

#movieDuration{
  color: #580015;
}

#add-btn{
  color:green;
  margin-right: 8px;
  text-align: center;
}
</style>