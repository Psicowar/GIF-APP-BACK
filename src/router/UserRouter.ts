import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const UserRouter = Router();

UserRouter
    .post("/authenticate", UserController.authenticate)