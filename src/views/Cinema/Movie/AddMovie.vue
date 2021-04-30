<template>
  <form id="addMovieForm" @submit.prevent="saveMovie">
      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs suivantes:</b>
        <ul>
          <li v-for="error in errors" :key=error>{{ error }}</li>
        </ul>
      </p>

      <div>
        <div class="form-field">
          <label for="name" class="form-label">Titre du film</label>
          <input type="text" class="form-input" name="name" id="name" v-model="name">
        </div>
        
        <div class="form-field">
          <label for="description" class="form-label">Synopsis</label>
          <textarea class="form-input" name="description" id="description" v-model="description" />
        </div>

        <div class="form-field">
          <label for="duration" class="form-label">Durée</label>
          <input type="text" class="form-input" name="duration" id="duration" v-model="duration">
        </div>

        <div class="form-field">
          <label for="rate" class="form-label">Note</label>
          <input type="text" class="form-input" name="rate" id="rate" v-model="rate">
        </div>

        <div class="form-field">
          <label for="image" class="form-label">Affiche</label>
          <input type="file" name="image" id="image" v-on:change="handleUploadFile">
        </div>

        <div class="form-field">
          <p class="form-label">Date de sortie</p>
          <vc-date-picker v-model="launchDate" />
        </div>
        
        <div class="form-field">
          <label for="director" class="form-label">Réalisateur</label>
          <input type="text" class="form-input" name="director" id="director" v-model="director">
        </div>

        <div class="form-field">
          <label for="casting" class="form-label">Acteurs</label>
          <input type="text" class="form-input" name="casting" id="casting" v-model="casting">
        </div>

        <div class="form-field">
          <label for="advisedAge" class="form-label">Âge recommandé</label>
          <input type="text" class="form-input" name="advisedAge" id="advisedAge" v-model="advisedAge">
        </div>

        <div class="form-field">
          <label for="country" class="form-label">Pays d'origine</label>
          <input type="text" class="form-input" name="country" id="country" v-model="country">
        </div>
      </div>

      <button type="submit" class="form-add-btn">Ajouter</button>
  </form>
</template>

<script>
import { addMovie, uploadPoster } from '../../../services/movie.service';

  export default {
    data() {
      return{
        errors: [],

        name: "",
        description: "",
        duration: "",
        tmdbKey: null,
        comment: "",
        rate: null,
        image: null,
        launchDate: new Date(),
        director: "",
        casting: "",
        advisedAge: null,
        country: ""
      }
    },

    methods: {
      checkForm() {
        this.errors = [];

        !this.name && this.errors.push('Nom du film requis');
        !this.description && this.errors.push('Synopsis requis');
        !this.duration && this.errors.push('Durée du film requise');
        !this.image && this.errors.push('Affiche du film requise')
        !this.launchDate && this.errors.push('Date de sortie requise');
        !this.director && this.errors.push('Nom du réalisateur requis');
        !this.casting && this.errors.push('Membres du casting requis');
        !this.advisedAge && this.errors.push('Âge recommandé requis');
        !this.country && this.errors.push("Pays d'origine requis");
      },

      async handleUploadFile(event) {
        const form = new FormData();

        form.append('file', event.target.files[0]);

        const imageUploaded = await uploadPoster(form);

        this.image = imageUploaded.data;
      },

      async saveMovie() {
        const newMovie = {
          name: this.name,
          description: this.description,
          duration: this.duration,
          tmdbKey: null,
          comment: this.comment,
          rate: this.rate,
          image: this.image,
          launchDate: this.launchDate,
          director: this.director,
          casting: this.casting,
          advisedAge: this.advisedAge,
          country: this.country
        }

        console.log(newMovie);
        this.checkForm();
          
        //Check des erreurs dans le formulaire
        if(this.errors.length > 0){
          return false;
        } else {
          console.log(newMovie);
          await addMovie(newMovie);
        
          //Redirection
          this.$router.push('/movies')
        }
      }
    }
  }
</script>

<style>
#addMovieForm {
  width: 33vw;
  margin: auto;
  margin-top: 24px;
  text-align: center;
}

#description{
  height: 150px;
}
</style>