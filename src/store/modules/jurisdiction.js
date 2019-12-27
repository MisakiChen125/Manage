import { showUserList, showIdentity, apiAuthority, showApi, acquireView, showInfo } from "@/api/jurisdiction"
const state = {
    UserList: [],
    Identity: [],
    Authority: [],
    Api: [],
    View: [],
    Info: []
}
const mutations = {
    setShowUserList(state, actions) {
        state.UserList = actions
    },
    setShowIdentity(state, actions) {
        state.Identity = actions
    },
    setApiAuthority(state, actions) {
        state.Authority = actions
    },
    setShowApi(state, actions) {
        state.Api = actions
    },
    setAcquireView(state, actions) {
        state.View = actions
    },
    setShowInfo(state, actions) {
        state.Info = actions
    }
}
const actions = {
    async showUserList({ commit }) {
        let res = await showUserList();
        commit("setShowUserList", res.data)
    },
    async showIdentity({ commit }) {
        let res = await showIdentity();
        commit("setShowIdentity", res.data)
    },
    async apiAuthority({ commit }) {
        let res = await apiAuthority();
        commit("setApiAuthority", res.data)
    },
    async showApi({ commit }) {
        let res = await showApi();
        commit("setShowApi", res.data)
    },
    async acquireView({ commit }) {
        let res = await acquireView();
        commit("setAcquireView", res.data)
    },
    async showInfo({ commit }) {
        let res = await showInfo();
        commit("setShowInfo", res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}