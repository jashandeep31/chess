import { Router } from "express";

const routes = Router();

routes.route("/new").post((req, res) => {
  res.status(200).json({ message: "new game created" });
});

export default routes;
