import http from "../../shared/services/http-common.js";


export class BooksApiService {

    getAll() {
        return http.get('/books');
    }


    getById(id) {
        return http.get(`/books/${id}`);
    }


    create(bookResource) {
        return http.post('/books', bookResource);
    }


    update(id, bookResource) {
        return http.put(`/books/${id}`, bookResource);
    }

    delete(id) {
        return http.delete(`/books/${id}`);
    }

    findByTitle(title) {
        return http.get(`/books?title=${title}`);
    }


}