import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import UserPage from "../public/pages/user-page.vue";
import SellersPage from "../public/pages/sellers-page.vue";
import BooksManagementComponent from "../admin-books/pages/books-management.component.vue";
import OrdersManagementComponent from "../admin-orders/pages/orders-management.component.vue";
import BookDetail from "../books/pages/book-detail.vue";
import LoginComponent from "../public/pages/login.component.vue";
import RegisterComponent from "../public/pages/register.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Root path
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeComponent, meta: { title: "Home" } },
        { path: "/users", component: UserPage, meta: { title: "User-page" } },
        { path: "/login", component: LoginComponent, meta: { title: "Login" } },
        { path: "/register", component: RegisterComponent, meta: { title: "Register" }},
        { path: "/sellers", component: SellersPage, meta: { title: "Sellers-page" },
            children: [
                { path: "books-management", component: BooksManagementComponent, meta: { title: "Books Management" } },
                { path: "orders-management", component: OrdersManagementComponent, meta: { title: "Orders Management" } }
            ]},
        {path:"/book-detail/:bookId",component: BookDetail, meta:{title: "Book-Detail"},name:"bookDetail",props:true}
    ]
});
export default router;