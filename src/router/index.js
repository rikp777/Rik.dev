import Vue from "vue";
import VueRouter from "vue-router";
import error from "./routes/error";
import permissions from "./routes/permissions";

Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        redirect: "/error/404",
    },
    {
        path: "/",
        name: "_home",
        redirect: "/home",
        component: () => import('../components/base/Main'),
        children: [
            {
                path: "/home",
                name: 'home',
                component: () => import('../views/page/Home')
            }
        ]

    },

    ...permissions,
    ...error
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router

//router functions
export const getRouteTitleHandled = route => {
    let router = {...route};
    let meta = {...route.meta};
    let title = "";
    if (meta.title) {
        if (typeof meta.title === "function") {
            meta.__titleIsFunction__ = true;
            title = meta.title(router);
        } else title = meta.title;
    }
    meta.title = title;
    router.meta = meta;
    return router;
};
export const showTitle = (item, vm) => {
    let {title, __titleIsFunction__} = item.meta;
    if (!title) return;

    //if translate is turned on i18n
    let translate = true;
    if (translate) {
        if (title.includes("{{") && title.includes("}}") && translate)
            title = title.replace(/({{[\s\S]+?}})/, (m, str) =>
                str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim()))
            );
        else if (__titleIsFunction__) title = item.meta.title;
        else title = vm.$t(item.name);
    } else title = (item.meta && item.meta.title) || item.name;
    return title;
};
