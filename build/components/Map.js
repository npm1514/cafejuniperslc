"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _map = require("../styled-components/components/map");

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

var MapComponent = /*#__PURE__*/function (_Component) {
  _inherits(MapComponent, _Component);

  var _super = _createSuper(MapComponent);

  function MapComponent() {
    _classCallCheck(this, MapComponent);

    return _super.apply(this, arguments);
  }

  _createClass(MapComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_map.MapWrap, null, /*#__PURE__*/_react["default"].createElement(_map.MapID, {
        id: this.props.id
      }), /*#__PURE__*/_react["default"].createElement(_map.Map, null, /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "desktop-hex",
        color: _colors.green,
        top: -77,
        left: -67,
        size: 200
      }), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.pink,
        top: -77,
        left: -27,
        size: 75
      }), /*#__PURE__*/_react["default"].createElement("h2", null, "Come grab a cup of coffee at", /*#__PURE__*/_react["default"].createElement("br", null), "Church & State", /*#__PURE__*/_react["default"].createElement("br", null), "370 South 300 East", /*#__PURE__*/_react["default"].createElement("br", null), "Salt Lake City, Utah 84111"), /*#__PURE__*/_react["default"].createElement("iframe", {
        className: "desktop-map",
        src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.175795119414!2d-111.8827731!3d40.7610581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7583d4d0933696cf!2sChurch%20%26%20State!5e0!3m2!1sen!2sus!4v1657563144660!5m2!1sen!2sus",
        title: "map of location desktop",
        width: "600",
        height: "400",
        frameBorder: "0",
        style: {
          border: 0
        },
        allowFullScreen: "",
        "aria-hidden": "false",
        tabIndex: "0"
      }), /*#__PURE__*/_react["default"].createElement("iframe", {
        className: "mobile-map",
        src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.175795119414!2d-111.8827731!3d40.7610581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7583d4d0933696cf!2sChurch%20%26%20State!5e0!3m2!1sen!2sus!4v1657563144660!5m2!1sen!2sus",
        title: "map of location mobile",
        width: "320",
        height: "200",
        frameBorder: "0",
        style: {
          border: 0
        },
        allowFullScreen: "",
        "aria-hidden": "false",
        tabIndex: "0"
      }), /*#__PURE__*/_react["default"].createElement("h2", {
        style: {
          marginTop: "12px"
        }
      }, "Hours | 7am - 5pm")));
    }
  }]);

  return MapComponent;
}(_react.Component);

var _default = MapComponent;
exports["default"] = _default;