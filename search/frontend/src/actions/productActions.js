import axios from 'axios';
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
} from '../constants/productConstants';

export const listProducts = ({
    pageNumber="",
    seller="",name="",category=""
    ,order='',min=0,max=0,
    rating=0}) => async (dispatch) => {
    dispatch({
        type:PRODUCT_LIST_REQUEST
    })
    try{
        const {data} = await axios.get(
`/api/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
);
        dispatch({type:PRODUCT_LIST_SUCCESS , payload:data})
    }catch(err){
        dispatch({type:PRODUCT_LIST_FAIL,payload:err.message})
    }
}
