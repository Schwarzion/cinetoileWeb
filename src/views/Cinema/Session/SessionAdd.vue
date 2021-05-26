import { addSession } from '../../../services/session.service';
<template>
  <b-container class='w-25 justify-content-center mt-5'>
    <form @submit.prevent="addSession">

      <b-row id="formRows">
        <vc-date-picker
          v-model="date"
          mode="dateTime"
          :minute-increment="5"
          :attributes='attrs'
        />
      </b-row>
      <b-row id="formRows"><select v-model="movie">
          <option
            disabled
            value=""
          >Choisissez un Film</option>
          <option
            v-for="movie in movies"
            v-bind:value="movie.id"
            :key="movie.id"
          >{{movie.name}}</option>
        </select>
      </b-row>
      <b-row id="formRows"><select v-model="room">
          <option
            disabled
            value=""
          >Choisissez une salle</option>
          <option
            v-for="room in rooms"
            v-bind:value="room.id"
            :key="room.id"
          >{{room.name}}</option>
        </select>
      </b-row>

      <b-row id="formRows">
        <button
          type="submit"
          class="form-add-btn"
          id="session-add-btn"
        >Ajouter</button>
      </b-row>
    </form>
    <b-row id="formRows">
      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
      <ul>
        <li
          v-for="error in errors"
          :key=error
        >{{ error }}</li>
      </ul>
      </p>
    </b-row>
  </b-container>
</template>

<script>
import { addSession } from "../../../services/session.service";
import { getEnabledMoviesFromTheater } from "../../../services/theaterMovie.service";
import { getRooms } from "../../../services/room.service";

export default {
  props: [],

  data: function () {
    return {
      errors: [],
      rooms: [],
      movies: [],
      movie: null,
      room: null,
      date: new Date(),
      attrs: [
        {
          highlight: "red",
        },
      ],
    };
  },

  beforeMount: function () {
    this.date.setMinutes(0, 0, 0);
    this.getMovies();
    this.getRooms();
  },

  methods: {
    async getMovies() {
      const res = await getEnabledMoviesFromTheater(1);
      this.movies = res.data;
      console.log(this.movies);
    },
    async getRooms() {
      const res = await getRooms(1);
      this.rooms = res.data;
      console.log(this.rooms);
    },
    checkForm: function () {
      this.errors = [];
      !this.movie && this.errors.push("Film requis");
      !this.room && this.errors.push("Salle requise");
      !this.date && this.errors.push("Horaire requis");
    },
    async addSession() {
      const newSession = {
        movieId: this.movie,
        roomId: this.room,
        time: this.date,
      };
      console.log(newSession);
      this.checkForm();
      if (this.errors.length == 0) {
        await addSession(newSession);
        this.$router.push("/theater/sessions");
      }
    },
  },
};
</script>

<style lang="scss">
#description {
  height: 150px;
}

#formRows {
  margin-top: 3em;
}
</style>