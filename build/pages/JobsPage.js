"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _jobs = require("../styled-components/pages/jobs");

var _subcomponents = require("../subcomponents");

var _colors = require("../styled-components/colors");

var _jobList = _interopRequireDefault(require("../data/jobList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Jobs = /*#__PURE__*/function (_Component) {
  _inherits(Jobs, _Component);

  var _super = _createSuper(Jobs);

  function Jobs() {
    var _this;

    _classCallCheck(this, Jobs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "scroll", function (id) {
      if (id == "home") {
        window.location.href = "/";
      } else {
        window.location.href = "/" + id;
      }
    });

    return _this;
  }

  _createClass(Jobs, [{
    key: "render",
    value: function render() {
      var id = this.props.data.id;
      var job = id ? _jobList["default"].find(function (a) {
        return a.id == id;
      }) : {};
      return /*#__PURE__*/_react["default"].createElement(_jobs.JobsWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Banner, {
        id: "jobs"
      }), /*#__PURE__*/_react["default"].createElement(_components.Header, {
        scroll: this.scroll
      }), /*#__PURE__*/_react["default"].createElement(_components.About, {
        id: "about"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/jobs"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, id ? "BACK TO JOBS PAGE" : "JOBS")), /*#__PURE__*/_react["default"].createElement("hr", null), id ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h4", null, job.title), /*#__PURE__*/_react["default"].createElement("p", null, job.description)) : /*#__PURE__*/_react["default"].createElement("div", null, _jobList["default"].length ? /*#__PURE__*/_react["default"].createElement("p", null, "These are our available jobs.") : /*#__PURE__*/_react["default"].createElement("p", null, "There are no available jobs currently."), _jobList["default"].map(function (job, i) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          key: i,
          href: "/jobs/".concat(job.id)
        }, /*#__PURE__*/_react["default"].createElement("h4", null, job.title));
      })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("p", null, "For any ", _jobList["default"].length ? "" : "other ", "job inquiries, please submit your resume at ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "mailto:cafejuniperslc@gmail.com"
      }, "cafejuniperslc@gmail.com"))), /*#__PURE__*/_react["default"].createElement(_components.Parallax, {
        url: "/images/grub.jpg"
      }), /*#__PURE__*/_react["default"].createElement(_components.Message, {
        id: "contact"
      }), /*#__PURE__*/_react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Jobs;
}(_react.Component);

var _default = Jobs;
exports["default"] = _default;