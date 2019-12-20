// 试题管理接口

import request from '@/utils/request'


// 添加试题接口
export function addQuestions(data) {
    return request({
        url:'/exam/questions',
        method:'post',
        data
    })
}

// 获取所有的试题
export function acquireAllQuestions() {
    return request({
        url:'/exam/questions/new',
        method:'get',
    })
}


// 更新试题
export function updateQuestions(query) {
    return request({
        url:'/exam/questions/update',
        method:'put',
        params:query
    })
}



// 获取所有的考试类型
export function examType(groupid) {
    return request({
        url:'/exam/examType',
        method:'get',
        params:{groupid}
    })
}


// 获取所有的课程
export function getexamType() {
    return request({
        url:'/exam/subject',
        method:'get',
    })
}


// 删除指定的试题类型
export function delQuestionsType(data) {
    return request({
        url:'/exam/delQuestionsType',
        method:'post',
        data
    })
}

// 添加试题类型
export function insertQuestionsType(query) {
    return request({
        url:'/exam/insertQuestionsType',
        method:'get',
        params:query
    })
}


// 获取所有的试题类型
export function getQuestionsType() {
    return request({
        url:'/exam/getQuestionsType',
        method:'get',
    })
}


// 按条件获取试题
export function QuestionsType() {
    return request({
        url:'/exam/questions/condition',
        method:'get',
    })
}
