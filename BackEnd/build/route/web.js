"use strict";

var _express = _interopRequireDefault(require("express"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _MatchController = _interopRequireDefault(require("../controllers/MatchController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get('/', _homeController["default"].getHomePage);
  router.get('/about', _homeController["default"].getAbout);
  //-------
  router.post('/postUser', _homeController["default"].postUser);
  router.get('/getOneUser', _homeController["default"].getOneUser);
  //-----

  router.post('/api/login', _userController["default"].handleLogin);
  router.post('/api/register', _userController["default"].handleRegister);
  router.post('/api/match', _MatchController["default"].handleMatch);
  router.post('/api/checkmatch', _MatchController["default"].handleCheckMatch);
  return app.use("/", router);
};
module.exports = initWebRoutes;