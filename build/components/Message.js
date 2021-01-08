"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _message = require("../styled-components/components/message");

var _subcomponents = require("../subcomponents");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MessageComponent = /*#__PURE__*/function (_Component) {
  _inherits(MessageComponent, _Component);

  var _super = _createSuper(MessageComponent);

  function MessageComponent(props) {
    var _this;

    _classCallCheck(this, MessageComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitMessage", function (e) {
      e.preventDefault();
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_this.state)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        alert("An email has been submitted to the staff at Cafe Juniper. Someone will be in contact with you shortly.");

        _this.setState({
          name: "",
          email: "",
          message: ""
        });
      })["catch"](function (err) {
        alert("Something went wrong. Please contact Cafe Juniper directly via email or telephone. We are sorry for the inconvenience.");

        _this.setState({
          name: "",
          email: "",
          message: ""
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "change", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;

      _this.setState(obj);
    });

    _this.state = {
      name: "",
      email: "",
      message: ""
    };
    return _this;
  }

  _createClass(MessageComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          email = _this$state.email,
          message = _this$state.message;
      return /*#__PURE__*/_react["default"].createElement(_message.MessageWrap, null, /*#__PURE__*/_react["default"].createElement(_message.ContactID, {
        id: this.props.id
      }), /*#__PURE__*/_react["default"].createElement(_message.Message, null, /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        className: "mobile-hex",
        color: _colors.green,
        bottom: -83,
        left: -50,
        size: 100
      }), /*#__PURE__*/_react["default"].createElement("h2", null, "385-213-5061 | cafejuniperslc@gmail.com"), !this.props.noMessage && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Shoot us a message"), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.submitMessage
      }, /*#__PURE__*/_react["default"].createElement("input", {
        value: name,
        placeholder: "Name",
        type: "text",
        required: true,
        onChange: function onChange(e) {
          _this2.change(e, "name");
        },
        id: "name-input"
      }), /*#__PURE__*/_react["default"].createElement("input", {
        value: email,
        placeholder: "Email Address",
        type: "email",
        required: true,
        onChange: function onChange(e) {
          _this2.change(e, "email");
        },
        id: "email-input"
      }), /*#__PURE__*/_react["default"].createElement("textarea", {
        value: message,
        required: true,
        placeholder: "Talk to me!",
        onChange: function onChange(e) {
          _this2.change(e, "message");
        },
        id: "message-textarea"
      }), /*#__PURE__*/_react["default"].createElement(_message.TextBox, {
        type: "submit"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          color: 'transparent'
        }
      }, "Send Email Button"), /*#__PURE__*/_react["default"].createElement(_subcomponents.Hex, {
        color: _colors.lightblue,
        bottom: -11,
        right: -15,
        size: 75
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        id: "airplane",
        points: "20 40 75 30 50 80 42 60 62 40 40 56",
        fill: _colors.pink
      })))))));
    }
  }]);

  return MessageComponent;
}(_react.Component);

var _default = MessageComponent;
exports["default"] = _default;