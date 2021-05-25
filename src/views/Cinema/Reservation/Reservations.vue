<template>
  <p>Reservations pour la session {{ sessionId }}</p>
</template>

<script>
import { getReservations } from "../../../services/reservation.service";

export default {
  props: ["sessionId"],

  data() {
    return {
      reservations: [],
    };
  },
  beforeMount() {
    this.getReservations(this.$props.sessionId);
  },

  methods: {
    async getReservations(sessionId) {
      const res = await getReservations(sessionId);
      this.reservations = res.data;
      console.log(this.reservations);
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>