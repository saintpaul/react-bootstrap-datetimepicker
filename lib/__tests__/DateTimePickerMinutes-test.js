"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = _interopRequireDefault(require("react-addons-test-utils"));

var _Constants = _interopRequireDefault(require("../Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.dontMock("../DateTimePickerMinutes.js");
describe("DateTimePickerMinutes", function () {
  var DateTimePickerMinutes = require("../DateTimePickerMinutes.js");

  var minutes, onSwitchMock, setSelectedMinuteMock;
  describe("Controls", function () {
    beforeEach(function () {
      setSelectedMinuteMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
      minutes = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMinutes, {
        mode: _Constants["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));
    });
    it("calls setSelectedMinute when clicking a minute", function () {
      var minute = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(minutes, "minute")[0];

      _reactAddonsTestUtils["default"].Simulate.click(minute);

      expect(setSelectedMinuteMock.mock.calls.length).toBe(1);
    });
    it("calls onSwitch when clicking the switch", function () {
      var switchIcon = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(minutes, "picker-switch");

      _reactAddonsTestUtils["default"].Simulate.click(switchIcon);

      expect(onSwitchMock.mock.calls.length).toBe(1);
    });
  });
  describe("UI", function () {
    beforeEach(function () {
      setSelectedMinuteMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
    });
    it("renders the switch if mode is time", function () {
      minutes = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMinutes, {
        mode: _Constants["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));

      var switchList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(minutes, "list-unstyled");

      expect(switchList.length).toBe(1);
    });
    it("does not render the switch if mode is date", function () {
      minutes = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMinutes, {
        mode: _Constants["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));

      var switchList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(minutes, "list-unstyled");

      expect(switchList.length).toBe(0);
    });
    it("renders 12 different Minutes", function () {
      minutes = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMinutes, {
        mode: _Constants["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));

      var minuteList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(minutes, "minute");

      expect(minuteList.length).toBe(12);
    });
    it("renders 01 to 24", function () {
      minutes = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMinutes, {
        mode: _Constants["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedMinute: setSelectedMinuteMock
      }));

      var minuteList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(minutes, "minute");

      expect(minuteList.map(function (x) {
        return x.textContent;
      })).toEqual(["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]);
    });
  });
});