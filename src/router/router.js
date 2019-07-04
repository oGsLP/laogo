import Vue from "vue";
import Router from "vue-router";

/*
 * Todo: why dynamic import fail
 */

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "*",
      name: "notFound",
      component: () => import("./../components/NotFound.vue"),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: "Not Found",
              page: route.path
            };
          }
        }
      }
    },
    {
      path: "/",
      name: "main",
      component: () => import("./../components/Main.vue"),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: "Main",
              page: route.path
            };
          }
        }
      }
    },
    {
      path: "/laogo",
      component: () => import("./../components/Layout.vue"),

      children: [
        {
          path: "/",
          name: "laogo",
          component: () => import("./../generators/Laogo.vue"),
          meta: {
            analytics: {
              pageviewTemplate(route) {
                return {
                  title: "Laogo",
                  page: route.path
                };
              }
            }
          }
        }
      ]
    }
    // {
    //   path: "/laogo/tiktok",
    //   name: "tiktok",
    //   component: () => import("./../generators/LaogoTiktok.vue"),
    //   meta: {
    //     analytics: {
    //       pageviewTemplate(route) {
    //         return {
    //           title: 'Laogo Tiktok',
    //           page: route.path,
    //         }
    //       },
    //     },
    //   }
    // },
    // {
    //   path: "/laogo/digital",
    //   name: "digital",
    //   component: () => import("./../generators/LaogoDigital.vue"),
    //   meta: {
    //     analytics: {
    //       pageviewTemplate(route) {
    //         return {
    //           title: 'Laogo Digital',
    //           page: route.path,
    //         }
    //       },
    //     },
    //   }
    // },
    // {
    //   path: "/laogo/vue",
    //   name: "vue",
    //   component: () => import("./../generators/LaogoVue.vue"),
    //   meta: {
    //     analytics: {
    //       pageviewTemplate(route) {
    //         return {
    //           title: 'Laogo Vue',
    //           page: route.path,
    //         }
    //       },
    //     },
    //   }
    // }
  ]
});
