import axios from 'axios'

const baseURL = 'https://swapi.dev/api/people/'

const api = axios.create({
    baseURL,
})

export default api
