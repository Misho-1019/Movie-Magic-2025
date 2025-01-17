import { Router } from "express";
import homeController from "./controllers/home-controller.js";

const routes = routes();

routes.use(homeController)

app.all('*', (req, res) => {
    res.render('404')
})

export default routes;