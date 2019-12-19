import request from '@/utils/request'
// 学生登录平台的接口


// 学生登录接口
export function studentL(data){
   return request ({
        url:'/student/login',
        method:'post',
        data
   })
}

// 获取学生信息（含考试试卷）
export function acquireStudent(exam_exam_id){
    return request ({
         url:'/student/info',
         method:'get',
         params:{exam_exam_id}
    })
 }
 
//  提交试卷接口
export function subPaper(data){
    return request ({
         url:'/exam/student',
         method:'post',
         data
    })
 }

// 获取试卷详情（学生端）
export function acquirePaper(){
    return request ({
         url:'/exam/unstart/w5tcy-g2dts',
         method:'get',
    })
 }