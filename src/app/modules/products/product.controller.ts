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
})

export const ProductController = {
    createProductCont,
}