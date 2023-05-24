import { Router } from "express";
import { GiphController } from "../controllers/GiphController";

export const GiphRouter = Router();

GiphRouter
    .get("/", GiphController.getAll)
    .post("/reload", GiphController.seedDB)
    .post("/upload", GiphController.saveUploadedGiph)
