import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-98921.firebaseio.com/'
});

export default instance;