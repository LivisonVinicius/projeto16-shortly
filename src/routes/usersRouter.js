import { Router } from "express";
import {getUserMe} from '../controllers/usersController.js';
import { userMeMiddlewareValidation } from '../middlewares/usersMiddlewares.js';

const usersRouter = Router()
usersRouter.get("/users/me", userMeMiddlewareValidation, getUserMe);

export default usersRouter;