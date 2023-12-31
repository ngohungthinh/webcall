"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserQueue = [];
var UserAlreadyMatch = [];
var AddUserWantToMatch = function AddUserWantToMatch(user) {
  for (var i = 0; i < UserQueue.length; i++) {
    if (UserQueue[i].myInfo.username === user.myInfo.username && UserQueue[i].myInfo.idWebRTC != user.myInfo.idWebRTC) {
      UserQueue.splice(i, 1);
      break;
    }
    if (UserQueue[i].myInfo.username === user.myInfo.username && UserQueue[i].myInfo.idWebRTC === user.myInfo.idWebRTC) return;
  }
  for (var _i = 0; _i < UserAlreadyMatch.length; _i++) {
    if (UserAlreadyMatch[_i].hasOwnProperty(user.myInfo.username)) return;
  }

  // const check1 = UserQueue.find((element) => { element.myInfo.username === user.username })
  // const check2 = UserAlreadyMatch.find((element) => { element.username === user.username })

  // if (!check1 && !check2)
  UserQueue.push(user);
  console.log(UserQueue);
};
var ChoosePairUserMatch = function ChoosePairUserMatch() {
  while (UserQueue.length >= 2) {
    var user0 = UserQueue[0];
    var userMatch = UserQueue[1];
    var scoreMax = 0,
      indexUserMatch = 1;
    for (var i = 1; i < UserQueue.length; i++) {
      var score = 0; // điểm match giữa 2 người
      var userI = UserQueue[i];
      //----Birthday-----
      var filterBirthday0 = user0.infoFilter.birthday.split('-');
      var filterBirthdayI = userI.infoFilter.birthday.split('-');
      var birthday0 = user0.myInfo.birthday.split('-')[0]; // lấy năm sinh
      var birthdayI = userI.myInfo.birthday.split('-')[0]; // lấy năm sinh
      if (filterBirthday0[0] === 'all' || filterBirthday0[0] <= birthdayI && filterBirthday0[1] >= birthdayI) score++;
      if (filterBirthdayI[0] === 'all' || filterBirthdayI[0] <= birthday0 && filterBirthdayI[1] >= birthday0) score++;

      //----Gender-----
      if (user0.infoFilter.gender === 'all' || user0.myInfo.gender == userI.infoFilter.gender) score++;
      if (userI.infoFilter.gender === 'all' || userI.myInfo.gender == user0.infoFilter.gender) score++;
      if (scoreMax <= score) {
        scoreMax = score;
        userMatch = userI;
        indexUserMatch = i;
      }
    }
    UserAlreadyMatch.push(_defineProperty(_defineProperty({}, user0.myInfo.username, userMatch.myInfo.idWebRTC), userMatch.myInfo.username, user0.myInfo.idWebRTC));
    UserQueue.splice(indexUserMatch, 1);
    UserQueue.splice(0, 1);
  }
  console.log("run");
  console.log("UserMatch", UserQueue);
  console.log("UserAlreadyMatch", UserAlreadyMatch);
  console.log("----------------------------");
};
var checkMyMatch = function checkMyMatch(username) {
  for (var i = 0; i < UserAlreadyMatch.length; i++) {
    if (UserAlreadyMatch[i].hasOwnProperty(username)) {
      var u = UserAlreadyMatch.splice(i, 1);
      return u[0][username];
    }
  }
  return "";
};
module.exports = {
  AddUserWantToMatch: AddUserWantToMatch,
  ChoosePairUserMatch: ChoosePairUserMatch,
  checkMyMatch: checkMyMatch
};