"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _subcomponents = require("../subcomponents");

var _ = require("./");

var _cateringmenu = require("../styled-components/components/cateringmenu");

var _colors = require("../styled-components/colors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CateringMenuComponent = /*#__PURE__*/function (_Component) {
  _inherits(CateringMenuComponent, _Component);

  var _super = _createSuper(CateringMenuComponent);

  function CateringMenuComponent() {
    _classCallCheck(this, CateringMenuComponent);

    return _super.apply(this, arguments);
  }

  _createClass(CateringMenuComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_.Menu, {
        id: this.props.id,
        style: {
          flexDirection: "column"
        }
      }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Menu"), /*#__PURE__*/_react["default"].createElement("th", null, "16", /*#__PURE__*/_react["default"].createElement("sup", null, "oz")), /*#__PURE__*/_react["default"].createElement("th", null, "32", /*#__PURE__*/_react["default"].createElement("sup", null, "oz")), /*#__PURE__*/_react["default"].createElement("th", null, "64", /*#__PURE__*/_react["default"].createElement("sup", null, "oz")), /*#__PURE__*/_react["default"].createElement("th", null, "128", /*#__PURE__*/_react["default"].createElement("sup", null, "oz"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "House Coffee"), /*#__PURE__*/_react["default"].createElement("td", null, "$6.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$11.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$20.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$38.00")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Single Origin"), /*#__PURE__*/_react["default"].createElement("td", null, "$6.50"), /*#__PURE__*/_react["default"].createElement("td", null, "$12.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$22.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$40.00")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Cold Brew"), /*#__PURE__*/_react["default"].createElement("td", null, "$7.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$13.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$24.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$45.00")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Tea"), /*#__PURE__*/_react["default"].createElement("td", null, "$6.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$11.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$20.00"), /*#__PURE__*/_react["default"].createElement("td", null, "$38.00")), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Volume Discounts"), /*#__PURE__*/_react["default"].createElement("th", null, "% Off"), /*#__PURE__*/_react["default"].createElement("th", null)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "2 Products"), /*#__PURE__*/_react["default"].createElement("td", null, "5%"), /*#__PURE__*/_react["default"].createElement("td", null)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "5 Products"), /*#__PURE__*/_react["default"].createElement("td", null, "10%"), /*#__PURE__*/_react["default"].createElement("td", null)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "10 Products"), /*#__PURE__*/_react["default"].createElement("td", null, "20%"), /*#__PURE__*/_react["default"].createElement("td", null)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Annual Commitment"), /*#__PURE__*/_react["default"].createElement("td", null, "20%"), /*#__PURE__*/_react["default"].createElement("td", null))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          margin: "auto",
          fontSize: "80%"
        }
      }, "**Volume discounts only apply to subscriptions. One time orders will not be included."));
    }
  }]);

  return CateringMenuComponent;
}(_react.Component);

var _default = CateringMenuComponent;
exports["default"] = _default;