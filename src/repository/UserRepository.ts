import { IUserRegister } from "../models/UserModel";
import { UserModel } from "./schemas/UserSchema";

export const UserRepository = {
    save: async (user: IUserRegister) => {
        try {
            const userExist = await UserModel.findOne({ email: user.email });
            if (!userExist) return await UserModel.create(user);
            return 0;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },

    get: async (email: String) => {
        try {
            const userFinded = await UserModel.findOne({ email });
            if (userFinded) return userFinded;
            else return undefined;
        } catch (err) {
            console.error(err);
            return undefined;
        }
    },

    getById: async (id: String) => {
        try {
            const userFinded = await UserModel.findOne({ _id: id });
            if (userFinded) return userFinded;
            else return undefined;
        } catch (err) {
            console.error(err);
            return undefined;
        }
    },
}