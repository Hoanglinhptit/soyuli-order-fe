import { ApiClient } from './APIConfig';
import * as constanst from '../constants'

 const loginRequest = (payload:Record<string, any>) => ApiClient.post('/login', payload);

 const getProductRequest = (payload:Record<string, any>) => ApiClient.get(`product?pageIndex=${payload.pageIndex}&&limit=${constanst.LIMIT}&&type=${payload.type}&&brand=${payload.brand || ""}&&keySearch=${payload.keySearch || ""}`, payload)
 const getDetailProductRequest = (payload:Record<string, any>) => ApiClient.get(`product/${payload.id}`, payload)

 const addCartRequest = (payload:Record<string, any>) => ApiClient.post(`/cart`, payload)
 const getCartRequest = (payload:Record<string, any>) => ApiClient.get(`/cart?id=${payload.id}`, payload)
 const deleteCartRequest = (payload:Record<string, any>) => ApiClient.delete(`cart?id=${payload.id}`, payload)
 const getCartProductRequest = (payload:Record<string, any>) => ApiClient.post(`/productCart`, payload)


 export {loginRequest,getProductRequest,getDetailProductRequest, addCartRequest, getCartRequest, getCartProductRequest, deleteCartRequest} 
 