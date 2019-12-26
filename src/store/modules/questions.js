import { examType, acquireAllQuestions, getexamType, getQuestionsType } from "@/api/questions"
const state = {
    AllList: [],
    ExamType: [],
    Subject: [],
    QuestionsType: [],
    SecondList: []
}
const mutations = {
    setAlltest(state, actions) {
        state.AllList = actions
    },
    setSecondList(state, actions) {
        let { testValue, questionsValue, indArr } = actions;
        if (testValue.length || questionsValue.length || indArr.length) {
            // if (testValue.length) {
            //     state.AllList.filter(item => item.exam_name === testValue);
            // } else if (questionsValue.length) {
            //     state.SecondList.filter(item => item.questions_type_text === questionsValue)
            // } else if (indArr.length) {
            //     state.SecondList.filter(item => item.subject_text === indArr[0])
            // };
        } else {
            state.SecondList = state.AllList
        }
    },
    setexamType(state, actions) {
        state.ExamType = actions
    },
    setsubject(state, actions) {
        state.Subject = actions
    },
    setQuestionsType(state, actions) {
        state.QuestionsType = actions
    }
}
const actions = {
    async acquireAllQuestions({ commit }) {
        let res = await acquireAllQuestions();
        commit("setAlltest", res.data)
    },
    async examType({ commit }, actions) {
        let res = await examType();
        commit("setexamType", res.data)
    },
    async getexamType({ commit }, actions) {
        let res = await getexamType();
        commit("setsubject", res.data)
    },
    async getQuestionsType({ commit }) {
        let res = await getQuestionsType();
        commit("setQuestionsType", res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}