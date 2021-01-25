import axios from 'axios'

//Configuration de base pour les appels API
export default axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
})