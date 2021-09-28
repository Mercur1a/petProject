import axios from 'axios';

export default class JsonService {
    static async getAll(limit = 10, page = 1) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page:page
            }
        })
        return response;
    }


    static async getPostById(id) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return responce;
    }

    static async getCommentById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}


