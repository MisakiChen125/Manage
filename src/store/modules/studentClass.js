import {acquireYetClass} from '@/api/studentClass'
const state={
    arrList:[],
    classList:[],
    cname:"",
    jname:""
}
const mutations={
    setClassList(state,payload){
        state.classList=payload
        state.arrList=payload
    },
    // setStates(state,payload){
    //     console.log(payload)
    //     state.classList=JSON.parse(JSON.stringify(state.arrList)).slice((payload.current*1-1)*payload.pageSize,payload.current*payload.pageSize)
    //     // console.log(state.classList)
    // }
}
const actions={
    async acquireYetClass({commit},payload){
        let res=await acquireYetClass(payload)
        commit('setClassList',res.data)
        console.log(res.data)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}