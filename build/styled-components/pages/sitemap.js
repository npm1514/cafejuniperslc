"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SitemapContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  a {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  a:hover {\n    color: ", ";\n    transition: color 0.5s;\n  }\n  a:visited {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SitemapContent = _styledComponents["default"].div(_templateObject(), _colors.darkblue, _colors.lightblue, _colors.darkblue);

exports.SitemapContent = SitemapContent;