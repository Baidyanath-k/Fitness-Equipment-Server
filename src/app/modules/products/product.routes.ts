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

router.get(
    '/get-products',
    ProductController.findAllProductsCont
);

router.get(
    '/single-product/:id',
    ProductController.findSingleProductCont
);

router.patch(
    '/update-product/:id',
    requestValidate(productValidation.updateProductValidationSchema),
    ProductController.updateProductCont
);

router.delete(
    '/delete-product/:id',
    ProductController.deleteProductCont
)


export const productRoutes = router;