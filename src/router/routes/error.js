import Layout from "../../views/base/Layout";

export default [
  {
    path: "/error",
    component: Layout,
    redirect: "noredirect",
    name: "errorPage",
    meta: {
      title: "errorPages",
      icon: "404"
    },
    children: [
      {
        path: "401",
        component: () => import("../../views/error/Error401"),
        name: "page401",
        meta: {
          title: "page401",
          noCache: true
        }
      },
      {
        path: "404",
        component: () => import("../../views/error/Error404"),
        name: "page404",
        meta: {
          title: "page404",
          noCache: true
        }
      }
    ]
  },
  {
    path: "/errorLog",
    component: Layout,
    children: [
      {
        path: "errorLog",
        name: "errorLog",
        component: () => import("../../views/error/ErrorLog"),
        meta: {title: "errorlog", icon: "errorLog"}
      }
    ]
  }
];
