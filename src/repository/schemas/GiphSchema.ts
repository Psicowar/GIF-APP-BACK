import { Schema, model } from "mongoose";

const GiphSchema: Schema = new Schema(
    {   
        id: { type: String, required: true },
        title: { type: String, required: true },
        giph: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const GiphModel = model("Gift", GiphSchema);
