import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import('./Vue/Components/Home.vue')

    }, {
        path: "/test",
        component: () => import('./Vue/Components/Test.vue')
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
