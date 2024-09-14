import { Router } from "express";
import { userLoginHandler } from "../controllers/user.controllers";

const routes = Router();

routes.route("/login").get(userLoginHandler);

routes.route("/profile").get((req, res) => {
  const user: any = req.user;
  console.log(user);
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated() || !user) {
    return res.status(401).json({
      message: "Unauthorized",
      session: null,
    });
  }
  return res.status(200).json({
    message: "User profile",
    session: {
      id: user.id,
      email: user.emails[0].value,
      name: user.displayName,
      avatar: user.photos[0].value,
    },
  });
});
export default routes;
