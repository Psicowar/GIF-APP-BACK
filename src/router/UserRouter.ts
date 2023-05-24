import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { tokenChecker } from "../middlewares/tokenChecker";

export const UserRouter = Router();

UserRouter
    .post("/register", UserController.register)
    .post("/authenticate", UserController.authenticate)
    .post("/userData", tokenChecker, UserController.getUserData)
    