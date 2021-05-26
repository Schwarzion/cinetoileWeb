import { axiosAPI } from '../tools/axios';
import { displayError } from '../tools/displayError'

//Faking user id
const id = 1;


export const deleteSession = (id: number) => {
    return axiosAPI.delete(`/sessions/${id}`).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })
}

export const getSessions = (date: string) => {
    return axiosAPI.get(`/sessions/theater/${id}?from=${date}`).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })
}

export const getSession = (id: number) => {
    return axiosAPI.get(`/sessions/${id}`).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })
};


export const addSession = (session: any) => {
    return axiosAPI.post(`/session`, session).catch((error) => {
        if (error.response) {
            displayError(error.response);
        }
    })
};