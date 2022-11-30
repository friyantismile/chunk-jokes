import axios from '../axios'; // But instead our new configured version :)

export default class JokeService {
    static getJokes(query) {
        return axios.get('/search/?query='+query);
    }

    static getJoke(id) {
        return axios.get('/random/?id='+id);
    }
}