import {acquireYetClass,addClass,deleteClass,addClassRoom,YetStudent,deleteClassRoom} from '@/api/studentClass'

const state={
    classList:[],
    addList:[],
    yiList:[]
   
}
const mutations={
    setClassList(state,payload){
        state.classList=payload;
        state.arrList=payload;
    },
    setYiList(state,payload){
        state.yiList=payload
    }
   
   
}
const actions={
    async acquireYetClass({commit},payload){//班级管理列表
        let res=await acquireYetClass(payload)
        commit('setClassList',res.data)
        // console.log(res.data)
    },
    async addClass({commit},payload){//添加班级
       let res=await addClass(payload)
       console.log(res)
    },
    async deleteClass({commit},payload){//删除班级
        let res=await deleteClass(payload)
        console.log(res)
    },
    async addClassRoom({commit},payload){//添加教室
        let res=await addClassRoom(payload)
        console.log(res)
    },
    
    async deleteClassRoom({commit},payload){//删除教室
        let res=await deleteClassRoom(payload)
        console.log(res)
    },
    async YetStudent({commit},payload){//已经分班学生
        let res=await YetStudent(payload)
        commit('setYiList',res.data)
        console.log(res.data)
    }

    
    
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}