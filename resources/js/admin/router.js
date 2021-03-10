import VueRouter from "vue-router";
import Vue from "vue";
import nProgress from "nprogress";
import store from "./store";

Vue.use(VueRouter);

const routes = [

    {
        path: "/admin/dashboard",
        name: "dashboard",
        component: () => import("./components/dashboard/Dashboard.vue"),
        meta: {
            title: "Dashboard"
        }
    },
    {
        path: "/admin/users",
        name: "users",
        component: () => import("./components/users/UsersList.vue"),
        meta: {
            title: "Users"
        }
    },
    {
        path: "/admin/users/create",
        name: "users.create",
        component: () => import("./components/users/UsersForm.vue"),
        beforeEnter: checkIfAdmin,
        meta: {
            title: "Users"
        }
    },
    {
        path: "/admin/users/:id/edit",
        name: "users.edit",
        component: () => import("./components/users/UsersForm.vue"),
        beforeEnter: checkIfAdmin,
        meta: {
            title: "Users"
        }
    },
    {
        path: "/admin/categories",
        name: "categories",
        component: () => import("./components/categories/CategoriesList.vue"),
        meta: {
            title: "Categories"
        }
    },
    {
        path: "/admin/categories/create",
        name: "categories.create",
        component: () => import("./components/categories/CategoriesForm.vue"),
        meta: {
            title: "Categories"
        }
    },
    {
        path: "/admin/categories/:id/edit",
        name: "categories.edit",
        component: () => import("./components/categories/CategoriesForm.vue"),
        meta: {
            title: "Categories"
        }
    },
    {
        path: "/admin/products",
        name: "products",
        component: () => import("./components/products/ProductsList.vue"),
        meta: {
            title: "Products"
        }
    },
    {
        path: "/admin/products/create",
        name: "products.create",
        component: () => import("./components/products/ProductsForm.vue"),
        meta: {
            title: "Products"
        }
    },
    {
        path: "/admin/products/:id/edit",
        name: "products.edit",
        component: () => import("./components/products/ProductsForm.vue"),
        meta: {
            title: "Products"
        }
    },
    {
        path: "/admin/sections",
        name: "sections",
        component: () => import("./components/sections/SectionsForm.vue"),
        meta: {
            title: "Sections"
        }
    },
    {
        path: "/admin/emails",
        name: "emails",
        component: () => import("./components/emails/EmailsList.vue"),
        meta: {
            title: "Emails"
        }
    },
    {
        path: "/admin/emails/:id",
        name: "emails.show",
        component: () => import("./components/emails/EmailItem.vue"),
        meta: {
            title: "Emails"
        }
    },
    {
        path: "/admin/profile",
        name: "profile",
        component: () => import("./components/profile/Profile.vue"),
        meta: {
            title: "Profile"
        }
    },
    {
        path: "/admin/settings",
        name: "profile.settings",
        component: () => import("./components/profile/ProfileSettings.vue"),
        meta: {
            title: "Settings"
        }
    },
    {
        path: "/admin/403",
        component: () => import("./components/errorPages/Forbidden.vue"),
        meta: {
            title: "Forbidden"
        }
    },
    {
        path: "/admin/*",
        component: () => import("./components/errorPages/NotFound.vue"),
        meta: {
            title: "Not Found"
        }
    }
];
const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    nProgress.start();
    next();
});
router.afterEach((to, from) => {
    nProgress.done();
});
function checkIfAdmin(to, from, next) {
    if (!store.state.auth.authUser.is_admin) {
        router.push("/admin/403");
    } else {
        next();
    }
}
export default router;
