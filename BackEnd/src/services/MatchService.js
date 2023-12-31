
let UserQueue = []
let UserAlreadyMatch = []

let AddUserWantToMatch = (user) => {
    for (let i = 0; i < UserQueue.length; i++) {
        if (UserQueue[i].myInfo.username === user.myInfo.username && UserQueue[i].myInfo.idWebRTC != user.myInfo.idWebRTC) {
            UserQueue.splice(i, 1)
            break;
        }

        if (UserQueue[i].myInfo.username === user.myInfo.username && UserQueue[i].myInfo.idWebRTC === user.myInfo.idWebRTC)
            return;

    }

    for (let i = 0; i < UserAlreadyMatch.length; i++) {
        if (UserAlreadyMatch[i].hasOwnProperty(user.myInfo.username))
            return;
    }

    // const check1 = UserQueue.find((element) => { element.myInfo.username === user.username })
    // const check2 = UserAlreadyMatch.find((element) => { element.username === user.username })

    // if (!check1 && !check2)
    UserQueue.push(user)
    console.log(UserQueue)
}

let ChoosePairUserMatch = () => {
    while (UserQueue.length >= 2) {
        let user0 = UserQueue[0];
        let userMatch = UserQueue[1];
        let scoreMax = 0, indexUserMatch = 1;
        for (let i = 1; i < UserQueue.length; i++) {
            let score = 0; // điểm match giữa 2 người
            let userI = UserQueue[i];
            //----Birthday-----
            let filterBirthday0 = user0.infoFilter.birthday.split('-')
            let filterBirthdayI = userI.infoFilter.birthday.split('-')
            let birthday0 = user0.myInfo.birthday.split('-')[0] // lấy năm sinh
            let birthdayI = userI.myInfo.birthday.split('-')[0] // lấy năm sinh
            if (filterBirthday0[0] === 'all' || filterBirthday0[0] <= birthdayI && filterBirthday0[1] >= birthdayI)
                score++;
            if (filterBirthdayI[0] === 'all' || filterBirthdayI[0] <= birthday0 && filterBirthdayI[1] >= birthday0)
                score++;

            //----Gender-----
            if (user0.infoFilter.gender === 'all' || user0.myInfo.gender == userI.infoFilter.gender)
                score++;
            if (userI.infoFilter.gender === 'all' || userI.myInfo.gender == user0.infoFilter.gender)
                score++;

            if (scoreMax <= score) {
                scoreMax = score;
                userMatch = userI;
                indexUserMatch = i;
            }
        }

        UserAlreadyMatch.push({
            [user0.myInfo.username]: userMatch.myInfo.idWebRTC,
            [userMatch.myInfo.username]: user0.myInfo.idWebRTC
        })

        UserQueue.splice(indexUserMatch, 1)
        UserQueue.splice(0, 1)
    }
    console.log("run")
    console.log("UserMatch", UserQueue)
    console.log("UserAlreadyMatch", UserAlreadyMatch)
    console.log("----------------------------")

}

let checkMyMatch = (username) => {
    for (let i = 0; i < UserAlreadyMatch.length; i++) {
        if (UserAlreadyMatch[i].hasOwnProperty(username)) {
            let u = UserAlreadyMatch.splice(i, 1);
            return u[0][username];
        }
    }
    return "";
}

module.exports = {
    AddUserWantToMatch: AddUserWantToMatch,
    ChoosePairUserMatch: ChoosePairUserMatch,
    checkMyMatch: checkMyMatch

}