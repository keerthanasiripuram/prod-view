
import { Product } from '../types/ProductType';
import apiClient from '../utils/apiClient';
import { apiWrapper } from '../utils/apiWrapper';

export const getProducts = async (page: number, pageSize: number)=> {
    const apiCall = ()=> apiClient.get('/products/v1/get-products', {
      params: { page, pageSize },
    });//url got ready, here itslf page nt found err
    const response=await apiWrapper(apiCall);
    console.log(response)//exct sent by apirespnse
    return response;
  };
  