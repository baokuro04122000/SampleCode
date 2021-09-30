import ProductModel from '../models/productModel.js';
const getProducts = (filterCondition,sortOrder,pageSize,page) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const products = await ProductModel.getProducts(filterCondition,sortOrder,pageSize,page);
            resolve(products)
        } catch (error) {
            reject(error.message);
        }
    })
}

export default {
    getProducts:getProducts,
}