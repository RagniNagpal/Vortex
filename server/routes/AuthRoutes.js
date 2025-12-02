import { Router } from "express";
import { signup, login } from "../controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

export default authRouter;
