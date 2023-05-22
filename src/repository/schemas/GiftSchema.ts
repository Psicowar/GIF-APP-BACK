import { Schema, model } from "mongoose";

const GiftSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        gift: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const UserModel = model("Gift", GiftSchema);
