"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = exports.MapWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  background-color: ", ";\n  h1 {\n    text-align: center;\n    margin-top: 0;\n  }\n  .mobile-map {\n    display: inline\n  }\n  .desktop-map {\n    display: none;\n  }\n  @media screen and (min-width: 700px){\n    .mobile-map {\n      display: none;\n    }\n    .desktop-map {\n      display: inline;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  padding: 24px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MapWrap = _styledComponents["default"].div(_templateObject(), _colors.lightblue);

exports.MapWrap = MapWrap;

var Map = _styledComponents["default"].div(_templateObject2(), _colors.lightblue);

exports.Map = Map;