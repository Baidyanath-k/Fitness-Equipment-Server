import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { adminService } from "./admin.service";

const getAllAdminCont = catchAsync(async (req, res) => {
    const result = await adminService.getAllAdminFormDB();
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'All admin get successfully',
        data: result,
    });
});

const getSingleAdminCont = catchAsync(async (req, res) => {
    const { adminId } = req.params;
    const result = await adminService.getSingleAdminFormDB(adminId);
    res.status(200).json({
        success: true,
        message: 'single admin get successfully',
        data: result,
    });
});

const deleteAdminCont = catchAsync(async (req, res) => {
    const { adminId } = req.params;
    const result = await adminService.deleteAdminFromDB(adminId);
    res.status(200).json({
        success: true,
        message: 'Admin delete successfully',
        data: result,
    });
});


export const adminController = {
    getAllAdminCont,
    deleteAdminCont,
    getSingleAdminCont
}