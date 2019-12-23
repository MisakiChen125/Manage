import {acquireYetClass,addClass} from '@/api/studentClass'

const state={
    classList:[],
    addList:[]
   
}
const mutations={
    setClassList(state,payload){
        state.classList=payload;
        state.arrList=payload;
    },
    setAddList(state,payload){
        state.addList=payload;
    }
   
   
}
const actions={
    async acquireYetClass({commit},payload){
        let res=await acquireYetClass(payload)
        commit('setClassList',res.data)
        // console.log(res.data)
    },
    async addClass({commit},payload){
        let res=await addClass(payload)
        commit('setAddList',res)
        console.log(res)
    }
    
    
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}