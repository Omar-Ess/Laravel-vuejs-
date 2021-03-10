require("../bootstrap");
window.Vue = require("vue").default;
import router from "./router";
import VueOnlineProp from "vue-online-prop";
import store from "./store";
import Loading from "vue-loading-overlay";
import Toast from "vue-toastification";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import swal from "sweetalert2";
import ToggleButton from "vue-js-toggle-button";
import Multiselect from "vue-multiselect";
import wysiwyg from "vue-wysiwyg";
import VuePageTitle from "vue-page-title";

// ______________________________________________State Commit Mutations for The authenticated user______________________________________________
store.commit("auth/setAuthUser", window.authUser);
// ______________________________________________Component global registration______________________________________________
Vue.component("app", require("./components/App.vue").default);
Vue.component("layout", require("./components/layouts/Layout.vue").default);
Vue.component(
    "the-breadcrumb",
    require("./components/partials/TheBreadcrumb.vue").default
);
Vue.component(
    "offline",
    require("./components/errorPages/Offline.vue").default
);
Vue.component("loading", Loading);
Vue.component(
    "server-error-alert",
    require("./components/partials/ServerErrorAlert").default
);
Vue.component("multiselect", Multiselect);
Vue.component("clip-loader", require("vue-spinner/src/ClipLoader.vue").default);
Vue.component(
    "scale-loader",
    require("vue-spinner/src/ScaleLoader.vue").default
);
// ______________________________________________Filters______________________________________________
Vue.filter("formatedDate", function(dt) {
    return dayjs(dt).format("MMMM D, YYYY h:mm A");
});
Vue.filter("truncate", function(text) {
    return text.length > 1 ? text.substr(0, 100) + "..." : text;
});
// ______________________________________________Vue Prototyiping and Instantiation and  Config______________________________________________

Vue.use(VueOnlineProp);
const toastOptions = {
    timeout: 3000
    // position:'top-center'
};
Vue.use(Toast, toastOptions);
dayjs.locale("fr");
window.swal = swal; // setting the sweet alert into the window
Vue.use(ToggleButton);
Vue.use(wysiwyg, {});

Vue.use(VuePageTitle, {
    prefix: `${window.appName} | `,
    router
});

const app = new Vue({
    el: "#app",
    router,
    store
});
require("startbootstrap-sb-admin-2/js/sb-admin-2.min.js");

require("./custom");
