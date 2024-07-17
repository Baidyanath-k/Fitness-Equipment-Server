import express from "express";
import requestValidate from "../../utils/requestValidate";
import { adminZodValidation } from "../admin/admin.validation";
import { userControllers } from "./user.controller";


const router = express.Router();
router.post(
    '/create-admin',
    requestValidate(adminZodValidation.createAdminValidationSchema),
    userControllers.createAdminCont,
);



export const userRoutes = router;