import { Router } from 'express';
import { productRoutes } from '../modules/products/product.routes';
import { userRoutes } from '../modules/users/user.route';

const router = Router();


const moduleRoutes = [
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/users',
        route: userRoutes
    },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
