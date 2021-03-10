import { redirectToErrorPageIfNeeded } from "../../helpers";
import Vue from "vue";
import axios from "axios";

const state = {
    emails: [],
    email: { data: {} },
    query: "",
    loading: {
        get: false,
        post: false
    },
    serverErrors: null
};
const getters = {
    allEmails(state) {
        return state.emails.filter(email => {
            return state.query
                .toLowerCase()
                .split(" ")
                .every(
                    word =>
                        email.data.email.toLowerCase().includes(word) ||
                        email.data.message.toLowerCase().includes(word) ||
                        email.data.subject.toLowerCase().includes(word) ||
                        email.data.name.toLowerCase().includes(word)
                );
        });
    },
    emailObject(state) {
        return state.email;
    },
    searchQuery(state) {
        return state.query;
    },
    isLoading(state) {
        return state.loading;
    },
    serverErrors(state) {
        return state.serverErrors;
    }
};
const actions = {
    async fetchEmails(store) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get("/api/emails");
            store.commit("setEmails", res.data.emails);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            Vue.$toast.error("Une erreur s'est produite . Réessayer");
        }
        store.commit("clearLoading", "get");
    },
    async fetchEmail(store, id) {
        try {
            store.commit("setLoading", "get");
            const res = await axios.get(`/api/emails/${id}`);
            store.commit("setEmail", res.data.email);
        } catch (err) {
            redirectToErrorPageIfNeeded(err.response.status);
            Vue.$toast.error("Une erreur s'est produite . Réessayer");
        }
        store.commit("clearLoading", "get");
    }
};
const mutations = {
    setEmails(state, emails) {
        state.emails = emails;
        state.emailsBackup = emails;
    },
    setEmail(state, email) {
        state.email = email;
    },
    setQuery(state, q) {
        state.query = q;
    },
    clearQuery(state) {
        state.query = "";
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
