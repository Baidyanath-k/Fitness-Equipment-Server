import { StatusCodes } from "http-status-codes";
import AppError from "../../appError/appError";
import { User } from "./user.model";

const findLastAdminId = async () => {
    const currentID = (0).toString();
    const lastAdmin = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();


    return lastAdmin?.id ? lastAdmin.id.substring(2) : currentID;
};

export const generatedAdminId = async () => {


    let adminId = await findLastAdminId();
    if (!adminId) {
        throw new AppError(StatusCodes.NOT_FOUND, "Last Admin Id is not found!")
    }

    if (adminId) {
        adminId = adminId.substring(2);
    }

    let incrementId = (Number(adminId) + 1).toString().padStart(4, '0');

    incrementId = `A-${incrementId}`;
    return incrementId;
};