import { examType, examAllType } from '@/api/questions'
import { acquireExamList } from '@/api/examination'
const state = {
    examList: [],
    getClass: [],
    //  试卷列表的信息
    tableData: []
}
const mutations = {
    // 考试类型
    getExamList(state, payload) {
        state.examList = payload.data
    },
    // 获取所有的课程
    getClassList(state, payload) {
        state.getClass = payload.data
    },
    getAcquire(state, payload) {
        state.tableData = payload.exam
    }
}

const actions = {
    // 考试类型
    async  examType({ commit }) {
        let res = await examType();
        commit('getExamList', res)
    },
    // 获取所有的课程
    async  examAllType({ commit }) {
        let res = await examAllType();
        commit('getClassList', res)
    },
    async  acquireExamList({ commit }) {
        let res = await acquireExamList();
        commit('getAcquire', res)
        console.log(res.exam);
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}