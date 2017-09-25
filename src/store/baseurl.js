import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://vue-app.jomurgel.com/server/',
})