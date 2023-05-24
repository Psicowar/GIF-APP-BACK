import { IGiph } from "../models/GiphModel";
import { GiphModel } from "./schemas/GiphSchema";

export const GiphRepository = {
    save: async (giph: IGiph) => {
        try {
            const giphSaved = await GiphModel.create(giph);
            return giphSaved
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },

    getAll: async () => {
        const giphs = await GiphModel.find({})
        return giphs
    }
}