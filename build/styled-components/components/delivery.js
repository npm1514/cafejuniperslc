"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delivery = exports.OrderID = exports.DeliveryWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 64px);\n  background-color: ", ";\n  color: #fff;\n  padding: 32px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  max-width: 736px;\n  margin: auto;\n  hr {\n    width: 100%;\n  }\n  p {\n    margin-top: 0;\n  }\n  /* .ddButton {\n    position: relative;\n    width: 289px;\n    height: 59px;\n    margin: 0px auto;\n    background-image: url(\"https://cdn.doordash.com/media/button/button_red_l.svg\");\n    color: transparent;\n  } */\n  .orderTitle {\n    font-size: 32px;\n    padding: 12px;\n    border-top: 1px solid #fff;\n    width: 100%;\n    border-bottom: 1px solid #fff;\n    text-align: center;\n    margin: 0;\n  }\n  .ddButton, .ghButton, .ueButton, .pmButton {\n    margin: 6px;\n  }\n  .ddButton:hover, .ghButton:hover, .ueButton:hover, .pmButton:hover {\n    opacity: 0.7;\n    transition: opacity 0.5s;\n  }\n  svg {\n    .st0{\n      fill:#5A5A5A;\n    }\n    .st1{\n      fill:#228800;\n    }\n  }\n  @media (min-width: 700px) {\n    overflow: visible;\n    .orderTitle {\n      font-size: 48px;\n    }\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeliveryWrap = _styledComponents["default"].div(_templateObject(), _colors.brown);

exports.DeliveryWrap = DeliveryWrap;

var OrderID = _styledComponents["default"].div(_templateObject2());

exports.OrderID = OrderID;

var Delivery = _styledComponents["default"].div(_templateObject3(), _colors.brown);

exports.Delivery = Delivery;