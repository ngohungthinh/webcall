import MatchService from "../services/MatchService";

let handleMatch = async (req, res) => {
    console.log(req.body)
    MatchService.AddUserWantToMatch(req.body)
}

let handleCheckMatch = async (req, res) => {
    console.log("checkMatch", req.body.username)
    let data = await MatchService.checkMyMatch(req.body.username)
    return res.status(200).json({
        data: data
    })
}

module.exports = {
    handleMatch: handleMatch,
    handleCheckMatch: handleCheckMatch,
}