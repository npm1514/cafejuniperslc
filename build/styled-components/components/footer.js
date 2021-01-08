"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Sitemap = exports.FooterWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    line-height: 0.85;\n  }\n  i {\n    margin-left: 8px;\n  }\n  svg {\n    margin-left: 4px;\n  }\n  a {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin: 8px 0;\n  }\n\n  i:hover {\n    color: ", ";\n    transition: color 0.5s;\n  }\n  svg {\n    fill: ", ";\n  }\n  svg: hover {\n    fill: ", ";\n    transition: fill 0.5s;\n  }\n  @media (min-width: 700px){\n    flex-direction: row;\n    align-items: flex-start;\n    div {\n      margin: 0;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: max-content;\n  margin: auto;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    transition: color 0.5s;\n  }\n  &:visited {\n    color: ", ";\n  }\n  @media (min-width: 700px){\n    font-size: 14px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  background-color: ", ";\n  color: ", ";\n  padding: 16px;\n  text-align: center;\n  a:hover {\n    color: ", ";\n    transition: color 0.5s;\n  }\n  a:visited {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterWrap = _styledComponents["default"].footer(_templateObject(), _colors.darkblue, _colors.white, _colors.lightblue, _colors.white);

exports.FooterWrap = FooterWrap;

var Sitemap = _styledComponents["default"].div(_templateObject2(), _colors.white, _colors.lightblue, _colors.white);

exports.Sitemap = Sitemap;

var Footer = _styledComponents["default"].div(_templateObject3(), _colors.white, _colors.lightblue, _colors.white, _colors.lightblue);

exports.Footer = Footer;