import { Router } from "express";
import { GiphController } from "../controllers/GiphController";
import { tokenChecker } from "../middlewares/tokenChecker";

export const GiphRouter = Router();

GiphRouter
    .get("/", GiphController.getAll)
    .post("/reload", GiphController.seedDB)
    .post("/upload", GiphController.saveUploadedGiph)
    .get("/userGifs", tokenChecker, GiphController.getUserGifs)
    .delete("/deleteAllUserGifs", tokenChecker, GiphController.deleteAllUserGifs)
    .delete("/deleteOneUserGif/:id", tokenChecker, GiphController.deleteOneUserGif)
    .patch("/updateTitleUserGif", GiphController.updateTitleUserGif )
