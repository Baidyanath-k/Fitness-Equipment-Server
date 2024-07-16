import { Router } from 'express';
import { productRoutes } from '../modules/products/product.routes';

const router = Router();


const moduleRoutes = [
    {
        path: '/products',
        route: productRoutes

    },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
