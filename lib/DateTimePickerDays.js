"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var DateTimePickerDays = /*#__PURE__*/function (_Component) {
  _inherits(DateTimePickerDays, _Component);

  var _super = _createSuper(DateTimePickerDays);

  function DateTimePickerDays() {
    var _this;

    _classCallCheck(this, DateTimePickerDays);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderDays", function () {
      var cells, classes, days, html, month, nextMonth, prevMonth, minDate, maxDate, row, year;
      year = _this.props.viewDate.year();
      month = _this.props.viewDate.month();
      prevMonth = _this.props.viewDate.clone().subtract(1, "months");
      days = prevMonth.daysInMonth();
      prevMonth.date(days).startOf("week");
      nextMonth = (0, _moment["default"])(prevMonth).clone().add(42, "d");
      minDate = _this.props.minDate ? _this.props.minDate.clone().subtract(1, "days") : _this.props.minDate;
      maxDate = _this.props.maxDate ? _this.props.maxDate.clone() : _this.props.maxDate;
      html = [];
      cells = [];

      while (prevMonth.isBefore(nextMonth)) {
        classes = {
          day: true
        };

        if (prevMonth.year() < year || prevMonth.year() === year && prevMonth.month() < month) {
          classes.old = true;
        } else if (prevMonth.year() > year || prevMonth.year() === year && prevMonth.month() > month) {
          classes["new"] = true;
        }

        if (prevMonth.isSame((0, _moment["default"])({
          y: _this.props.selectedDate.year(),
          M: _this.props.selectedDate.month(),
          d: _this.props.selectedDate.date()
        }))) {
          classes.active = true;
        }

        if (_this.props.showToday) {
          if (prevMonth.isSame((0, _moment["default"])(), "day")) {
            classes.today = true;
          }
        }

        if (minDate && prevMonth.isBefore(minDate) || maxDate && prevMonth.isAfter(maxDate)) {
          classes.disabled = true;
        }

        if (_this.props.daysOfWeekDisabled.length > 0) classes.disabled = _this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1;
        cells.push( /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _classnames["default"])(classes),
          key: prevMonth.month() + "-" + prevMonth.date(),
          onClick: _this.props.setSelectedDate
        }, prevMonth.date()));

        if (prevMonth.weekday() === (0, _moment["default"])().endOf("week").weekday()) {
          row = /*#__PURE__*/_react["default"].createElement("tr", {
            key: prevMonth.month() + "-" + prevMonth.date()
          }, cells);
          html.push(row);
          cells = [];
        }

        prevMonth.add(1, "d");
      }

      return html;
    });

    return _this;
  }

  _createClass(DateTimePickerDays, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "datepicker-days",
        style: {
          display: "block"
        }
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: "table-condensed"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        className: "prev",
        onClick: this.props.subtractMonth
      }, "\u2039"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "switch",
        colSpan: "5",
        onClick: this.props.showMonths
      }, _moment["default"].months()[this.props.viewDate.month()], " ", this.props.viewDate.year()), /*#__PURE__*/_react["default"].createElement("th", {
        className: "next",
        onClick: this.props.addMonth
      }, "\u203A")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "Mo"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "Tu"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "We"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "Th"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "Fr"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "Sa"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "dow"
      }, "Su"))), /*#__PURE__*/_react["default"].createElement("tbody", null, this.renderDays())));
    }
  }]);

  return DateTimePickerDays;
}(_react.Component);

exports["default"] = DateTimePickerDays;

_defineProperty(DateTimePickerDays, "propTypes", {
  subtractMonth: _propTypes["default"].func.isRequired,
  addMonth: _propTypes["default"].func.isRequired,
  viewDate: _propTypes["default"].object.isRequired,
  selectedDate: _propTypes["default"].object.isRequired,
  showToday: _propTypes["default"].bool,
  daysOfWeekDisabled: _propTypes["default"].array,
  setSelectedDate: _propTypes["default"].func.isRequired,
  showMonths: _propTypes["default"].func.isRequired,
  minDate: _propTypes["default"].object,
  maxDate: _propTypes["default"].object
});

_defineProperty(DateTimePickerDays, "defaultProps", {
  showToday: true
});