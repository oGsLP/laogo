import Vue from "vue";
import Router from "vue-router";

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
      component: () => import("./../components/NotFound.vue")
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
      name: "main",
      component: () => import("./../components/Main.vue")
    },
    {
      path: "/laogo",
      name: "laogo",
      component: () => import("./../generators/Laogo.vue")
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
    {
      path: "/laogo/tiktok",
      name: "tiktok",
      component: () => import("./../generators/LaogoTiktok.vue")
    },
    {
      path: "/laogo/digital",
      name: "digital",
      component: () => import("./../generators/LaogoDigital.vue")
    }
  ]
});
