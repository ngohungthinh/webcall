import bcrypt from 'bcryptjs'
import db from '../models';

var salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let hashPasswordFromBcrypt = await hashUserPassword(data.password)
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
        } catch {

        }
    })

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

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
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

module.exports = {
    createNewUser: createNewUser,
    getUserInfoById: getUserInfoById
}