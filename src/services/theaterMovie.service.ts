import {axiosAPI} from '../tools/axios';

export const getMoviesFromTheater = (theaterId: number) => {
    return axiosAPI.get(`theater/${theaterId}/movies`);
}

export const getEnabledMoviesFromTheater = (theaterId: number) => {
    return axiosAPI.get(`theater/${theaterId}/movies/enabled`)
}

export const getOneTheaterMovie = (theaterMovieId: number) => {
    return axiosAPI.get(`theaterMovie/${theaterMovieId}`);
}

export const addTheaterMovie = (theaterMovie: any) => {
    return axiosAPI.post('theaterMovie', theaterMovie);
}

export const editTheaterMovie = (theaterMovie: any) => {
    return axiosAPI.put(`theaterMovie/${theaterMovie.id}`, theaterMovie);
}

export const deleteTheaterMovie = (theaterMovieId: number) => {
    return axiosAPI.delete(`theaterMovie/${theaterMovieId}`);
}