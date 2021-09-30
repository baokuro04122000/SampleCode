import {product} from '../services/index.js';
const getProducts = async (req,res)=>{
    const pageSize = 6;
    const page = +req.query.pageNumber || 1;    
    const name=req.query.name || '';
    const seller = req.query.seller || '';
    const category = req.query.category || '';
    const order = req.query.order || '';
    const min = req.query.min && +req.query.min !== 0 ? +req.query.min : 0;
    const max = req.query.max && +req.query.max !== 0 ? +req.query.max : 0;
    const rating = req.query.rating && +req.query.rating !== 0 ? +req.query.rating : 0;

    const sellerFilter = seller ? {seller} : '';
    const nameFilter =  name !== 'all' ? { name : { $regex : name, $options:'i'}} : {};
    const categoryFilter = category ? {category} : {};
    const priceFilter = min && max ? {price:{$gte : min, $lte : max}} : {};
    const ratingFilter = rating ? { rating : { $gte : rating }} : {};
    const sortOrder = order === 'lowest' 
                    ? {price:1}
                    : order==='highest'
                    ?  {price:-1}
                    : order === 'toprated'
                    ? {rating:-1}
                    : {_id:-1};
    try{
        const count = await product.countFilter({
            ...sellerFilter,
            ...nameFilter,
            ...categoryFilter,
            ...priceFilter,
            ...ratingFilter
        })
        const products = 
        await product.getProducts(
            {
            ...sellerFilter,
            ...nameFilter,
            ...categoryFilter,
            ...priceFilter,
            ...ratingFilter
            },
            sortOrder,pageSize,page);
        res.send({products,page,pages:Math.ceil(count/pageSize)});
    }catch(err){
        res.send({error:err})
    }
}

export default {
    getProducts:getProducts,
}