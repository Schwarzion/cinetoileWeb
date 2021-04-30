<!-- Template = HTML, c'est la zone qui correspond au DOM, ce qu'on veut afficher-->
<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<!-- Script = JS, zone où l'on va mettre les méthodes utiles sur la page (appels API, animations, validations, etc...) -->
<script>
import { testApi } from "../services/test.service";

export default {
  data() {
    return {
      msg: "",
    };
  },

  //Equivalent d'un ComponentDidMount ou d'un UseEffect en React -> gère le cycle de vie du composant
  beforeMount() {
    this.getMsg();
  },

  methods: {
    //Méthode de récupération de données classique
    async getMsg() {
      const res = await testApi()

      //this.msg correspond à la variable msg initialisé plus haut dans data()
      this.msg = res.data;
    }
  }
};
</script>