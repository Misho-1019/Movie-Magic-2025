import { Router } from "express";
import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movieController.js";
import castController from "./controllers/cast-controller.js";

const routes = Router();

routes.use(homeController)
routes.use('/movies', movieController)
routes.use('/casts', castController)

routes.all('*', (req, res) => {
    res.render('404')
})

export default routes;