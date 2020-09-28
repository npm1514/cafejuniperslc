"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptionRight = exports.DescriptionLeft = exports.Description = exports.DescriptionWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  h1 {\n    color: ", "\n  }\n  @media (min-width: 700px){\n      width: 70%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  img {\n    width: 150px;\n  }\n  @media (min-width: 700px){\n      width: 30%;\n      display: block;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  background-color: ", ";\n  color: ", ";\n  padding: 24px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  max-width: 736px;\n  margin: auto;\n  @media (min-width: 700px) {\n    overflow: visible;\n  }\n"]);

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

var DescriptionWrap = _styledComponents["default"].div(_templateObject(), _colors.brown);

exports.DescriptionWrap = DescriptionWrap;

var Description = _styledComponents["default"].div(_templateObject2(), _colors.brown, _colors.white);

exports.Description = Description;

var DescriptionLeft = _styledComponents["default"].div(_templateObject3());

exports.DescriptionLeft = DescriptionLeft;

var DescriptionRight = _styledComponents["default"].div(_templateObject4(), _colors.darkblue);

exports.DescriptionRight = DescriptionRight;