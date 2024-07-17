import { Router } from 'express';
import { adminRoutes } from '../modules/admin/admin.routes';
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
    {
        path: '/admin',
        route: adminRoutes
    },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
