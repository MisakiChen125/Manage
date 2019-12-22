// 考试试卷管理接口

import request from '@/utils/request'

// 创建试卷接口
export function creExam(data) {
    return request({
        url:'/exam/exam',
        method:'post',
        data
    })
}

// 更新试卷
export function createExam(question_ids) {
    return request({
        url:'/exam/exam/w5tcy-g2dts',
        method:'put',
        params:{question_ids}
    })
}

// 获取试卷列表
export function acquireExamList(query) {
    return request({
        url:'/exam/exam',
        method:'get',
        params:{query}
    })
}

// 获取试卷详情（教师端）
export function acquirePaperList() {
    return request({
        url:'/exam/exam/w5tcy-g2dts',
        method:'get',
    })
}

// 删除试卷
export function delExamList() {
    return request({
        url:'/exam/exam/w5tcy-g2dts',
        method:'delete',
    })
}