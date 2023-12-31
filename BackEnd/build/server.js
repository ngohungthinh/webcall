"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./route/web"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _cors = _interopRequireDefault(require("cors"));
var _MatchService = _interopRequireDefault(require("./services/MatchService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config(); // goi den ham config dotenv de co the dung dc process.env.PORT

var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: true
}));
//config app

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
(0, _viewEngine["default"])(app);
(0, _web["default"])(app);
(0, _connectDB["default"])();

// --------Match----------
setInterval(_MatchService["default"].ChoosePairUserMatch, 5000);
var port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, function () {
  //callback
  console.log("Backend Nodejs is running on the port: " + port);
});