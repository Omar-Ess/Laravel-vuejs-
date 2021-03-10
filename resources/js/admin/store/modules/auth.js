import axios from "axios";
import router from "../../router";
import { redirectToErrorPageIfNeeded } from "../../helpers";
import Vue from "vue";
import nProgress from "nprogress";

const state = {
    authUser: null,
    loading: {
        get: false,
        post: false
    },
    serverErrors: null
};
const getters = {
    authUser(state) {
        return state.authUser;
    },
    isLoading(state) {
        return state.loading;
    },
    serverErrors(state) {
        return state.serverErrors;
    }
};
const actions = {
    async getAuthUser(store) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get("/api/profile");
            store.commit("setAuthUser", res.data.authUser);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            Vue.$toast.error("Une erreur s'est produite . Réessayer");
        }
        store.commit("clearLoading", "get");
    },
    async updateProfileInfo(store, newAuthUser) {
        try {
            store.commit("setLoading", "post");
            const res = await axios.put(
                "/api/profile/updateProfileInfo",
                newAuthUser
            );
            store.commit("setAuthUser", res.data.authUser);
            Vue.$toast.success("Info modifiée avec succès");
            router.push("/admin/profile");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    async updateProfilePassword(store, allPasswords) {
        try {
            store.commit("setLoading", "post");
            await axios.put("/api/profile/updateProfilePassword", allPasswords);
            Vue.$toast.success("Mot de passe modifiée avec succès");
            router.push("/admin/profile");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    async updateProfileAvatar(store, formData) {
        try {
            store.commit("setLoading", "post");
            nProgress.start();
            const config = {
                headers: {
                    "Content-Type":
                        "multipart/form-data; charset=utf-8; boundary=" +
                        Math.random()
                            .toString()
                            .substr(2)
                }
            };
            // even tho it's supposed to be a PUT method . we replaced it with POST in order for php to parse the form data and proccess it . but we need an additional
            // we appended the put method in order for the route to catch it
            formData.append("_method", "PUT");
            const res = await axios.post(
                "/api/profile/updateProfileAvatar",
                formData,
                config
            );
            store.commit("setAuthUser", res.data.authUser);

        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        nProgress.done();
        store.commit("clearLoading", "post");
    }
};
const mutations = {
    setAuthUser(state, authUser) {
        state.authUser = authUser;
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
