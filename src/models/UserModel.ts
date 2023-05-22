export interface IUserRegister {
    name: string;
    last_name: string;
    email: string;
    password: string;
    token: string;
}

export interface IUserLogin {
    email: string;
    password: string;
    id: string
}

export interface IUserData {
    id: string;
    name: string;
    last_name: string;
    email: string;
}