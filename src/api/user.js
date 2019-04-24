import qs from 'qs' // 根据需求是否导入qs模块
import base from './base' // 导入接口域名列表
import axios from '@/libs/http' // 导入http中创建的axios实例

const user = {
  // 登录
  login(params) {
    return axios.post(`${base.sq}/login/user`, params)
  },
  // 注册
  register(params) {
    return axios.post(`${base.sq}/login/register`, params)
  }
}

export default user