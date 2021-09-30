import express from 'express';
import {product , user ,order ,upload} from '../controllers/index.js';
import {isAuth ,isAdmin ,isSeller} from '../helpers/utils.js';
const router = express.Router();

let initRoutes = (app) => {
    router.get('/api/products',product.getProducts);
    
    return app.use('/',router);
}
export default initRoutes;