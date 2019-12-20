import {changePaper,acquire,studentList} from '@/api/exam'

const state={
    list:[]
}
const mutations={
    setyjList(state,payload){
    state.list=payload
}
}
const actions={
async studentList({commit},payload){
    let res =await studentList(payload)
    commit(' setyjList',res)
    console.log(res)
}
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}