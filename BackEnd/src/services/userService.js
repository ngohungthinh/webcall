import db from "../models"
let handleUserLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUsername(username)
            if (isExist) {
                resolve(userData)
            } else {
                userData.errCode = 1;
                userData.errMessage = `Your's Username jsn't exist in your system`
                resolve(userData)
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin
}