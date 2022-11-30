import axios from '../axios'; // But instead our new configured version :)

export default class CategoryService {
    static getCategories(params = {}) {
        return axios.get('/categories', {
            params: params,
        });
    }
}