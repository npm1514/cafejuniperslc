"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  background-color: ", ";\n  color: ", ";\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  span {\n    line-height: 0.85;\n  }\n  i {\n    margin-left: 8px;\n  }\n  svg {\n    margin-left: 4px;\n  }\n  a {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  a:hover {\n    color: ", ";\n  }\n  a:visited {\n    color: ", ";\n  }\n  svg {\n    fill: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents["default"].footer(_templateObject(), _colors.darkblue, _colors.white, _colors.white, _colors.lightblue, _colors.white, _colors.white);

exports.Footer = Footer;