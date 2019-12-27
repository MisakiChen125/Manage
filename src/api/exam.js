import request from '@/utils/request'

// 考试阅卷管理系统

export function changePaper(score) {
    //批改试卷
    return request({
      url: '/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',
      method: 'put',
      params: { score }
    })
  }
// 获取学生试卷详情
  export function acquire(){
      return request({
          url:'/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',
          method:'get'     
      })
  }

//获取学生试卷列表
export function studentLists(query) { 
    return request({
        url:'/exam/student',
        method:'get', 
        params:query       
    })
 }