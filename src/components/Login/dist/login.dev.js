"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var login = function login(props) {};

var mapStateToProps = function mapStateToProps(_ref) {
  var users = _ref.users;
  return {
    name: Object.keys(users)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(login);

exports["default"] = _default;