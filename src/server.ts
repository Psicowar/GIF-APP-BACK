import { NextFunction, Request, Response } from "express";
import { UserRouter } from "./router/UserRouter"
import CONFIGURATION from "./config/config";
import { GiphRouter } from "./router/GiphRouter";
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const { app: env_app } = CONFIGURATION;
export const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(cors({
    origin: [env_app.FRONT_URI],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))
app.use(morgan("dev"))
app.use(helmet())
app.use((request: Request, response: Response, next: NextFunction) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method"
    );
    next();
});
app.use("/users", UserRouter);
app.use("/giphs", GiphRouter);
