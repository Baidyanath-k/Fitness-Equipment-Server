import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";

const createAdminCont = catchAsync(async (req, res) => {
    const { password, admin: adminData } = req.body;

    const result = await userService.createAdmin(password, adminData);

    res.status(200).json({
        success: true,
        message: 'admin create successfully',
        data: result,
    });
});

export const userControllers = {
    createAdminCont
}