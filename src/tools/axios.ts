import axios from 'axios'

//Configuration de base pour les appels API
const axiosAPI = axios.create({
  baseURL: 'http://192.168.1.106:8080',
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