"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.HeaderWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 732px;\n  margin: auto;\n  background-color: ", ";\n  height: 40px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  a {\n    display: block;\n    /* width: 20%; */\n    text-decoration: none;\n    text-align: center;\n    font-size: 24px;\n    color: ", ";\n    /* margin: 0 12px; */\n  }\n  .online-order {\n    color: ", "\n  }\n  a:hover {\n    color: ", ";\n  }\n"]);

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

var HeaderWrap = _styledComponents["default"].div(_templateObject(), _colors.darkblue);

exports.HeaderWrap = HeaderWrap;

var Header = _styledComponents["default"].header(_templateObject2(), _colors.darkblue, _colors.white, _colors.white, _colors.pink, _colors.lightblue);

exports.Header = Header;