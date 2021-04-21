"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.JobsWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var JobsWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n  a {\n    color: #ffffff90;\n    transition: color 0.5s;\n  }\n  a:hover {\n    color: #fff;\n  }\n  h4 {\n    margin: 12px 0;\n  }\n  h2 {\n    opacity: 0.8;\n    transition: opacity 0.5s;\n  }\n  h2:hover {\n    opacity: 1;\n  }\n"])));

exports.JobsWrapper = JobsWrapper;

var Toast = _styledComponents["default"].h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: center;\n  color: rgb(252, 214, 215);\n  margin: 0;\n  background: #29292990;\n  padding: 12px 0;\n"])));

exports.Toast = Toast;