"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = _interopRequireDefault(require("react-addons-test-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.dontMock("moment");
jest.dontMock("../DateTimePickerMonths.js");
describe("DateTimePickerMonths", function () {
  var moment = require("moment");

  var DateTimePickerMonths = require("../DateTimePickerMonths.js");

  var subtractYearMock, addYearMock, setViewMonthMock, showYearsMock, months;
  beforeEach(function () {
    subtractYearMock = jest.genMockFunction();
    addYearMock = jest.genMockFunction();
    showYearsMock = jest.genMockFunction();
    setViewMonthMock = jest.genMockFunction();
    months = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMonths, {
      addYear: addYearMock,
      selectedDate: moment(),
      setViewMonth: setViewMonthMock,
      showYears: showYearsMock,
      subtractYear: subtractYearMock,
      viewDate: moment()
    }));
  });
  describe("Controls", function () {
    it("calls subtractYear when clicking the prev arrow", function () {
      var prevArrow = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(months, "prev");

      _reactAddonsTestUtils["default"].Simulate.click(prevArrow);

      expect(subtractYearMock.mock.calls.length).toBe(1);
    });
    it("calls addYear when clicking the next arrow", function () {
      var nextArrow = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(months, "next");

      _reactAddonsTestUtils["default"].Simulate.click(nextArrow);

      expect(addYearMock.mock.calls.length).toBe(1);
    });
    it("calls showYears when clicking the year", function () {
      var year = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(months, "switch");

      _reactAddonsTestUtils["default"].Simulate.click(year);

      expect(showYearsMock.mock.calls.length).toBe(1);
    });
    it("calls setViewMonth when clicking a month", function () {
      var month = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(months, "active");

      _reactAddonsTestUtils["default"].Simulate.click(month);

      expect(setViewMonthMock.mock.calls.length).toBe(1);
    });
  });
  describe("UI", function () {
    it("renders 12 months", function () {
      var monthList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(months, "month");

      expect(monthList.length).toBe(12);
    });
    it("rendersJanuary through December", function () {
      var monthList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(months, "month");

      expect(monthList.map(function (x) {
        return x.textContent;
      })).toEqual(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    });
    it("has an active month that is now's month", function () {
      var active = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(months, "active");

      expect(active.textContent).toBe(moment().format("MMM"));
    });
    it("has no active month that if viewDate is another year than selectedDate", function () {
      months = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerMonths, {
        addYear: addYearMock,
        selectedDate: moment(),
        setViewMonth: setViewMonthMock,
        showYears: showYearsMock,
        subtractYear: subtractYearMock,
        viewDate: moment().add(2, "year")
      }));

      var active = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(months, "active");

      expect(active.length).toBe(0);
    });
  });
});