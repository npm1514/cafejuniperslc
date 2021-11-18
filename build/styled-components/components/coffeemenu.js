"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Data = exports.Head = exports.Row = exports.CoffeeMenu = exports.CoffeeMenuWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CoffeeMenuWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  h2 {\n    color: ", ";\n  }\n"])), _colors.darkblue);

exports.CoffeeMenuWrap = CoffeeMenuWrap;

var CoffeeMenu = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n  max-width: 600px;\n  margin: auto;\n  sup {\n    font-size: 12px;\n  }\n  h2 {\n    font-weight: 700;\n    font-size: 40px;\n    margin: 0 auto;\n    text-align: center;\n  }\n  @media (min-width: 700px){\n    .mobile-menu-header {\n      display: none;\n    }\n  }\n"])), _colors.green);

exports.CoffeeMenu = CoffeeMenu;

var Row = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"])));

exports.Row = Row;

var Head = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 32px;\n  color: ", ";\n"])), _colors.darkblue);

exports.Head = Head;

var Data = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 28px;\n"])), _colors.green);

exports.Data = Data;