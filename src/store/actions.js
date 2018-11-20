/**
 * Created by mjc on 2018/11/19.
 */
import {reqAddress,reqCategorys,reqShops} from '../api'

import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'

export default {
  async getAddress({commit,state}){
    const geohash=state.latitude+','+state.longitude
    const result=await reqAddress(geohash)
    commit(RECEIVE_ADDRESS,{address:result.data})
  },

  async getCategorys({commit}){
    const result=await reqCategorys()
    commit(RECEIVE_CATEGORYS,{categorys:result.data})
  },

  async getShops({commit,state}){
    const {latitude,longitude}=state
    const result=await reqShops({latitude,longitude})
    commit(RECEIVE_SHOPS,{shops:result.data})
  }
}
