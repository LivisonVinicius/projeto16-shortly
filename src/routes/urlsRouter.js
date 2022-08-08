import {Router} from 'express';
import {postShorten, getUrlId, openShortUrl, deleteUrlId} from '../controllers/urlsControllers.js';
import {postShortenMiddlewareValidation, urlIdMiddlewareValidation, shortUrlMiddlewareValidation, deleteUrlIdMiddlewareValidation } from '../middlewares/urlsMiddlewares.js';

const urlsRouter = Router();
urlsRouter.get("/urls/:id", urlIdMiddlewareValidation, getUrlId);
urlsRouter.get("/urls/open/:shortUrl", shortUrlMiddlewareValidation, openShortUrl);
urlsRouter.post("/urls/shorten",postShortenMiddlewareValidation, postShorten);
urlsRouter.delete("/urls/:id", deleteUrlIdMiddlewareValidation, deleteUrlId);

export default urlsRouter;