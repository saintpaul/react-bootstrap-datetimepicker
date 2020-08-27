"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = _interopRequireDefault(require("react-addons-test-utils"));

var _Constants = _interopRequireDefault(require("../Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.dontMock("../DateTimePickerHours.js");
describe("DateTimePickerHours", function () {
  var DateTimePickerHours = require("../DateTimePickerHours.js");

  var hours, onSwitchMock, setSelectedHourMock;
  describe("Controls", function () {
    beforeEach(function () {
      setSelectedHourMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
      hours = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerHours, {
        mode: _Constants["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));
    });
    it("calls setSelectedHour when clicking a hour", function () {
      var hour = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(hours, "hour")[0];

      _reactAddonsTestUtils["default"].Simulate.click(hour);

      expect(setSelectedHourMock.mock.calls.length).toBe(1);
    });
    it("calls onSwitch when clicking the switch", function () {
      var switchIcon = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(hours, "picker-switch");

      _reactAddonsTestUtils["default"].Simulate.click(switchIcon);

      expect(onSwitchMock.mock.calls.length).toBe(1);
    });
  });
  describe("UI", function () {
    beforeEach(function () {
      setSelectedHourMock = jest.genMockFunction();
      onSwitchMock = jest.genMockFunction();
    });
    it("renders the switch if mode is time", function () {
      hours = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerHours, {
        mode: _Constants["default"].MODE_TIME,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));

      var switchList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(hours, "list-unstyled");

      expect(switchList.length).toBe(1);
    });
    it("does not render the switch if mode is date", function () {
      hours = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerHours, {
        mode: _Constants["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));

      var switchList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(hours, "list-unstyled");

      expect(switchList.length).toBe(0);
    });
    it("renders 24 Hours", function () {
      hours = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerHours, {
        mode: _Constants["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));

      var hourList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(hours, "hour");

      expect(hourList.length).toBe(24);
    });
    it("renders 01 to 24", function () {
      hours = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerHours, {
        mode: _Constants["default"].MODE_DATE,
        onSwitch: onSwitchMock,
        setSelectedHour: setSelectedHourMock
      }));

      var hourList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(hours, "hour");

      expect(hourList.map(function (x) {
        return x.textContent;
      })).toEqual(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]);
    });
  });
});