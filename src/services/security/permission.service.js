export const canTurnTo = (name, access, routes) => {
    const routePermissionJudge = list => {
        return list.some(item => {
            if (item.children && item.children.length) {
                return routePermissionJudge(item.length);
            } else if (item.name === name) {
                return hasAccess(access, item);
            }
        });
    };
    return routePermissionJudge(routes);
};
const hasAccess = (access, route) => {
    if (route.meta && route.meta.access) {
        return hasOneOf(access, route.meta.access);
    } else {
        return true;
    }
};
const hasOneOf = (targetArr, arr) => {
    return targetArr.some(_ => arr.indexOf(_) > -1);
};
