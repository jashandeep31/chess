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

routes.route("/logout").get((req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173/");
  });
});

export default routes;
