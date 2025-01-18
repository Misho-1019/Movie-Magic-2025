import { Router } from "express";
import homeController from "./controllers/home-controller.js";
import movieController from "./controllers/movieController.js";

const routes = Router();

routes.use(homeController)
routes.use('/movies', movieController)

routes.all('*', (req, res) => {
    res.render('404')
})

export default routes;