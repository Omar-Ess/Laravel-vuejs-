import axios from "axios";
import nProgress from "nprogress";
import router from "../../router";
import { fireConfirmation, redirectToErrorPageIfNeeded } from "../../helpers";
import Vue from "vue";
const state = {
    products: [],
    product: {category_id : null , id : null , title : null , desc : null  ,newImage : null},
    loading: {
        get: false,
        post: false
    },
    serverErrors: null
};
const getters = {
    allProducts(state) {
        return state.products;
    },
    productObject(state) {
        return state.product;
    },
    isLoading(state) {
        return state.loading;
    },
    serverErrors(state) {
        return state.serverErrors;
    }
};
const actions = {
    async fetchProducts(store) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get("/api/products");
            store.commit("setProducts", res.data.products);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            Vue.$toast.error("Une erreur s'est produite . Réessayer");
        }
        store.commit("clearLoading", "get");
    },
    deleteProduct(store, id) {
        fireConfirmation(async () => {
            try {
                nProgress.start();
                const res = await axios.delete(`/api/products/${id}`);
                store.commit("removeProduct", id);
                Vue.$toast.success("Produit supprimée avec succès");
            } catch (err) {
                redirectToErrorPageIfNeeded(err.response.status);
                Vue.$toast.error("Une erreur s'est produite . Réessayer");
            }
            store.commit("clearLoading");
            nProgress.done();
        });
    },
    async addProduct(store, newProduct) {
        try {
            const config = {
                headers: {
                    "Content-Type":
                        "multipart/form-data; charset=utf-8; boundary=" +
                        Math.random()
                            .toString()
                            .substr(2)
                }
            };

            store.commit("setLoading", "post");
            const res = await axios.post("/api/products", newProduct, config);
            store.commit("addProduct", res.data.product);
            store.commit("clearProduct");
            Vue.$toast.success("Produit ajoutée avec succès");
            router.push("/admin/products");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    async fetchProduct(store, id) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get(`/api/products/${id}`);
            store.commit("setProduct", res.data.product);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "get");
    },

    async updateProduct(store, updatedProduct) {
        try {
            const config = {
                headers: {
                    "Content-Type":
                        "multipart/form-data; charset=utf-8; boundary=" +
                        Math.random()
                            .toString()
                            .substr(2)
                }
            };
            store.commit("setLoading", "post");
            // even tho it's supposed to be a PUT method . we replaced it with POST in order for php to parse the form data and proccess it . but we need an additional
            // we appended the put method in order for the route to catch it
            updatedProduct.append("_method", "PUT");
            const res = await axios.post(
                `/api/products/${updatedProduct.get("id")}`,
                updatedProduct,
                config
            );
            // store.commit("updateUser", res.data.user);
            Vue.$toast.success("Produit modifiée avec succès");

            router.push("/admin/products");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    bulkDeleteProducts(store, selectedItems) {
        return new Promise(async resolve => {
            try {
                store.commit("setLoading", "post");
                await axios.delete("/api/products/bulk/" + selectedItems);
                store.commit("bulkRemoveProducts", selectedItems);
                Vue.$toast.success("Produit(s) supprimées avec succès");
                store.commit("clearLoading", "post");
                resolve();
            } catch (err) {
                redirectToErrorPageIfNeeded(err.response.status);
                Vue.$toast.error("Une erreur s'est produite . Réessayer");
            }
            store.commit("clearLoading", "post");
        });
    }
};
const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    removeProduct(state, id) {
        state.products = state.products.filter(product => product.id !== id);
    },
    addProduct(state, newProduct) {
        state.products = [newProduct, ...state.products];
    },
    setProduct(state, product) {
        state.product = product;
    },
    clearProduct(state) {
        state.product = {};
    },
    updateProduct(state, updatedProduct) {
        state.products = state.products.map(product => {
            return product.id === updatedProduct.id ? updatedProduct : product;
        });
    },
    bulkRemoveProducts(state, selectedItems) {
        selectedItems.forEach(id => {
            state.products = state.products.filter(product => {
                return product.id !== id;
            });
        });
    },
    setLoading(state, method) {
        state.loading[method] = true;
    },
    clearLoading(state, method) {
        state.loading[method] = false;
    },
    setServerErrors(state, err) {
        if (err.response.data.errors) {
            state.serverErrors = Object.values(err.response.data.errors);
        } else {
            state.serverErrors = [];
        }
    },
    clearServerErrors(state) {
        state.serverErrors = null;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

