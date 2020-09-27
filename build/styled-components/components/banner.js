"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = exports.BannerWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: none;\n  background-color: ", ";\n  position: relative;\n  max-width: 800px;\n  margin: auto;\n  height: 300px;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 200px;\n  }\n  @media (min-width: 700px){\n    display: flex;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  height: 0;\n  overflow: hidden;\n  @media (min-width: 700px){\n    height: 300px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BannerWrap = _styledComponents["default"].div(_templateObject(), _colors.white);

exports.BannerWrap = BannerWrap;

var Banner = _styledComponents["default"].div(_templateObject2(), _colors.white);

exports.Banner = Banner;