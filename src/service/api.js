import axios from 'axios'

export const api = axios.create({
    baseURL: "https://wolfnotes-api.onrender.com"

})