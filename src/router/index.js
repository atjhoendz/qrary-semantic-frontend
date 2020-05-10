import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About';
import ListBooks from '../components/ListBooks';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'about',
        component: About
    },
    {
        path: '/search',
        name: 'search',
        component: ListBooks
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;