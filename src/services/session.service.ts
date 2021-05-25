import {axiosAPI} from '../tools/axios';

//Faking user id
const id = 1;


export const editStatus = (id: number, status: number) => {
    return axiosAPI.put(`/reservations/${id}/${status}`);
}

export const getSessions = (date: string) => {
    return axiosAPI.get(`/sessions/theater/${id}?from=${date}`);
}

export const getSession = (id: number) => {
    return axiosAPI.get(`/sessions/${id}`);
}

export const addSession = (session: any) => {
    return axiosAPI.post(`/session`, session);
}