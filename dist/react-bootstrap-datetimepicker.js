(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapDatetimepicker"] = factory();
	else
		root["ReactBootstrapDatetimepicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

	import React, { Component } from "react";
	import PropTypes from "prop-types";
	import moment from "moment";
	import classnames from "classnames";
	import DateTimePicker from "./DateTimePicker.js";
	import Constants from "./Constants.js";

	var DateTimeField = /*#__PURE__*/function (_Component) {
	  _inherits(DateTimeField, _Component);

	  var _super = _createSuper(DateTimeField);

	  function DateTimeField() {
	    var _this;

	    _classCallCheck(this, DateTimeField);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "widgetRef", undefined);

	    _defineProperty(_assertThisInitialized(_this), "datetimepickerRef", undefined);

	    _defineProperty(_assertThisInitialized(_this), "dtpbuttonRef", undefined);

	    _defineProperty(_assertThisInitialized(_this), "resolvePropsInputFormat", function () {
	      if (_this.props.inputFormat) {
	        return _this.props.inputFormat;
	      }

	      switch (_this.props.mode) {
	        case Constants.MODE_TIME:
	          return "h:mm A";

	        case Constants.MODE_DATE:
	          return "MM/DD/YY";

	        default:
	          return "MM/DD/YY h:mm A";
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "state", {
	      showDatePicker: _this.props.mode !== Constants.MODE_TIME,
	      showTimePicker: _this.props.mode === Constants.MODE_TIME,
	      inputFormat: _this.resolvePropsInputFormat(),
	      buttonIcon: _this.props.mode === Constants.MODE_TIME ? "glyphicon-time" : "glyphicon-calendar",
	      widgetStyle: {
	        display: "block",
	        position: "absolute",
	        left: -9999,
	        zIndex: "9999 !important"
	      },
	      viewDate: moment(_this.props.dateTime, _this.props.format, true).isValid() ? moment(_this.props.dateTime, _this.props.format, true).startOf("month") : moment().startOf("month"),
	      selectedDate: moment(_this.props.dateTime, _this.props.format, true),
	      inputValue: typeof _this.props.defaultText !== "undefined" ? _this.props.defaultText : moment(_this.props.dateTime, _this.props.format, true).isValid() ? moment(_this.props.dateTime, _this.props.format, true).format(_this.resolvePropsInputFormat()) : ''
	    });

	    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (nextProps) {
	      var state = {};

	      if (nextProps.inputFormat !== _this.props.inputFormat) {
	        state.inputFormat = nextProps.inputFormat;
	        state.inputValue = moment(nextProps.dateTime, nextProps.format, true).isValid() ? moment(nextProps.dateTime, nextProps.format, true).format(nextProps.inputFormat) : '';
	      }

	      if (nextProps.dateTime !== _this.props.dateTime && moment(nextProps.dateTime, nextProps.format, true).isValid()) {
	        state.viewDate = moment(nextProps.dateTime, nextProps.format, true).startOf("month");
	        state.selectedDate = moment(nextProps.dateTime, nextProps.format, true);
	        state.inputValue = moment(nextProps.dateTime, nextProps.format, true).format(nextProps.inputFormat ? nextProps.inputFormat : _this.state.inputFormat);
	      }

	      return _this.setState(state);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
	      var value = event.target === null ? event : event.target.value;

	      if (moment(value, _this.state.inputFormat, true).isValid()) {
	        _this.setState({
	          selectedDate: moment(value, _this.state.inputFormat, true),
	          viewDate: moment(value, _this.state.inputFormat, true).startOf("month")
	        });
	      }

	      return _this.setState({
	        inputValue: value
	      }, function () {
	        return this.props.onChange(moment(this.state.inputValue, this.state.inputFormat, true).format(this.props.format), value);
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "getValue", function () {
	      return moment(_this.state.inputValue, _this.props.inputFormat, true).format(_this.props.format);
	    });

	    _defineProperty(_assertThisInitialized(_this), "setSelectedDate", function (e) {
	      var target = e.target;

	      if (target.className && !target.className.match(/disabled/g)) {
	        var month;
	        if (target.className.indexOf("new") >= 0) month = _this.state.viewDate.month() + 1;else if (target.className.indexOf("old") >= 0) month = _this.state.viewDate.month() - 1;else month = _this.state.viewDate.month();
	        return _this.setState({
	          selectedDate: _this.state.selectedDate.isValid() ? _this.state.viewDate.clone().month(month).date(parseInt(e.target.innerHTML)).hour(_this.state.selectedDate.hours()).minute(_this.state.selectedDate.minutes()) : _this.state.viewDate.clone().month(month).date(parseInt(e.target.innerHTML))
	        }, function () {
	          this.closePicker();
	          this.props.onChange(this.state.selectedDate.format(this.props.format));
	          return this.setState({
	            inputValue: this.state.selectedDate.format(this.state.inputFormat)
	          });
	        });
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "setSelectedHour", function (e) {
	      return _this.setState({
	        selectedDate: _this.state.selectedDate.clone().hour(parseInt(e.target.innerHTML)).minute(_this.state.selectedDate.minutes())
	      }, function () {
	        this.closePicker();
	        this.props.onChange(this.state.selectedDate.format(this.props.format));
	        return this.setState({
	          inputValue: this.state.selectedDate.format(this.state.inputFormat)
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "setSelectedMinute", function (e) {
	      return _this.setState({
	        selectedDate: _this.state.selectedDate.clone().hour(_this.state.selectedDate.hours()).minute(parseInt(e.target.innerHTML))
	      }, function () {
	        this.closePicker();
	        this.props.onChange(this.state.selectedDate.format(this.props.format));
	        return this.setState({
	          inputValue: this.state.selectedDate.format(this.state.inputFormat)
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "setViewMonth", function (month) {
	      return _this.setState({
	        viewDate: _this.state.viewDate.clone().month(month)
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "setViewYear", function (year) {
	      return _this.setState({
	        viewDate: _this.state.viewDate.clone().year(year)
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "addMinute", function () {
	      return _this.setState({
	        selectedDate: _this.state.selectedDate.clone().add(1, "minutes")
	      }, function () {
	        this.props.onChange(this.state.selectedDate.format(this.props.format));
	        return this.setState({
	          inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "addHour", function () {
	      return _this.setState({
	        selectedDate: _this.state.selectedDate.clone().add(1, "hours")
	      }, function () {
	        this.props.onChange(this.state.selectedDate.format(this.props.format));
	        return this.setState({
	          inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "addMonth", function () {
	      return _this.setState({
	        viewDate: _this.state.viewDate.add(1, "months")
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "addYear", function () {
	      return _this.setState({
	        viewDate: _this.state.viewDate.add(1, "years")
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "addDecade", function () {
	      return _this.setState({
	        viewDate: _this.state.viewDate.add(10, "years")
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "subtractMinute", function () {
	      return _this.setState({
	        selectedDate: _this.state.selectedDate.clone().subtract(1, "minutes")
	      }, function () {
	        _this.props.onChange(_this.state.selectedDate.format(_this.props.format));

	        return _this.setState({
	          inputValue: _this.state.selectedDate.format(_this.resolvePropsInputFormat())
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "subtractHour", function () {
	      return _this.setState({
	        selectedDate: _this.state.selectedDate.clone().subtract(1, "hours")
	      }, function () {
	        _this.props.onChange(_this.state.selectedDate.format(_this.props.format));

	        return _this.setState({
	          inputValue: _this.state.selectedDate.format(_this.resolvePropsInputFormat())
	        });
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "subtractMonth", function () {
	      return _this.setState({
	        viewDate: _this.state.viewDate.subtract(1, "months")
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "subtractYear", function () {
	      return _this.setState({
	        viewDate: _this.state.viewDate.subtract(1, "years")
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "subtractDecade", function () {
	      return _this.setState({
	        viewDate: _this.state.viewDate.subtract(10, "years")
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "togglePeriod", function () {
	      if (_this.state.selectedDate.hour() >= 12) {
	        return _this.onChange(_this.state.selectedDate.clone().subtract(12, "hours").format(_this.state.inputFormat));
	      } else {
	        return _this.onChange(_this.state.selectedDate.clone().add(12, "hours").format(_this.state.inputFormat));
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "togglePicker", function () {
	      if (!_this.state.selectedDate.isValid()) {
	        _this.setState({
	          selectedDate: moment().startOf('day')
	        }, function () {
	          this.props.onChange(this.state.selectedDate.format(this.props.format));
	          return this.setState({
	            inputValue: this.state.selectedDate.format(this.state.inputFormat)
	          });
	        });
	      }

	      return _this.setState({
	        showDatePicker: !_this.state.showDatePicker,
	        showTimePicker: !_this.state.showTimePicker
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
	      var classes, gBCR, offset, placePosition, scrollTop, styles;

	      if (_this.state.showPicker) {
	        return _this.closePicker();
	      } else {
	        _this.setState({
	          showPicker: true
	        });

	        gBCR = _this.dtpbuttonRef.getBoundingClientRect();
	        classes = {
	          "bootstrap-datetimepicker-widget": true,
	          "dropdown-menu": true
	        };
	        offset = {
	          top: gBCR.top + window.pageYOffset - document.documentElement.clientTop,
	          left: gBCR.left + window.pageXOffset - document.documentElement.clientLeft
	        };
	        offset.top = offset.top + _this.datetimepickerRef.offsetHeight;
	        scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	        placePosition = _this.props.direction === "up" ? "top" : _this.props.direction === "bottom" ? "bottom" : _this.props.direction === "auto" ? offset.top + _this.widgetRef.offsetHeight > window.offsetHeight + scrollTop && _this.widgetRef.offsetHeight + _this.datetimepickerRef.offsetHeight > offset.top ? "top" : "bottom" : void 0;

	        if (placePosition === "top") {
	          offset.top = -_this.widgetRef.offsetHeight - _this.clientHeight - 2;
	          classes.top = true;
	          classes.bottom = false;
	          classes["pull-right"] = true;
	        } else {
	          offset.top = 40;
	          classes.top = false;
	          classes.bottom = true;
	          classes["pull-right"] = true;
	        }

	        styles = {
	          display: "block",
	          position: "absolute",
	          top: offset.top,
	          left: "auto",
	          right: 7
	        };
	        return _this.setState({
	          widgetStyle: styles,
	          widgetClasses: classes
	        });
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "closePicker", function () {
	      var style = _objectSpread({}, _this.state.widgetStyle);

	      style.left = -9999;
	      style.display = "none";
	      return _this.setState({
	        showPicker: false,
	        widgetStyle: style
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "size", function () {
	      switch (_this.props.size) {
	        case Constants.SIZE_SMALL:
	          return "form-group-sm";

	        case Constants.SIZE_LARGE:
	          return "form-group-lg";
	      }

	      return "";
	    });

	    _defineProperty(_assertThisInitialized(_this), "renderOverlay", function () {
	      var styles = {
	        position: "fixed",
	        top: 0,
	        bottom: 0,
	        left: 0,
	        right: 0,
	        zIndex: "".concat(_this.props.zIndex)
	      };

	      if (_this.state.showPicker) {
	        return /*#__PURE__*/React.createElement("div", {
	          className: "bootstrap-datetimepicker-overlay",
	          onClick: _this.closePicker,
	          style: styles
	        });
	      } else {
	        return /*#__PURE__*/React.createElement("span", null);
	      }
	    });

	    return _this;
	  }

	  _createClass(DateTimeField, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return /*#__PURE__*/React.createElement("div", {
	        style: {
	          position: "relative"
	        }
	      }, this.renderOverlay(), /*#__PURE__*/React.createElement(DateTimePicker, {
	        addDecade: this.addDecade,
	        addHour: this.addHour,
	        addMinute: this.addMinute,
	        addMonth: this.addMonth,
	        addYear: this.addYear,
	        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	        maxDate: this.props.maxDate,
	        minDate: this.props.minDate,
	        mode: this.props.mode,
	        ref: function ref(r) {
	          return _this2.widgetRef = r;
	        },
	        selectedDate: this.state.selectedDate,
	        setSelectedDate: this.setSelectedDate,
	        setSelectedHour: this.setSelectedHour,
	        setSelectedMinute: this.setSelectedMinute,
	        setViewMonth: this.setViewMonth,
	        setViewYear: this.setViewYear,
	        showDatePicker: this.state.showDatePicker,
	        showTimePicker: this.state.showTimePicker,
	        showToday: this.props.showToday,
	        subtractDecade: this.subtractDecade,
	        subtractHour: this.subtractHour,
	        subtractMinute: this.subtractMinute,
	        subtractMonth: this.subtractMonth,
	        subtractYear: this.subtractYear,
	        togglePeriod: this.togglePeriod,
	        togglePicker: this.togglePicker,
	        viewDate: this.state.viewDate,
	        viewMode: this.props.viewMode,
	        widgetClasses: this.state.widgetClasses,
	        widgetStyle: this.state.widgetStyle
	      }), /*#__PURE__*/React.createElement("div", {
	        className: "input-group date " + this.size(),
	        ref: function ref(r) {
	          return _this2.datetimepickerRef = r;
	        }
	      }, /*#__PURE__*/React.createElement("input", _extends({
	        className: "form-control",
	        onChange: this.onChange,
	        type: "text",
	        value: this.state.inputValue
	      }, this.props.inputProps)), /*#__PURE__*/React.createElement("span", {
	        className: "input-group-addon",
	        onBlur: this.onBlur,
	        onClick: this.onClick,
	        ref: function ref(r) {
	          return _this2.dtpbuttonRef = r;
	        }
	      }, /*#__PURE__*/React.createElement("span", {
	        className: classnames("glyphicon", this.state.buttonIcon)
	      }))));
	    }
	  }]);

	  return DateTimeField;
	}(Component);

	_defineProperty(DateTimeField, "defaultProps", {
	  dateTime: moment().format("x"),
	  format: "x",
	  showToday: true,
	  viewMode: "days",
	  daysOfWeekDisabled: [],
	  size: Constants.SIZE_MEDIUM,
	  mode: Constants.MODE_DATETIME,
	  zIndex: 999,
	  onChange: function onChange(x) {
	    console.log(x);
	  }
	});

	_defineProperty(DateTimeField, "propTypes", {
	  dateTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  onChange: PropTypes.func,
	  format: PropTypes.string,
	  inputProps: PropTypes.object,
	  inputFormat: PropTypes.string,
	  defaultText: PropTypes.string,
	  mode: PropTypes.oneOf([Constants.MODE_DATE, Constants.MODE_DATETIME, Constants.MODE_TIME]),
	  minDate: PropTypes.object,
	  maxDate: PropTypes.object,
	  direction: PropTypes.string,
	  showToday: PropTypes.bool,
	  viewMode: PropTypes.string,
	  zIndex: PropTypes.number,
	  size: PropTypes.oneOf([Constants.SIZE_SMALL, Constants.SIZE_MEDIUM, Constants.SIZE_LARGE]),
	  daysOfWeekDisabled: PropTypes.arrayOf(PropTypes.number)
	});

	export { DateTimeField as default };

/***/ })
/******/ ])
});
;