"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DateTimePickerDate = _interopRequireDefault(require("./DateTimePickerDate.js"));

var _DateTimePickerTime = _interopRequireDefault(require("./DateTimePickerTime.js"));

var _Constants = _interopRequireDefault(require("./Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var DateTimePicker = /*#__PURE__*/function (_Component) {
  _inherits(DateTimePicker, _Component);

  var _super = _createSuper(DateTimePicker);

  function DateTimePicker() {
    var _this;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderDatePicker", function () {
      if (_this.props.showDatePicker) {
        return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_DateTimePickerDate["default"], {
          addDecade: _this.props.addDecade,
          addMonth: _this.props.addMonth,
          addYear: _this.props.addYear,
          daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
          maxDate: _this.props.maxDate,
          minDate: _this.props.minDate,
          selectedDate: _this.props.selectedDate,
          setSelectedDate: _this.props.setSelectedDate,
          setViewMonth: _this.props.setViewMonth,
          setViewYear: _this.props.setViewYear,
          showToday: _this.props.showToday,
          subtractDecade: _this.props.subtractDecade,
          subtractMonth: _this.props.subtractMonth,
          subtractYear: _this.props.subtractYear,
          viewDate: _this.props.viewDate,
          viewMode: _this.props.viewMode
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderTimePicker", function () {
      if (_this.props.showTimePicker) {
        return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_DateTimePickerTime["default"], {
          addHour: _this.props.addHour,
          addMinute: _this.props.addMinute,
          mode: _this.props.mode,
          selectedDate: _this.props.selectedDate,
          setSelectedHour: _this.props.setSelectedHour,
          setSelectedMinute: _this.props.setSelectedMinute,
          subtractHour: _this.props.subtractHour,
          subtractMinute: _this.props.subtractMinute,
          togglePeriod: _this.props.togglePeriod,
          viewDate: _this.props.viewDate
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderSwitchButton", function () {
      return _this.props.mode === _Constants["default"].MODE_DATETIME ? /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "btn picker-switch",
        onClick: _this.props.togglePicker,
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("glyphicon", _this.props.showTimePicker ? "glyphicon-calendar" : "glyphicon-time")
      }))) : null;
    });

    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(this.props.widgetClasses),
        style: this.props.widgetStyle
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "list-unstyled"
      }, this.renderDatePicker(), this.renderSwitchButton(), this.renderTimePicker()));
    }
  }]);

  return DateTimePicker;
}(_react.Component);

exports["default"] = DateTimePicker;

_defineProperty(DateTimePicker, "propTypes", {
  showDatePicker: _propTypes["default"].bool,
  showTimePicker: _propTypes["default"].bool,
  subtractMonth: _propTypes["default"].func.isRequired,
  addMonth: _propTypes["default"].func.isRequired,
  viewDate: _propTypes["default"].object.isRequired,
  selectedDate: _propTypes["default"].object.isRequired,
  showToday: _propTypes["default"].bool,
  viewMode: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  mode: _propTypes["default"].oneOf([_Constants["default"].MODE_DATE, _Constants["default"].MODE_DATETIME, _Constants["default"].MODE_TIME]),
  daysOfWeekDisabled: _propTypes["default"].array,
  setSelectedDate: _propTypes["default"].func.isRequired,
  subtractYear: _propTypes["default"].func.isRequired,
  addYear: _propTypes["default"].func.isRequired,
  setViewMonth: _propTypes["default"].func.isRequired,
  setViewYear: _propTypes["default"].func.isRequired,
  subtractHour: _propTypes["default"].func.isRequired,
  addHour: _propTypes["default"].func.isRequired,
  subtractMinute: _propTypes["default"].func.isRequired,
  addMinute: _propTypes["default"].func.isRequired,
  addDecade: _propTypes["default"].func.isRequired,
  subtractDecade: _propTypes["default"].func.isRequired,
  togglePeriod: _propTypes["default"].func.isRequired,
  minDate: _propTypes["default"].object,
  maxDate: _propTypes["default"].object,
  widgetClasses: _propTypes["default"].object,
  widgetStyle: _propTypes["default"].object,
  togglePicker: _propTypes["default"].func,
  setSelectedHour: _propTypes["default"].func,
  setSelectedMinute: _propTypes["default"].func
});