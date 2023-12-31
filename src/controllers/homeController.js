import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    try {
        // Mỗi khi truy vấn đến DB nó đều ghi ra log console. 
        // Để tắt nó mình thêm attribute: logging: false 
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}
let getAbout = (req, res) => {
    return res.render('test/about.ejs');
}
//--------------------------------------

let postUser = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send("Post USER")
}

let getOneUser = async (req, res) => {
    console.log(req)
    return res.send("Get One USER")
    // let user = await CRUDService.getUserInfoById
}
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    postUser: postUser,
    getOneUser: getOneUser
}