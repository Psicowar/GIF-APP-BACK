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
    },

    findUserGifs: async (id: string) => {
        const gifs = await GiphModel.find({ id: id })
        if (gifs) return gifs
        return
    },

    deleteAll: async (id: string) => {
        const areDeleted = await GiphModel.deleteMany({ id });
        return areDeleted.acknowledged;
    },

    deleteOneGif: async (id: string) => {
        const areDeleted = await GiphModel.findByIdAndDelete({ _id: id })
        if (areDeleted) return

    },

    updateTitleGif: async (id: string, title: string) => {
        const titleGifUpdated = await GiphModel.findByIdAndUpdate({ _id: id }, { $set: { title: title } })        
        if (titleGifUpdated) return titleGifUpdated

    }
}