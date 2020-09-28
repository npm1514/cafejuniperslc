"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacer = exports.HexLock = exports.MobileMenu = exports.MobileHeader = exports.DesktopHeader = exports.HeaderWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 144px;\n  width: 100%;\n  background-color: ", ";\n  @media(min-width: 700px){\n    height: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: calc(40% - 24px);\n  margin: 12px;\n  height: 100%;\n  position: relative;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 732px;\n  margin: auto;\n  background-color: ", ";\n  height: 140px;\n  display: flex;\n  position: fixed;\n  top: 144px;\n  left: 0;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  z-index: 100;\n  div {\n    width: 50%;\n    text-align: center;\n    a {\n      text-decoration: none;\n      text-align: center;\n      font-size: 24px;\n      color: ", ";\n      margin: auto;\n    }\n  }\n  .online-order {\n    color: ", ";\n    width: 100%;\n    padding: 8px 0;\n    background-color: ", ";\n  }\n  a:hover {\n    color: ", ";\n  }\n  @media(min-width: 700px){\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 732px;\n  margin: auto;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 144px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 100;\n  img {\n    width: 170px;\n    margin: 24px;\n  }\n\n  @media (min-width: 700px){\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 732px;\n  margin: auto;\n  background-color: ", ";\n  height: 40px;\n  color: ", ";\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 100;\n  a {\n    text-decoration: none;\n    text-align: center;\n    font-size: 24px;\n    color: ", ";\n    margin: 0 12px;\n  }\n  .online-order {\n    color: ", "\n  }\n  a:hover {\n    color: ", ";\n  }\n  @media (min-width: 700px){\n    display: flex;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  position: ", ";\n  top: 0;\n  left: 0;\n  z-index: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrap = _styledComponents["default"].div(_templateObject(), _colors.darkblue, function (props) {
  return props.menuStuck ? 'fixed' : 'static';
});

exports.HeaderWrap = HeaderWrap;

var DesktopHeader = _styledComponents["default"].header(_templateObject2(), _colors.darkblue, _colors.white, _colors.white, _colors.pink, _colors.lightblue);

exports.DesktopHeader = DesktopHeader;

var MobileHeader = _styledComponents["default"].header(_templateObject3(), _colors.darkblue);

exports.MobileHeader = MobileHeader;

var MobileMenu = _styledComponents["default"].div(_templateObject4(), _colors.green, _colors.white, _colors.darkblue, _colors.pink, _colors.lightblue);

exports.MobileMenu = MobileMenu;

var HexLock = _styledComponents["default"].div(_templateObject5());

exports.HexLock = HexLock;

var Spacer = _styledComponents["default"].div(_templateObject6(), _colors.white, function (props) {
  return props.menuStuck ? '40px' : '0';
});

exports.Spacer = Spacer;