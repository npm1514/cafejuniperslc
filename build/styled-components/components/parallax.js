"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 400px;\n  background-image: url(", ");\n  background-attachment: fixed;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Parallax = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.url;
});

exports.Parallax = Parallax;