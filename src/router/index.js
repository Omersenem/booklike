import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
    name: "HomePage",
    path: "/",
        component: () => import("@/views/HomePage.vue")

    },
    {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/views/LoginPage.vue")

    },
    {
        name: "RegisterPage",
        path: "/register",
        component: () => import("@/views/RegisterPage.vue")

    },
    {
        name: "NewBookmarkPage",
        path: "/new",
        component: () => import("@/views/NewBookmark.vue")

    },

]

export default createRouter({
    routes,
    history:createWebHashHistory()
})