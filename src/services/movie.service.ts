import {axiosTMDB, axiosAPI} from '../tools/axios';

export const testApiTMDB = () => {
    return axiosTMDB.get('/movie/4?api_key=309ed12d648be328de400778662be627');
};

export const getMovies = () => {
    return axiosAPI.get('/movies');
}

export const getOneMovie = (movieId: number) => {
    return axiosAPI.get(`/movie/${movieId}`);
}

export const addMovie = (movie: any) => {
    return axiosAPI.post(`/movie`, movie);
}

export const uploadPoster = (moviePoster: any) => {
    return axiosAPI.post('movie/uploadPoster', moviePoster);
}