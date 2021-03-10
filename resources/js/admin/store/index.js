import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import categories from "./modules/categories";
import products from "./modules/products";
import sections from "./modules/sections";
import emails from "./modules/emails";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        users,
        categories,
        products,
        sections,
        emails
    }
});
export default store;
