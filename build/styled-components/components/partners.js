"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartnerList = exports.Partners = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Partners = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 732px;\n  margin: auto;\n  h2, p {\n    text-align: center;\n    color: ", ";\n  }\n"])), _colors.darkblue);

exports.Partners = Partners;

var PartnerList = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 32px;\n  width: calc(100% - 64px);\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  img {\n    max-width: 150px;\n    margin: 16px 24px;\n  }\n"])));

exports.PartnerList = PartnerList;