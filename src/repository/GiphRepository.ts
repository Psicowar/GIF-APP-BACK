import { IGiph } from "../models/GiphModel";
import { GiphModel } from "./schemas/GiphSchema";

export const GiphRepository = {
    save: async (giph: IGiph) => {
        try {
            GiphModel.create(giph);
            return 0;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },
}