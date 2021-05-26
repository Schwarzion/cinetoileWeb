import {axiosAPI} from '../tools/axios';
import { displayError } from '../tools/displayError'

export const getReservations = (id: number) => {
    return axiosAPI.get(`/reservations/session/${id}`).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })};


export const editReservationStatus = (id: number, status: number) => {
    return axiosAPI.put(`/reservation/${id}/${status}`).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })};
