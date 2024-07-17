import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
    {
        id: {
            type: String,
            required: [true, 'ID Must be required'],
            unique: true,
        },
        password: {
            type: String,
            max: 20,
            select: 0,
        },
        needsPasswordChange: {
            type: Boolean,
            default: true,
        },
        passwordChangeAt: {
            type: Date,
        },
        role: {
            type: String,
            enum: {
                values: ['admin', 'customer'],
                message: '{VALUE} is not a valid user',
            },
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

export const User = model<TUser>('User', UserSchema);