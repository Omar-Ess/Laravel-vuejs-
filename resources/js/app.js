/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import VuePaginate from 'vue-paginate'
import swal from "sweetalert2";



window.Vue = require("vue").default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "gallery-list",
    require("./components/GalleryList.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// filters

Vue.filter('truncate' , function(text) {
    return (text.length > 1 ) ? text.substr(0, 10) + '...' : text;
})
 Vue.use(VuePaginate)


const app = new Vue({
    el: "#app",
    methods:{
        handleSubscribe(){
            swal.fire({
                icon: 'success',
                title: 'Confirmation ',
                text: 'Merci de vous être inscrit à notre newsletter',
                confirmButtonColor: "black",
              })
              $('#subscribeEmail').val('')
        }
    }
});
require("./template");
