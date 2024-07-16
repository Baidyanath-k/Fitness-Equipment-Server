import express from 'express';
import requestValidate from '../../utils/requestValidate';
import { ProductController } from './product.controller';
import { productValidation } from './products.validation';

const router = express.Router();


router.post(
    '/create-product',
    requestValidate(productValidation.createProductValidationSchema),
    ProductController.createProductCont
);


export const productRoutes = router;