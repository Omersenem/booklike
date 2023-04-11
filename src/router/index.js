import {createRouter, createWebHashHistory} from "vue-router";
import store from "@/store";
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


const router= createRouter({
    routes,
    history:createWebHashHistory()
})

router.beforeEach((to,from,next) =>{
    const authRequiredRoutes=["HomePage"]
    const _isAuthenticated=store.getters._isAuthenticated
    if(authRequiredRoutes.indexOf(to.name) > -1){
        if(_isAuthenticated) next();
        else next(false)
    }else{
        next();
    }

})

export default router