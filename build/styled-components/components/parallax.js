"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Parallax = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 400px;\n  background-image: url(", ");\n  background-attachment: scroll;\n  background-position: center;\n  background-repeat: repeat;\n  background-size: cover;\n  &.mobile-parallax {\n    display: none;\n  }\n  @media(min-width: 700px){\n    &.mobile-parallax {\n      display: block;\n    }\n    background-attachment: fixed;\n  }\n  h2 {\n    margin: 0;\n    padding: 18px 0 0 0;\n    text-align: center;\n    background: #ffffff66;\n  }\n  iframe {\n    width: calc(100% - 48px);\n    margin: 48px 24px;\n    height: 352px;\n    border: 0;\n    border-radius: 2px;\n    .socialwall_header {\n      display: none;\n    }\n    .socialwall_container {\n      margin: 12px;\n    }\n  }\n"])), function (props) {
  return props.url;
});

exports.Parallax = Parallax;