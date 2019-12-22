import {examType,examAllType} from '@/api/questions'

const state = {
    examList:[],
     getClass:[]
}
const mutations={
    // 考试类型
    getExamList(state,payload){
        state.examList=payload.data
    },
    // 获取所有的课程
    getClassList(state,payload){
        state.getClass=payload.data
    },
}

const actions={
    // 考试类型
  async  examType({commit}){
     let res =await examType();
        commit('getExamList',res)
        console.log(res.data);
    },
     // 获取所有的课程
    async  examAllType({commit}){
        let res =await examAllType();
           commit('getClassList',res)
           console.log(res.data);
       },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }