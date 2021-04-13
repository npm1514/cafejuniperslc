"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.HomeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  color: rgb(252, 214, 215);\n  margin: 0;\n  background: #29292990;\n  padding: 12px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeWrapper = _styledComponents["default"].div(_templateObject());

exports.HomeWrapper = HomeWrapper;

var Toast = _styledComponents["default"].h2(_templateObject2());

exports.Toast = Toast;