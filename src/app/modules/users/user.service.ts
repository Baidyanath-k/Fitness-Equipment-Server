import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import AppError from "../../appError/appError";
import config from "../../config";
import { TAdmin } from "../admin/admin.interface";
import { Admin } from "../admin/admin.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generatedAdminId } from "./user.utils";

const createAdmin = async (password: string, payLoad: TAdmin) => {
    // create user->admin
    const userData: Partial<TUser> = {};

    // If password not given then set default password
    if (!password) {
        password = config.default_pass as string;
    } else {
        userData.password = password;
    }

    // set role = admin
    userData.role = 'admin';

    // transaction rollback start

    const session = await mongoose.startSession(); // create a session

    try {
        session.startTransaction(); // start session

        const userDataId = await generatedAdminId();

        if (!userDataId) {
            throw new AppError(400, 'Not found userData Id!');
        }
        userData.id = userDataId;

        // create a user(transaction-1)
        const createUser = await User.create([userData], { session });

        if (!createUser.length) {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create user');
        }
        payLoad.id = createUser[0].id;
        payLoad.user = createUser[0]._id;

        // create a admin(transaction-2)
        const createAdmin = await Admin.create([payLoad], { session });
        if (!createAdmin) {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create Admin');
        }

        await session.commitTransaction();
        await session.endSession();
        return createAdmin;
    } catch (error: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(error);
    }
};

export const userService = {
    createAdmin
};