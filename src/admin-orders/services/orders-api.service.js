import http from "../../shared/services/http-common.js";


export class OrdersApiService {

    getAll() {
        return http.get('/orders');
    }


    getById(id) {
        return http.get(`/orders/${id}`);
    }


    create(orderResource) {
        return http.post('/orders', orderResource);
    }


    update(id, orderResource) {
        return http.put(`/orders/${id}`, orderResource);
    }

    delete(id) {
        return http.delete(`/orders/${id}`);
    }

    findByTitle(title) {
        return http.get(`/orders?title=${title}`);
    }


}