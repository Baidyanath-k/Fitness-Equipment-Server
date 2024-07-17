import mongoose from "mongoose";
import AppError from "../../appError/appError";
import { User } from "../users/user.model";
import { Admin } from "./admin.model";

const getAllAdminFormDB = async () => {
    const result = await Admin.find().populate('user');
    return result;
};

const getSingleAdminFormDB = async (id: string) => {
    const result = await Admin.findOne({ id });
    // console.log(result);
    return result;
};

const deleteAdminFromDB = async (id: string) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const deletedSAdmin = await Admin.findOneAndUpdate(
            { id },
            { isDeleted: true },
            { new: true, session },
        );

        if (!deletedSAdmin) {
            throw new AppError(400, 'Failed to deleted admin');
        }

        const deletedUser = await User.findOneAndUpdate(
            { id },
            { isDeleted: true },
            { new: true, session },
        );
        if (!deletedUser) {
            throw new AppError(400, 'Failed to deleted admin');
        }

        await session.commitTransaction();
        await session.endSession();
        return deletedSAdmin;
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw new AppError(400, 'Failed to deleted admin and error');
    }
};

export const adminService = {
    getAllAdminFormDB,
    getSingleAdminFormDB,
    deleteAdminFromDB,

}