import {axiosAPI} from '../tools/axios';

//Faking user id
const id = 1;

export const getReservations = (id: number) => {
    return axiosAPI.get(`/reservations/session/${id}`);
}

export const editReservationStatus = (id: number, status: number) => {
    return axiosAPI.put(`/reservations/${id}/${status}`);
}