import { addQuestions, acquireAllQuestions } from "@/api/questions"
const state = {
    AllQuestions: []
}
const mutaions = {
    getacquireAllQuestions(state, actions) {
        console.log(actions)
        state.AllQuestions = actions
    }
}
const actions = {
    async acquireAllQuestions({ commit }) {
        let res = await acquireAllQuestions();
        commit("getacquireAllQuestions", res.data)
    }
}
export default {
    state,
    mutaions,
    actions,
    namespaced: true
}