import express from "express"
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import MatchController from "../controllers/MatchController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAbout)
    //-------
    router.post('/postUser', homeController.postUser)
    router.get('/getOneUser', homeController.getOneUser)
    //-----


    router.post('/api/login', userController.handleLogin)
    router.post('/api/register', userController.handleRegister)
    router.post('/api/match', MatchController.handleMatch)
    router.post('/api/checkmatch', MatchController.handleCheckMatch)
    return app.use("/", router);
}

module.exports = initWebRoutes;