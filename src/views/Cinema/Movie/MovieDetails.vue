<template>
  <div class="movie-details">
    <div class="movie-details__header">
      <span>
        <font-awesome-icon
          icon="arrow-circle-left"
          id="arrow-back"
          v-on:click="goBack"
        />
      </span>

      <span class="title">
        {{ movie.name }}
      </span>

      <span></span>
    </div>

    <div class="movie-details__container">
      <div class="movie-details__poster">
        <img :src="'data:image/jpeg;base64,' + movie.image" />
      </div>

      <div class="movie-details__infos">
        <div class="infos-multiple">
          <div>
            <p class="label">Durée</p>
            <span class="info">{{ movie.duration }}</span>
          </div>

          <div>
            <!-- Utilisation de Luxon pour le formattage de date -->
            <p class="label">Date de sortie</p>
            <span class="info">{{ movie.launchDate | luxon }}</span>
          </div>

          <div>
            <p class="label">Pays d'origine</p>
            <span class="info">{{ movie.country }}</span>
          </div>

          <div>
            <p class="label">Âge</p>
            <span class="info">{{ movie.advisedAge }}</span>
          </div>
        </div>

        <div class="infos-solo">
          <p class="label">Synopsis</p>
          <span class="info" id="synopsis">{{ movie.description }}</span>
        </div>

        <div class="infos-solo">
          <p class="label">Réalisateur</p>
          <span class="info">{{ movie.director }}</span>
        </div>

        <div class="infos-solo">
          <p class="label">Acteurs</p>
          <span class="info">{{ movie.casting }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

//Components & methods imports
import { getOneMovie } from "../../../services/movie.service";

//Add icons to fontAwesome library
library.add(faArrowCircleLeft);

export default {
  props: ["movieId"],

  data() {
    return {
      movie: [],
    };
  },

  beforeMount() {
    this.getMovie(this.$props.movieId);
  },

  methods: {
    async getMovie(movieId) {
      const res = await getOneMovie(movieId);
      this.movie = res.data;
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.movie-details {
  padding: 24px;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 24px;
    padding: 24px;
  }

  &__poster {
    img {
      width: 500px;
      height: 700px;
      border-radius: 8px;

      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &__infos {
      width: 50%;
    text-align: center;
  }
}

.infos-multiple {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.infos-solo {
  margin-top: 32px;
}

.label {
  font-weight: bold;
  color: #707070;
}

.info {
    background-color: #EAEAEA;
    border-radius: 4px;
    padding: 8px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #707070;
}

#arrow-back {
  font-size: 32px;
  color: #580015;
  cursor: pointer;
}

#synopsis{
    display: inline-block;
    width: 75%;
    word-wrap: break-word;
}
</style>