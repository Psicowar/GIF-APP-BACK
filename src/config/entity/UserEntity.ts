export interface FormRegister {
    data: {
        name: string,
        lastName: string,
        username: string,
        email: string,
        password: string,
        token: string
    }
}

export interface FormLogin {
    data: {
        email: string,
        password: string,
        id: string
    }
}

