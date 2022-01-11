"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _subcomponents = require("../subcomponents");

var _ = require("./");

var _coffeemenu = require("../styled-components/components/coffeemenu");

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

var CoffeeMenuComponent = /*#__PURE__*/function (_Component) {
  _inherits(CoffeeMenuComponent, _Component);

  var _super = _createSuper(CoffeeMenuComponent);

  function CoffeeMenuComponent() {
    _classCallCheck(this, CoffeeMenuComponent);

    return _super.apply(this, arguments);
  }

  _createClass(CoffeeMenuComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_.Menu, {
        id: this.props.id
      }, /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.brown,
        top: -5,
        left: -125,
        size: 150
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.darkblue,
        top: 240,
        right: -60,
        size: 100
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.pink,
        top: 360,
        left: -25,
        size: 50
      }), /*#__PURE__*/_react["default"].createElement(_coffeemenu.CoffeeMenu, null, /*#__PURE__*/_react["default"].createElement("h2", null, "CAFE MENU"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "Drinks"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "All Sizes")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Espresso, Americano"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$3.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Cortado, Cappuccino"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$3.50")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Latte, Chai, Matcha"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$4.25")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Drip, Tea"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$3.25")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Pour Over"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$4.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Cold Brew"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$4.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Hot Cocoa"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$4.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "Alt. Milk"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "+$0.50")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "Syrups"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "+$0.50")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "Food"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null)), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Toast"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Starting at $3.50")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Hummus Toast"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$6.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Ricotta Toast"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$7.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Avocado Toast"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$7.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Mushroom Toast"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$8.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Rotating Soup"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$7.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "French Toast"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$10.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Sausage Farro Bowl"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$10.00")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null, "Snacks"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Head, null)), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Cookies"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$2.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Pastries"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$3.00")), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Row, null, /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "Scones"), /*#__PURE__*/_react["default"].createElement(_coffeemenu.Data, null, "$4.00"))));
    }
  }]);

  return CoffeeMenuComponent;
}(_react.Component);

var _default = CoffeeMenuComponent;
exports["default"] = _default;