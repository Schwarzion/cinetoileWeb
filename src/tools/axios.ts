import axios from 'axios'

//Configuration de base pour les appels API
const axiosAPI = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
});

const axiosTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export {
  axiosAPI,
  axiosTMDB
};