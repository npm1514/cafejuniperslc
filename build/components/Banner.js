"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _banner = require("../styled-components/components/banner");

var _subcomponents = require("../subcomponents");

var _colors = require("../styled-components/colors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BannerComponent = /*#__PURE__*/function (_Component) {
  _inherits(BannerComponent, _Component);

  var _super = _createSuper(BannerComponent);

  function BannerComponent() {
    _classCallCheck(this, BannerComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BannerComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          img = _this$props.img,
          children = _this$props.children;
      return /*#__PURE__*/_react["default"].createElement(_banner.BannerWrap, {
        id: id,
        img: img
      }, /*#__PURE__*/_react["default"].createElement(_banner.Banner, null, /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "desktop-hex",
        color: _colors.darkblue,
        top: -80,
        left: -60,
        size: 230
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "desktop-hex",
        color: _colors.green,
        top: 135,
        left: 80,
        size: 130
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "desktop-hex",
        color: _colors.pink,
        top: -25,
        right: 110,
        size: 100
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "desktop-hex",
        color: _colors.darkblue,
        top: -90,
        right: -100,
        size: 200
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "desktop-hex",
        color: _colors.brown,
        top: 120,
        right: -10,
        size: 160
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: "/"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/images/Cafe-Juniper_J_01.png",
        alt: "primary logo"
      })), /*#__PURE__*/_react["default"].createElement("div", null, "C", /*#__PURE__*/_react["default"].createElement("span", {
        className: "smallLetters"
      }, "A"), "F\xC9 JUN", /*#__PURE__*/_react["default"].createElement("span", {
        className: "smallLetters"
      }, "I"), "P", /*#__PURE__*/_react["default"].createElement("span", {
        className: "smallLetters"
      }, "E"), "R"), /*#__PURE__*/_react["default"].createElement("h1", {
        className: "bottomBanner"
      }, "Salt lake city's premier coffee shop")));
    }
  }]);

  return BannerComponent;
}(_react.Component);

var _default = BannerComponent;
exports["default"] = _default;