"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delivery = exports.DeliveryWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: #fff;\n  padding: 32px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  max-width: 736px;\n  margin: auto;\n  .ddButton {\n    position: relative;\n    width: 289px;\n    height: 59px;\n    margin: 0px auto;\n    background-image: url(\"https://cdn.doordash.com/media/button/button_red_l.svg\");\n    color: transparent;\n  }\n  .ddButton:hover {\n    opacity: 0.8;\n    transition: opacity 0.5s;\n  }\n  .ghButton:hover {\n    opacity: 0.8;\n    transition: opacity 0.5s;\n  }\n  @media (min-width: 700px) {\n    overflow: visible;\n  }\n"]);

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

var DeliveryWrap = _styledComponents["default"].div(_templateObject(), _colors.brown);

exports.DeliveryWrap = DeliveryWrap;

var Delivery = _styledComponents["default"].div(_templateObject2(), _colors.brown);

exports.Delivery = Delivery;