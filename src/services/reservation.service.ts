import {axiosAPI} from '../tools/axios';


export const getReservations = (id: number) => {
    return axiosAPI.get(`/reservations/session/${id}`);
}

export const editReservationStatus = (id: number, status: number) => {
    console.log(status);
    return axiosAPI.put(`/reservation/${id}/${status}`);
}