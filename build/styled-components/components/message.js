"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = exports.Message = exports.MessageWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  height: 0;\n  padding: 0;\n  border: 0;\n  margin: auto;\n  background-color: ", ";\n  position: relative;\n  #airplane:hover {\n    fill: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  max-width: 800px;\n  margin: auto;\n  text-align: center;\n  h1 {\n    color: ", "\n  }\n  textarea, input {\n    font-family: diazo-mvb-ex-cond, sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 18px;\n    padding: 8px;\n  }\n  textarea {\n    height: 200px;\n    width: 80%;\n  }\n  input {\n    height: 50px;\n    width: 80%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  padding-bottom: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageWrap = _styledComponents["default"].div(_templateObject(), _colors.darkblue);

exports.MessageWrap = MessageWrap;

var Message = _styledComponents["default"].div(_templateObject2(), _colors.darkblue, _colors.white);

exports.Message = Message;

var TextBox = _styledComponents["default"].button(_templateObject3(), _colors.darkblue, _colors.darkblue);

exports.TextBox = TextBox;