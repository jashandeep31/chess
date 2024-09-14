import { Router } from "express";

import passport from "passport";
const routes = Router();
routes.route("/google/callback").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: "http://localhost:5173/",
    successRedirect: "http://localhost:5173/",
  })
);

export default routes;
