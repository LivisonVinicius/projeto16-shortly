import { Router } from "express";
import { signUp, signIn } from "../controllers/authControllers.js";
import {
  signUpMiddlewareValidation,
  signInMiddlewareValidation,
} from "../middlewares/authMiddlewares.js";

const authRouter = Router();
authRouter.post("/signup", signUpMiddlewareValidation, signUp);
authRouter.post("/signin", signInMiddlewareValidation, signIn);

export default authRouter;
