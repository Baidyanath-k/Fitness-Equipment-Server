import express from 'express';
import { adminController } from './admin.controller';

const router = express.Router();

router.get(
    '/get-all-admin',
    adminController.getAllAdminCont,
);

router.get(
    '/get-single-admin/:adminId',
    adminController.getSingleAdminCont,
);

router.delete(
    '/delete-admin/:adminId',
    adminController.deleteAdminCont,
);

export const adminRoutes = router;