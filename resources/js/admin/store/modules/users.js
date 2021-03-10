import axios from "axios";
import nProgress from "nprogress";
import router from "../../router";
import { fireConfirmation, redirectToErrorPageIfNeeded } from "../../helpers";
import Vue from "vue";
const state = {
    users: [],
    user: {},
    loading: {
        get: false,
        post: false
    },
    serverErrors: null
};
const getters = {
    allUsers(state) {
        return state.users;
    },
    userObject(state) {
        return state.user;
    },
    isLoading(state) {
        return state.loading;
    },
    serverErrors(state) {
        return state.serverErrors;
    }
};
const actions = {
    async fetchUsers(store) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get("/api/users");
            store.commit("setUsers", res.data.users);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            Vue.$toast.error("Une erreur s'est produite . Réessayer");
        }
        store.commit("clearLoading", "get");
    },
    deleteUser(store, id) {
        fireConfirmation(async () => {
            try {
                nProgress.start();
                const res = await axios.delete(`/api/users/${id}`);
                store.commit("removeUser", id);
                Vue.$toast.success("Utilisateur supprimée avec succès");
            } catch (err) {
                redirectToErrorPageIfNeeded(err.response.status);
                Vue.$toast.error("Une erreur s'est produite . Réessayer");
            }
            store.commit("clearLoading");
            nProgress.done();
        });
    },
    async addUser(store, newUser) {
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
            const res = await axios.post("/api/users", newUser, config);
            store.commit("addUser", res.data.user);
            store.commit("clearUser");
            Vue.$toast.success("Utilisateur ajoutée avec succès");
            router.push("/admin/users");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    async fetchUser(store, id) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get(`/api/users/${id}`);
            store.commit("setUser", res.data.user);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "get");
    },

    async updateUser(store, updatedUser) {
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
            updatedUser.append("_method", "PUT");
            const res = await axios.post(
                `/api/users/${updatedUser.get("id")}`,
                updatedUser,
                config
            );
            store.commit("updateUser", res.data.user);
            if (res.data.user.id == store.rootState.auth.authUser.id) {
                store.commit("auth/setAuthUser", res.data.user, {
                    root: true
                });
            }
            Vue.$toast.success("Utilisateur modifiée avec succès");

            router.push("/admin/users");
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            store.commit("setServerErrors", err);
        }
        store.commit("clearLoading", "post");
    },
    bulkDeleteUsers(store, selectedItems) {
        return new Promise(async resolve => {
            try {
                store.commit("setLoading", "post");
                await axios.delete("/api/users/bulk/" + selectedItems);
                store.commit("bulkRemoveUsers", selectedItems);
                Vue.$toast.success("Utilisateur supprimées avec succès");
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
    setUsers(state, users) {
        state.users = users;
    },
    removeUser(state, id) {
        state.users = state.users.filter(user => user.id !== id);
    },
    addUser(state, newUser) {
        state.users = [newUser, ...state.users];
    },
    setUser(state, user) {
        //this change is intended to fit the fucking stupid toggle switcher
        user.is_admin = Boolean(user.is_admin);
        state.user = user;
    },
    clearUser(state) {
        state.user = {};
    },
    updateUser(state, updatedUser) {
        state.users = state.users.map(user => {
            return user.id === updatedUser.id ? updatedUser : user;
        });
    },
    bulkRemoveUsers(state, selectedItems) {
        selectedItems.forEach(id => {
            state.users = state.users.filter(user => {
                return user.id !== id;
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
