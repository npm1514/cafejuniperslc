"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuRight = exports.MenuLeft = exports.Menu = exports.MenuWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n      justify-content: flex-end;\n  @media(min-width: 700px){\n      width: 40%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  @media(min-width: 700px){\n      width: 60%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: ", ";\n  padding: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  max-width: 736px;\n  margin: auto;\n  tr th:first-child {\n    text-align: left;\n    padding-left: 0;\n  }\n  tr td:first-child {\n    text-align: left;\n    padding-left: 0;\n  }\n  tr th:last-child {\n    padding-right: 0;\n  }\n  tr td:last-child {\n    padding-right: 0;\n  }\n  th {\n    text-align: right;\n    color: ", ";\n    padding: 0 12px;\n    font-size: 32px;\n  }\n  td {\n    text-align: right;\n    color: ", ";\n    padding: 0 12px;\n    font-size: 32px;\n  }\n  sup {\n    font-size: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuWrap = _styledComponents["default"].div(_templateObject(), _colors.white);

exports.MenuWrap = MenuWrap;

var Menu = _styledComponents["default"].div(_templateObject2(), _colors.white, _colors.green, _colors.darkblue, _colors.green);

exports.Menu = Menu;

var MenuLeft = _styledComponents["default"].div(_templateObject3());

exports.MenuLeft = MenuLeft;

var MenuRight = _styledComponents["default"].div(_templateObject4());

exports.MenuRight = MenuRight;