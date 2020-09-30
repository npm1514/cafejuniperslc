"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartnerList = exports.Partners = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin: 24px 0;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  img {\n    max-width: 150px;\n    margin: 16px 24px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 732px;\n  margin: auto;\n  h1, p {\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Partners = _styledComponents["default"].div(_templateObject(), _colors.lightblue);

exports.Partners = Partners;

var PartnerList = _styledComponents["default"].div(_templateObject2());

exports.PartnerList = PartnerList;