import {canTurnTo} from "./permission.service";
import {getRouteTitleHandled, routes, showTitle} from "../../router";
import {getToken, setToken} from "../jwt.service";

//todo prefix in config
const LOGIN_PAGE_NAME = "login";
const HOME_PAGE_NAME = "home";
const USER_TOKEN_KEY = "user";
const APP_NAME = "security";

export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem);
  const pageTitle = showTitle(handledRoute, vm);
  const resTitle = pageTitle ? `${APP_NAME} - ${pageTitle}` : APP_NAME;
  window.document.title = resTitle;
};

const AccessControlService = {
  router(store, router) {
    router.beforeEach((to, from, next) => {
      const token = getToken();
      // Token is not set and to name is not like login name - Go to login page
      if (!token && to.name !== LOGIN_PAGE_NAME) {
        next({name: LOGIN_PAGE_NAME});
      }
      // token is not set and name is equal to login name - Go to login page
      else if (!token && to.name === LOGIN_PAGE_NAME) {
        next();
      }
      // token is set and name is equal to login name - Go to homepage
      else if (token && to.name === LOGIN_PAGE_NAME) {
        next({name: HOME_PAGE_NAME});
      } else {
        // User is authenticated
        if (store.state.user.isAuthenticated) {
          // If user has permissions to go to route - Go next
          if (canTurnTo(to.name, store.state.user.access, routes)) {
            next();
          } else {
            next({replace: true, name: "error_404"});
          }
        } else {
          store
              .dispatch("getUser")
              .then(user => {
                if (canTurnTo(to.name, user.access, routes)) {
                  next();
                } else {
                  next({replace: true, name: "error_404"});
                }
              })
              .catch(() => {
                setToken(USER_TOKEN_KEY, "");
                next({
                  name: "login"
                });
              });
        }
      }
    });

    router.afterEach(to => {
      setTitle(to, router.app);
      window.scrollTo(0, 0);
    });
  }
};
export default AccessControlService;
