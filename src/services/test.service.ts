import axios from '../tools/axios';

//Requête HTTP classique utilisant axios
export const testApi = () => {
    //On appelle l'URL "localhost:8080/" en utlisant notre config Axios
    return axios.get('/');
};