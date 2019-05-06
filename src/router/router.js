import Vue from 'vue';
import Router from 'vue-router';

/*
 * Todo: why dynamic import fail
 */


Vue.use(Router);

export default new Router({
    // mode: "hash",
    routes: [
        {
            path: "*",
            name: "notFound",
            component: ()=>import("./../components/NotFound.vue"),
            // meta: {
            //     analytics: {
            //         pageviewTemplate(route) {
            //             return {
            //                 title: 'Not Found',
            //                 page: route.path,
            //             }
            //         },
            //     },
            // }
        },
        {
            path: "/",
            name: "laogo",
            component: ()=>import("./../generators/Laogo.vue"),
            // meta: {
            //     analytics: {
            //         pageviewTemplate(route) {
            //             return {
            //                 title: 'Laogo',
            //                 page: route.path,
            //             }
            //         },
            //     },
            // }
        },
    ]
});

