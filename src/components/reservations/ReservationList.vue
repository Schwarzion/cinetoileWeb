<template>
  <div class="reservation-list">
    <table>
      <tr>
        <th>Id de réservation</th>
        <th>Nom - Prénom</th>
        <th>Confirmation</th>
      </tr>
      <tr
        v-for="reservation in reservations"
        :key="reservation.id"
        class="reservation"
      >
        <td>{{ reservation.id }}</td>
        <td>{{ reservation.name }} {{ reservation.lastname }}</td>
        <td>
          <label class="switch">
            <input
              type="checkbox"
              :checked="reservation.status == 1"
              @click="editStatus(reservation.id, reservation.status)"
            />
            <span class="slider round"></span>
          </label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
//Fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { editReservationStatus } from "../../services/reservation.service";

//Add icons to fontAwesome library
library.add(faEdit, faTrashAlt);

export default {
  props: ["reservations"],

  data() {
    return {};
  },

  methods: {
    async editStatus(id, status) {
      status === 1 ? (status = 0) : (status = 1);
      const res = await editReservationStatus(id, status);
      if (res.status == 200) {
        this.reservations.map((reservation) =>
          reservation.id === id ? res.data : reservation
        );
      }
    },
  },
};
</script>

<style lang="scss">
.reservation-list {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  td,
  th {
    padding: 0.5em 1em 0.5em 1em;
  }

  th,
  td {
    text-align: center;
  }

  table {
    border-collapse: collapse;
  }

  tr + tr {
    border-top: 1px solid;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #580015;
}

input:focus + .slider {
  box-shadow: 0 0 1px #580015;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
