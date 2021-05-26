<template>
  <div class="session-list">
    <table>
      <tr>
        <th>Film</th>
        <th>Horaires</th>
        <th>Salle</th>
        <th>Réservations</th>
        <th class="actions">Actions</th>
      </tr>
      <tr
        v-for="session in sessions"
        :key="session.id"
        class="session"
      >
        <td>{{session.movie}}</td>
        <td>{{session.time | luxon}}</td>
        <td>{{session.room}}</td>
        <td>{{session.reservationNumber}}
          <router-link
            :to="{ name: 'Reservations', params: { session: session } }"
            class="edit-btn"
          >Voir</router-link>
        </td>
        <td class="actions">
          <button v-on:click="deleteSession(session.id)">supprimer</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
//Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteSession } from "../../services/session.service";

//Add icons to fontAwesome library
library.add(faEdit, faTrashAlt);

export default {
  props: ["sessions"],

  data() {
    return {};
  },

  methods: {
    async deleteSession(id) {
      await deleteSession(id, 2);
    },
  },
};
</script>

<style lang="scss">
.session-list {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  td,
  th {
    padding: 0.5em 1em 0.5em 1em;
    button {
      float: right;
    }
  }

  th {
    text-align: center;
  }

  table {
    border-collapse: collapse;
  }

  tr + tr {
    border-top: 1px solid;
  }
}

#movieName {
  font-weight: bold;
}

#movieDuration {
  color: #580015;
}

#add-btn {
  color: green;
  margin-right: 8px;
  text-align: center;
}
</style>