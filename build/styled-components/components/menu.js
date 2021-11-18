"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuRight = exports.MenuLeft = exports.Menu = exports.MenuWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-image: url(/images/grub.jpg);\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n\n  h2 {\n    color: ", ";\n  }\n"])), _colors.darkblue);

exports.MenuWrap = MenuWrap;

var Menu = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background: #ffffff69;\n  color: ", ";\n  padding: 32px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  max-width: 762px;\n  margin: auto;\n  table {\n    margin: auto;\n  }\n  tr th:first-child {\n    text-align: left;\n    padding: 0;\n    width: 170px;\n\n  }\n  tr td:first-child {\n    text-align: left;\n    padding: 0;\n  }\n  th {\n    text-align: right;\n    color: ", ";\n    padding: 0 4px;\n    min-width: 30px;\n  }\n  td {\n    text-align: right;\n    color: ", ";\n    padding: 0 4px;\n  }\n  sup {\n    font-size: 12px;\n  }\n  @media (min-width: 700px){\n    .mobile-menu-header {\n      display: none;\n    }\n    tr th:last-child {\n      padding-right: 0;\n    }\n    tr td:last-child {\n      padding-right: 0;\n    }\n    tr th:first-child {\n      text-align: left;\n      padding-left: 0;\n      width: 172px;\n    }\n    th, td {\n      font-size: 18px;\n      padding: 0 12px;\n    }\n  }\n  @media (min-width: 800px){\n    th, td {\n      font-size: 28px;\n    }\n  }\n"])), _colors.green, _colors.darkblue, _colors.green);

exports.Menu = Menu;

var MenuLeft = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 700px){\n      width: 60%;\n      table {\n        margin: 12px 24px;\n      }\n  }\n"])));

exports.MenuLeft = MenuLeft;

var MenuRight = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 24px;\n\n  @media (min-width: 700px){\n    margin-top: 0;\n    width: 40%;\n    table {\n      margin: 12px 24px;\n    }\n  }\n"])));

exports.MenuRight = MenuRight;