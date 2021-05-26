<template>
  <div class="sessions">
    <div class="sessions__header">
      <p>Mes séances</p>
      <router-link
        to="/theater/session/add"
        class="link"
      >
        <div class="add">
          <font-awesome-icon
            icon="plus-circle"
            class="add-icon"
          />
          <p class="add-movie">Ajouter une séance</p>
        </div>
      </router-link>
    </div>
    <vc-date-picker
      class="session-date-picker"
      v-model="date"
      mode="date"
      is24hr
      @dayclick='dayClicked'
    >
      >
      <template v-slot="{ inputValue, inputEvents }">
        <input
          class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </vc-date-picker>
    <session-list
      v-if="sessions.length"
      :sessions="sessions"
    ></session-list>
    <p
      id="noSession"
      v-else
    >Pas de séances pour ce jour</p>
    <v-dialog />
  </div>
</template>

<script>
//Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

//Components & methods imports
import SessionList from "@/components/sessions/SessionList";
import { getSessions } from "../../../services/session.service";

//Add icons to fontAwesome library
library.add(faPlusCircle);

export default {
  components: { SessionList },

  data: function () {
    return {
      date: new Date(),
      sessions: [],
    };
  },

  beforeMount: function () {
    this.getSessions();
  },

  methods: {
    async getSessions() {
      const offset = this.date.getTimezoneOffset();
      const date = new Date(this.date.getTime() - offset * 60 * 1000);
      const queryDate = date.toISOString().split("T")[0];
      const res = await getSessions(queryDate);
      this.sessions = res.data;
    },
    dayClicked: function (day) {
      this.date = day.date;
      this.getSessions();
    },
  },
};
</script>

<style lang="scss">
.sessions {
  margin: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .add {
    display: flex;
    justify-content: space-between;

    .add-icon {
      font-size: 1.5em;
    }
  }

  .session-date-picker {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  #noSession {
    margin-top: 2em;
    text-align: center;
  }
}
</style>