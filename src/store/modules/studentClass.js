import {acquireYetClass,addClass,deleteClass,addClassRoom,YetStudent,deleteClassRoom,deleteStudent,acquireClass} from '@/api/studentClass'

const state={
    classList:[],//班级列表
    yiList:[],//已分配班级学生
    allRoom:[],//全部教室
    allGrade:[],//全部班级
    setStudent:[]//筛选的学生
   
}
const mutations={
    setClassList(state,payload){
        state.classList=payload;
     
    },
    setYiList(state,payload){
        state.yiList=payload
    },
    getRoom(state,payload){//全部教室
        state.allRoom=payload
    },
    //全部班级
    getGrade(state,payload){
        if(payload===1){
            state.allGrade=payload
        }else{
            alert(payload.msg)
        }
    },
    setRoom(state,payload){//根据所有教室筛选
        let list=state.yiList.filter(item=>{
            if(item.room_text===payload){
                return item
            }
        })
        toCurrent(list)
    },
    setGrade(state,payload){//班级筛选
        let list =state.yiList.filter(item=>{
            if(item.grade_text===payload){
                return item
            }
        })
        toCurrent(list)
    },
    setSearch(state,payload){
        if(!Array.isArray(state.yiList)&&payload !==""){
            state.setStudent=state.yiList.filter(item=>{
               if(item.student_name.indexOf(payload) !==-1) return item
            })
        }
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
    async acquireClass({commit},payload){
        let res=await acquireClass(payload)
        commit('getRoom',res.data)
        console.log(res)
    },
    async deleteClass({commit},payload){//删除班级
        let res=await deleteClass(payload)
        // console.log(res)
    },
    async addClassRoom({commit},payload){//添加教室
        const {room_text} =payload
        let res=await addClassRoom({room_text:room_text})
       console.log(res.msg)
    },
    
    async deleteClassRoom({commit},payload){//删除教室
        let res=await deleteClassRoom(payload)
        console.log(res)
    },
    async YetStudent({commit},payload){//已经分班学生
        let res=await YetStudent(payload)
        commit('setYiList',res.data)
        // console.log(res.data)
    },
    async deleteStudent({commit},payload){//删除学生
        let res=await deleteStudent(payload)
        console.log(res)
    }

    
    
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}