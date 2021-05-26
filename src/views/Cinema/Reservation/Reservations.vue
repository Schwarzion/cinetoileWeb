<template>
  <div class="reservation">
    <h3>Mes réservations</h3>
    <reservation-list
      v-if="reservations.length"
      :reservations="reservations"
    ></reservation-list>
    <p
      id="noReservation"
      v-else
    >Pas de reservations pour cette session</p>
  </div>
</template>

<script>
import { getReservations } from "../../../services/reservation.service";
import ReservationList from "@/components/reservations/ReservationList";

export default {
  props: ["session"],
  components: { ReservationList },
  data: function () {
    return {
      reservations: [],
    };
  },
  beforeMount() {
    this.getReservations(this.$props.session.id);
  },

  methods: {
    async getReservations(sessionId) {
      const res = await getReservations(sessionId);
      if (res.status !== 200) {
        alert(`Request Status : ${res.status}\n
        Error : ${res.data}`);
      } else this.reservations = res.data;
    },

    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.reservations {
  margin: 16px;

  #noReservations {
    margin-top: 2em;
    text-align: center;
  }
}
</style>