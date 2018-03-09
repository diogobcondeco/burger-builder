import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-6badd.firebaseio.com/',
})

export default instance;