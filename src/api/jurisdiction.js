// 用户及权限管理接口

import request from '@/utils/request'


export function updateUser(user_id) {
    return request({
        url:'/user/user',
        method:'put',
        params:{user_id}
    })
}


// 展示身份数据
export function showIdentity() {
    return request({
        url:'/user/identity',
        method:'get',
    })
}


// 展示身份和api权限关系
export function showApi() {
    return request({
        url:'/user/identity_api_authority_relation',
        method:'get',
    })
}


// 添加用户
export function addUser(data) {
    return request({
        url:'/user',
        method:'post',
        data
    })
}


// 添加视图权限
export function authorityView(view_authority_text,view_id) {
    return request({
        url:'/user/authorityView/edit',
        method:'get',
        params:{view_authority_text:view_authority_text,view_id:view_id}
    })
}


// 添加身份
export function addIdentity(identity_text) {
    return request({
        url:'/user/identity/edit',
        method:'get',
        params:{identity_text}
    })
}


// 添加api接口权限
export function addAuthorityApi(api_authority_text,api_authority_url,api_authority_method) {
    return request({
        url:'/user/authorityApi/edit',
        method:'get',
        params:{api_authority_text,api_authority_url,api_authority_method}
    })
}


// 给身份设定api接口权限
export function setIdentityApi(data) {
    return request({
        url:'/user/setIdentityApi',
        method:'post',
        data
    })
}


// 展示用户数据
export function showUserList() {
    return request({
        url:'/user/user',
        method:'get',
    })
}


// 展示api接口权限数据
export function apiAuthority() {
    return request({
        url:'/user/api_authority',
        method:'get',
    })
}


// 获取视图权限数据
export function acquireView(groupid) {
    return request({
        url:'/user/view_authority',
        method:'get',
        params:{groupid}
    })
}



// 获取当前用户信息
export function acquireUser() {
    return request({
        url:'/user/userInfo',
        method:'get',
    })
}


// 根据用户id，返回该用户的视图权限
export function userId(user_id) {
    return request({
        url:'/user/new',
        method:'get',
        params:{user_id}
    })
}


//给身份设定视图权限
export function viewInfo(data) {
    return request({
        url:'/user/setIdentityView',
        method:'post',
        data
    })
}


// 展示身份和视图权限关系
export function showInfo(groupid) {
    return request({
        url:'/user/identity_view_authority_relation',
        method:'get',
        params:{groupid}
    })
}