import { Router } from "express";
import { userLoginHandler } from "../controllers/user.controllers";

const routes = Router();

routes.route("/login").get(userLoginHandler);
export default routes;
