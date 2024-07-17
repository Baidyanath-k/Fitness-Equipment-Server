export interface TUser {
    id: string;
    password: string;
    needsPasswordChange: boolean;
    passwordChangeAt?: Date;
    role: 'admin' | 'customer';
    isDeleted: false;
};