"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = exports.HomeID = exports.BannerWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: none;\n  position: relative;\n  max-width: 800px;\n  margin: auto;\n  height: 300px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  img {\n    width: 130px;\n  }\n  div {\n    color: ", ";\n    font-size: 40px;\n    font-weight: 500;\n    letter-spacing: 1;\n    margin: 22px 0 0 0;\n    line-height: 0.5;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    .smallLetters {\n      font-size: 33px;\n    }\n  }\n  h1 {\n    font-size: 24px;\n    margin-top: 12px;\n    margin-bottom: 0;\n    display: block;\n    color: ", ";\n    font-weight: 500;\n    letter-spacing: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  @media (min-width: 700px){\n    display: flex;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  @media (min-width: 700px){\n    height: 300px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BannerWrap = _styledComponents["default"].div(_templateObject());

exports.BannerWrap = BannerWrap;

var HomeID = _styledComponents["default"].div(_templateObject2());

exports.HomeID = HomeID;

var Banner = _styledComponents["default"].div(_templateObject3(), _colors.brown, _colors.brown);

exports.Banner = Banner;