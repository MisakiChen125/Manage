import {acquireStudent} from '@/api/studentLogin'

const state={
  
    studentMsg:[]
}
const mutations={
    
    setStudentmsg(state,payload){
        state.studentMsg=payload
    }
   
}
const actions={
   
    async acquireStudent({commit},payload){
        let res=await acquireStudent(payload)
        commit('setStudentmsg',res)
        console.log(res)
    }
    
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}