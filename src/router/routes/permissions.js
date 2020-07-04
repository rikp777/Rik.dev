// import Layout from "../../views/base/Layout";
//
// export default [
//   {
//     path: "/permissions",
//     component: Layout,
//     redirect: "/permissions/page",
//     name: "permissions",
//     alwaysShow: true, // will always show the root menu
//     meta: {
//       title: "permissions",
//       icon: "lock",
//       roles: ["admin", "editor"]
//     },
//     children: [
//       {
//         path: "page",
//         component: () => import("../../views/permissions/Page"),
//         name: "PagePermissions",
//         meta: {
//           title: "pagePermissions",
//           roles: ["admin"]
//         }
//       },
//       {
//         path: "directive",
//         component: () => import("../../views/permissions/Directive"),
//         name: "directivePermission",
//         meta: {
//           title: "directivePermission"
//         }
//       }
//     ]
//   }
// ];
