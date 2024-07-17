import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { ProductService } from "./product.service";

const createProductCont = catchAsync(async (req, res) => {
    const result = await ProductService.createProductIntoDB(req.body);
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Product create successfully',
        data: result,
    });
});

const findAllProductsCont = catchAsync(async (req, res) => {
    const result = await ProductService.findAllProductsFormDB(req.query);
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'All Products get successfully',
        data: result,
    });
});

const findSingleProductCont = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.findSingleProductFormDB(id);
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Single Product get successfully',
        data: result,
    });
});


const updateProductCont = catchAsync(async (req, res) => {
    const { id } = req.params;

    const result = await ProductService.updateProductIntoDB(id, req.body);
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Product update successfully',
        data: result,
    });
});


const deleteProductCont = catchAsync(async (req, res) => {
    const { id } = req.params;

    const result = await ProductService.deleteProductIntoDB(id);
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Product delete successfully',
        data: {},
    });
});


export const ProductController = {
    createProductCont,
    findAllProductsCont,
    findSingleProductCont,
    updateProductCont,
    deleteProductCont
}