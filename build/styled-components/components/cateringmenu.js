"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuMarkup = exports.CateringMenuRight = exports.CateringMenuLeft = exports.CateringMenu = exports.CateringMenuWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: -4px 0 0 8px;\n  font-size: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 24px;\n  table {\n    margin: auto;\n  }\n  @media (min-width: 700px){\n    margin-top: 0;\n    width: 40%;\n    table {\n      margin: 12px 24px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  table {\n    margin: auto;\n  }\n  @media (min-width: 700px){\n      width: 60%;\n      table {\n        margin: 12px 24px;\n      }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: ", ";\n  padding: 32px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  max-width: 762px;\n  margin: auto;\n  tr th:first-child {\n    text-align: left;\n    padding: 0;\n    width: 170px;\n\n  }\n  tr td:first-child {\n    text-align: left;\n    padding: 0;\n  }\n  th {\n    text-align: right;\n    color: ", ";\n    padding: 0 4px;\n    min-width: 30px;\n  }\n  td {\n    text-align: right;\n    color: ", ";\n    padding: 0 4px;\n  }\n  sup {\n    font-size: 12px;\n  }\n  @media (min-width: 700px){\n    flex-direction: row;\n    .mobile-menu-header {\n      display: none;\n    }\n    tr th:last-child {\n      padding-right: 0;\n    }\n    tr td:last-child {\n      padding-right: 0;\n    }\n    tr th:first-child {\n      text-align: left;\n      padding-left: 0;\n      width: 172px;\n    }\n    th, td {\n      font-size: 18px;\n      padding: 0 12px;\n    }\n  }\n  @media (min-width: 800px){\n    th, td {\n      font-size: 28px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  h2 {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CateringMenuWrap = _styledComponents["default"].div(_templateObject(), _colors.white, _colors.darkblue);

exports.CateringMenuWrap = CateringMenuWrap;

var CateringMenu = _styledComponents["default"].div(_templateObject2(), _colors.white, _colors.green, _colors.darkblue, _colors.green);

exports.CateringMenu = CateringMenu;

var CateringMenuLeft = _styledComponents["default"].div(_templateObject3());

exports.CateringMenuLeft = CateringMenuLeft;

var CateringMenuRight = _styledComponents["default"].div(_templateObject4());

exports.CateringMenuRight = CateringMenuRight;

var MenuMarkup = _styledComponents["default"].div(_templateObject5(), _colors.darkblue);

exports.MenuMarkup = MenuMarkup;