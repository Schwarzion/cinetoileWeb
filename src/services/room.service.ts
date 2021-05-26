import {axiosAPI} from '../tools/axios';
import { displayError } from '../tools/displayError'

export const getRooms = (id: number) => {
    return axiosAPI.get(`/room/theater/${id}`).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })};
