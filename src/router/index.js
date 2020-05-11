import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About';
import ListBooks from '../components/ListBooks';
import BookDetail from '../components/BookDetail';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'about',
        component: About,
        meta: {
            title: 'Tentang'
        }
    },
    {
        path: '/search',
        name: 'search',
        component: ListBooks,
        meta: {
            title: 'Pencarian'
        }
    },
    {
        path: '/details/:isbn',
        name: 'details',
        component: BookDetail,
        meta: {
            title: 'Detail Buku'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;