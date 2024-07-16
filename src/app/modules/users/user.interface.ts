export interface TUser {
    id: string;
    password: string;
    needsPasswordChange: boolean;
    passwordChangeAt?: Date;
    role: 'admin' | 'user';
    status: 'inprogress' | 'blocked';
    isDeleted: false;
};