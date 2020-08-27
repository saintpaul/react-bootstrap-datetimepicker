"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DateTimePickerDays = _interopRequireDefault(require("./DateTimePickerDays"));

var _DateTimePickerMonths = _interopRequireDefault(require("./DateTimePickerMonths"));

var _DateTimePickerYears = _interopRequireDefault(require("./DateTimePickerYears"));

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

var DateTimePickerDate = /*#__PURE__*/function (_Component) {
  _inherits(DateTimePickerDate, _Component);

  var _super = _createSuper(DateTimePickerDate);

  function DateTimePickerDate(props) {
    var _this;

    _classCallCheck(this, DateTimePickerDate);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "showMonths", function () {
      return _this.setState({
        daysDisplayed: false,
        monthsDisplayed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showYears", function () {
      return _this.setState({
        monthsDisplayed: false,
        yearsDisplayed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setViewYear", function (e) {
      _this.props.setViewYear(e.target.innerHTML);

      return _this.setState({
        yearsDisplayed: false,
        monthsDisplayed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setViewMonth", function (e) {
      _this.props.setViewMonth(e.target.innerHTML);

      return _this.setState({
        monthsDisplayed: false,
        daysDisplayed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDays", function () {
      if (_this.state.daysDisplayed) {
        return /*#__PURE__*/_react["default"].createElement(_DateTimePickerDays["default"], {
          addMonth: _this.props.addMonth,
          daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
          maxDate: _this.props.maxDate,
          minDate: _this.props.minDate,
          selectedDate: _this.props.selectedDate,
          setSelectedDate: _this.props.setSelectedDate,
          showMonths: _this.showMonths,
          showToday: _this.props.showToday,
          subtractMonth: _this.props.subtractMonth,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonths", function () {
      if (_this.state.monthsDisplayed) {
        return /*#__PURE__*/_react["default"].createElement(_DateTimePickerMonths["default"], {
          addYear: _this.props.addYear,
          selectedDate: _this.props.selectedDate,
          setViewMonth: _this.setViewMonth,
          showYears: _this.showYears,
          subtractYear: _this.props.subtractYear,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderYears", function () {
      if (_this.state.yearsDisplayed) {
        return /*#__PURE__*/_react["default"].createElement(_DateTimePickerYears["default"], {
          addDecade: _this.props.addDecade,
          selectedDate: _this.props.selectedDate,
          setViewYear: _this.setViewYear,
          subtractDecade: _this.props.subtractDecade,
          viewDate: _this.props.viewDate,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate
        });
      } else {
        return null;
      }
    });

    var viewModes = {
      "days": {
        daysDisplayed: true,
        monthsDisplayed: false,
        yearsDisplayed: false
      },
      "months": {
        daysDisplayed: false,
        monthsDisplayed: true,
        yearsDisplayed: false
      },
      "years": {
        daysDisplayed: false,
        monthsDisplayed: false,
        yearsDisplayed: true
      }
    };
    _this.state = viewModes[_this.props.viewMode] || viewModes[Object.keys(viewModes)[_this.props.viewMode]] || viewModes.days;
    return _this;
  }

  _createClass(DateTimePickerDate, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "datepicker"
      }, this.renderDays(), this.renderMonths(), this.renderYears());
    }
  }]);

  return DateTimePickerDate;
}(_react.Component);

exports["default"] = DateTimePickerDate;

_defineProperty(DateTimePickerDate, "propTypes", {
  subtractMonth: _propTypes["default"].func.isRequired,
  addMonth: _propTypes["default"].func.isRequired,
  viewDate: _propTypes["default"].object.isRequired,
  selectedDate: _propTypes["default"].object.isRequired,
  showToday: _propTypes["default"].bool,
  viewMode: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  daysOfWeekDisabled: _propTypes["default"].array,
  setSelectedDate: _propTypes["default"].func.isRequired,
  subtractYear: _propTypes["default"].func.isRequired,
  addYear: _propTypes["default"].func.isRequired,
  setViewMonth: _propTypes["default"].func.isRequired,
  setViewYear: _propTypes["default"].func.isRequired,
  addDecade: _propTypes["default"].func.isRequired,
  subtractDecade: _propTypes["default"].func.isRequired,
  minDate: _propTypes["default"].object,
  maxDate: _propTypes["default"].object
});