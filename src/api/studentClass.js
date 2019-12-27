// 学生、班级、教室管理接口

import request from '@/utils/request'


// 获取没有分配教室的班级
export function acquireNo() {
    return request({
        url:'/manger/grade/new',
        method:'get',
    })
}

// 删除班级接口
export function deleteClass(data) {
    let {grade_id} = data
    return request.delete('/manger/grade/update', { data: {grade_id} })
 }

// 更新班级信息接口
export function updateClass(data) {
    return request({
        url:'/manger/grade/update',
        method:'put',
        data
    })
}


//添加班级接口
export function addClass(data) {
    return request({
        url:'/manger/grade',
        method:'post',
        data
    })
}


// 删除教室接口
export function deleteClassRoom(data) {
    let {room_id}=data
    return request.delete('/manger/room/delete', { data: {room_id} })
  }


// 更新教室接口
export function updateClassRoom(query) {
    return request({
        url:'/manger/room/update',
        method:'put',
        params:query
    })
}


// 添加教室接口
export function addClassRoom(data) {
    return request({
        url:'/manger/room',
        method:'post',
        data
    })
}

// 删除学生接口
export function deleteStudent(data) {
    let {student_id}=data
    return request.delete(`/manger/student/${student_id}`)
  }

// 没有分班学生接口
export function noStudent() {
    return request({
        url:'/manger/student/new',
        method:'get'
    })
}

// 已经分班学生接口
export function YetStudent() {
    return request({
        url:'/manger/student',
        method:'get'
    })
}


// 获取全部教室接口
export function acquireClass() {
    return request({
        url:'/manger/room',
        method:'get'
    })
}



// 获取已经分配教室的班级的接口
export function acquireYetClass() {
    return request({
        url:'/manger/grade',
        method:'get'
    })
}



// 更新学生信息接口
export function updateYetClass(query) {
    return request({
        url:'/manger/student/edit',
        method:'put',
        params:query
    })
}


// 添加学生接口
export function addStudent(data) {
    return request({
        url:'/manger/student',
        method:'post',
        data
    })
}

