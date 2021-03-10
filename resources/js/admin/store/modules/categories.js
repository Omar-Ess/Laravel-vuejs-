import axios from "axios";
import nProgress from "nprogress";
import router from "../../router";
import { fireConfirmation, redirectToErrorPageIfNeeded } from "../../helpers";
import Vue from "vue";
const state = {
    categories: [],
    category: {name : '' , slug : ''},
    loading: {
        get: false,
        post: false
    },
    serverErrors: null
};
const getters = {
    allCategories(state) {
        return state.categories;
    },
    categoryObject(state) {
        return state.category;
    },
    isLoading(state) {
        return state.loading;
    },
    serverErrors(state) {
        return state.serverErrors;
    }
};
const actions = {
    async fetchCategories(store) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get("/api/categories");
            store.commit("setCategories", res.data.categories);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            Vue.$toast.error("Une erreur s'est produite . Réessayer");
        }
        store.commit("clearLoading", "get");
    },
    deleteCategory(store, id) {
        fireConfirmation(async () => {
            try {
                nProgress.start();
                const res = await axios.delete(`/api/categories/${id}`);
                store.commit("removeCategory", id);
                Vue.$toast.success("Catégorie supprimée avec succès");
            } catch (err) {
                redirectToErrorPageIfNeeded(err.response.status);
                Vue.$toast.error("Une erreur s'est produite . Réessayer");
            }
            store.commit("clearLoading");
            nProgress.done();
        });
    },

    async addCategory(store, newCategory) {
        try {
            store.commit("setLoading", "post");
            const res = await axios.post("/api/categories", newCategory);
            store.commit("addCategory", res.data.category);
            store.commit("clearCategory");
            Vue.$toast.success("Catégorie ajoutée avec succès");
            router.push("/admin/categories");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    async fetchCategory(store, id) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get(`/api/categories/${id}`);
            store.commit("setCategory", res.data.category);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "get");
    },

    async updateCategory(store, updatedCategory) {
        try {
            store.commit("setLoading", "post");
            const res = await axios.put(
                `/api/categories/${updatedCategory.id}`,
                updatedCategory
            );
            store.commit("updateCategory", res.data.category);
            Vue.$toast.success("Catégorie modifiée avec succès");

            router.push("/admin/categories");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    bulkDeleteCategories(store, selectedItems) {
        return new Promise(async (resolve) => {
            try {
                store.commit("setLoading", "post");
                await axios.delete("/api/categories/bulk/" + selectedItems);
                store.commit("bulkRemoveCategories", selectedItems);
                Vue.$toast.success("Catégories supprimées avec succès");
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
    setCategories(state, categories) {
        state.categories = categories;
    },
    removeCategory(state, id) {
        state.categories = state.categories.filter(
            category => category.id !== id
        );
    },
    addCategory(state, newCategory) {
        state.categories = [newCategory, ...state.categories];
    },
    setCategory(state, category) {
        state.category = category;
    },
    clearCategory(state) {
        state.category = {};
    },
    updateCategory(state, updatedCategory) {
        state.categories = state.categories.map(category => {
            return category.id === updatedCategory.id
                ? updatedCategory
                : category;
        });
    },
    bulkRemoveCategories(state, selectedItems) {
        selectedItems.forEach(id => {
            state.categories = state.categories.filter(category => {
                return category.id !== id;
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
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
