import http from "../../shared/services/http-common.js";

export class ReviewsApiService {

    getAll() {
        return http.get('/reviews');
    }


    getById(id) {
        return http.get(`/reviews/${id}`);
    }


    create(reviewResource) {
        return http.post('/reviews', reviewResource);
    }


    update(id, reviewResource) {
        return http.put(`/reviews/${id}`, reviewResource);
    }

    delete(id) {
        return http.delete(`/reviews/${id}`);
    }

    findByTitle(title) {
        return http.get(`/reviews?title=${title}`);
    }


}