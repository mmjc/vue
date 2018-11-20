/**
 * Created by mjc on 2018/11/19.
 */
import ajax from './ajax'

export const reqAddress=geohash=>ajax('/api/position/'+geohash)

export const reqCategorys=()=>ajax('api/index_category')

export const reqShops=({latitude,longitude})=>ajax('api/shops',{latitude,longitude})

export const reqCatchas=()=>ajax('/api/catchas')

export const accountLogin=(name,pwd,captcha)=>ajax('/api/lpgin_pwd',{name,pwd,captcha},'POST')

export const mobileCode=phone=>ajax('/api/sendcode',{phone})

export const phoneLogin=(phone,code)=>ajax('api/login_sms',{phone,code},'POST')

export const reqUser=()=>ajax('api/userinfo')
