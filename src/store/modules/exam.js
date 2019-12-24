import {studentList,acquire} from '@/api/exam'

const state = {
  list: [],//获取学生试卷列表
 kaoList: []//获取学生试卷详情
}
const mutations = {
  setyjList(state, payload) {
    state.list = payload
  },
  setKaoList(state, payload) {
    state.kaoList = payload
  }

}
const actions = {
  async studentList({commit}, payload) {
    let res = await studentList(payload)
    commit('setyjList', res)
    console.log(res.exam)
  },
  async acquire({commit},payload){
    let res=await acquire(payload)
    commit('setKaoList',res)
    console.log(res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}