import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import UserPage from "../public/pages/user-page.vue";
import SellersPage from "../public/pages/sellers-page.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        //Root path
        { path: "/", redirect: "/home" },
        { path: "/home",component: HomeComponent,meta:{title:"Home"}},
        {path:"/users",component:UserPage,meta:{title: "User-page"}},
        {path:"/sellers",component:SellersPage,meta:{title: "Sellers-page"}}
    ]

})
export default router;