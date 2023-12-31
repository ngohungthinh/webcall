import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
require('dotenv').config() // goi den ham config dotenv de co the dung dc process.env.PORT
import connectDB from './config/connectDB'
import cors from 'cors'
import MatchService from "./services/MatchService"

let app = express();
app.use(cors({ origin: true }))
//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

connectDB();

// --------Match----------
setInterval(MatchService.ChoosePairUserMatch, 5000);

let port = process.env.PORT || 6969;
//Port === undefined => port = 6969




app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port)
})
