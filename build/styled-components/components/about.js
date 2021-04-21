"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutRight = exports.AboutLeft = exports.About = exports.AboutID = exports.AboutWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AboutWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  position: relative;\n"])), _colors.brown);

exports.AboutWrap = AboutWrap;

var AboutID = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -159px;\n  @media(min-width: 700px){\n    top: -74px;\n  }\n"])));

exports.AboutID = AboutID;

var About = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: #fff;\n  padding: 32px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  max-width: 736px;\n  margin: auto;\n  @media (min-width: 700px) {\n    overflow: visible;\n  }\n"])), _colors.brown);

exports.About = About;

var AboutLeft = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: none;\n  img {\n    width: 150px;\n  }\n  @media (min-width: 700px){\n      width: 30%;\n      display: block;\n  }\n"])));

exports.AboutLeft = AboutLeft;

var AboutRight = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  h2 {\n    color: ", "\n  }\n  @media (min-width: 700px){\n      width: 70%;\n  }\n"])), _colors.darkblue);

exports.AboutRight = AboutRight;