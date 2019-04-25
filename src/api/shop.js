/**
 * article模块接口列表
 */

import qs from 'qs' // 根据需求是否导入qs模块
import base from './base' // 导入接口域名列表
import axios from '@/libs/http' // 导入http中创建的axios实例

const shop = {
  // 商品列表
  listGoods() {
    return axios.get(`${base.sq}/cart/listGoods`)
  },
  // 购物车列表
  listCart() {
    return axios.get(`${base.sq}/cart/listCart`)
  },
  // 添加到购物车
  insetGoods(params) {
    return axios.get(`${base.sq}/cart/insetGoods`, {
      params
    })
  },
  // 从购物车删除
  deleteGoods(params) {
    return axios.get(`${base.sq}/cart/deleteGoods`, {
      params
    })
  },
}

export default shop