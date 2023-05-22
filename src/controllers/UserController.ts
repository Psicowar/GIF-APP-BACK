import { Request, Response } from "express";
import { FormLogin, FormRegister } from "../config/entity/UserEntity";
import { IUserData, IUserLogin, IUserRegister } from "../models/UserModel";
import { tokenGenerator } from "../config/helpers/tokenGenerator";
import { UserRepository } from "../repository/UserRepository";
const bcrypt = require("bcrypt");


export const UserController = {

    async register(req: Request, res: Response) {
        const params: FormRegister = req.body;
        const { data } = params;
        await bcrypt.hash(data.password, 10, (error: string, hash: string) => {
            if (error) throw error;
            const user: IUserRegister = {
                name: data.name,
                last_name: data.lastName,
                email: data.email,
                password: hash,
                token: data.token,
            };
            const saveUser = UserRepository.save(user);
            saveUser.then((user) => {
                if (typeof user === "undefined")
                    return res.status(500).send();
                if (typeof user === "number")
                    return res.status(204).send();
                return res.status(201).send();
            });
        });
    },


    async authenticate(req: Request, res: Response) {
        const params: FormLogin = req.body;
        const { data } = params;
        const user: IUserLogin = {
            email: data.email,
            password: data.password,
            id: data.id,
        };
        const currentUser = await UserRepository.get(user.email);
        if (typeof currentUser === "undefined")
            return res.status(401).send();
        const token = await tokenGenerator(currentUser.id);
        await bcrypt.compare(
            data.password,
            currentUser?.password,
            (error: string, result: boolean) => {
                if (error) throw error;
                if (result) return res.status(201).send({ token, currentUser });
                if (!result) return res.status(401).send();
                return res.status(500).send();
            }
        );
    },

    async getUserData(req: Request, res: Response) {
        const user = res.locals.user;
        const { id } = user
        const currentUser = await UserRepository.getById(id);
        const userToSend: IUserData = {
            id: currentUser?.id,
            name: currentUser?.name,
            last_name: currentUser?.last_name,
            email: currentUser?.email,
        };
        if (userToSend) return res.status(200).send(userToSend);
        return res.status(500).send("Something went wrong");



    },
}