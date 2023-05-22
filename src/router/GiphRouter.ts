import { Router } from "express";
import { GiphController } from "../controllers/GiphController";

export const GiphRouter = Router();

GiphRouter
    .post("/reload", GiphController.reload)
