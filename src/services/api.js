
import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URLda API: movie/now_playing?api_key=1760f43473793b6c03748f23967fc466&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

