"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = exports.MapID = exports.MapWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  max-width: 800px;\n  margin: auto;\n  padding: 32px;\n  text-align: center;\n  position: relative;\n  background-color: ", ";\n  h2 {\n    text-align: center;\n    margin-top: 0;\n  }\n  h2:last-child {\n    margin-top: 24px;\n  }\n  .mobile-map {\n    display: inline\n  }\n  .desktop-map {\n    display: none;\n  }\n  @media (min-width: 700px){\n    .mobile-map {\n      display: none;\n    }\n    .desktop-map {\n      display: inline;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -159px;\n  @media(min-width: 700px){\n    top: -74px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MapWrap = _styledComponents["default"].div(_templateObject(), _colors.lightblue);

exports.MapWrap = MapWrap;

var MapID = _styledComponents["default"].div(_templateObject2());

exports.MapID = MapID;

var Map = _styledComponents["default"].div(_templateObject3(), _colors.lightblue);

exports.Map = Map;