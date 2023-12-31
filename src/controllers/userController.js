import db from "../models/index";
// import bcrypt from 'bcryptjs'
// var salt = bcrypt.genSaltSync(10);

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let dataUser = await getUserInfoByUsername(username)

    console.log(dataUser.password)
    if (password === dataUser.password) {
        return res.status(200).json({
            data: dataUser
        })
    }
    else {
        return res.status(200).json({
            data: {}
        })
    }
}

let handleRegister = async (req, res) => {
    let username = req.body.username;

    let dataUser = await getUserInfoByUsername(username)

    if (Object.keys(dataUser).length === 0) {
        await createNewUser(req.body);
        return res.status(200).json({
            isRegister: true
        })
    }
    else {
        return res.status(200).json({
            isRegister: false
        })
    }
}

let getUserInfoByUsername = (Username) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(Username)
            let user = await db.User.findOne({
                where: { username: Username }
            })
            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                username: data.username,
                password: data.password,
                name: data.username,
                gender: data.gender,
                birthday: data.birthday,
                location: data.location,
                job: data.job,
                hobby: data.hobby,
                role: data.role,
            })

            resolve("Ok create a new success")
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
}













let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

let test = (req, res) => {
    let { email, password } = req.body;
    console.log(req.body);
    res.send("Ok")
}