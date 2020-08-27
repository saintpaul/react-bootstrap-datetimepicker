"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactAddonsTestUtils = _interopRequireDefault(require("react-addons-test-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.dontMock("../DateTimePickerYears.js");
jest.dontMock("moment");
describe("DateTimePickerYears", function () {
  var moment = require("moment");

  var DateTimePickerYears = require("../DateTimePickerYears.js");

  var subtractDecadeMock, addDecadeMock, setViewYearMock, years;
  beforeEach(function () {
    subtractDecadeMock = jest.genMockFunction();
    addDecadeMock = jest.genMockFunction();
    setViewYearMock = jest.genMockFunction();
    years = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerYears, {
      addDecade: addDecadeMock,
      selectedDate: moment(),
      setViewYear: setViewYearMock,
      subtractDecade: subtractDecadeMock,
      viewDate: moment()
    }));
  });
  describe("Controls", function () {
    it("calls subtractDecade when clicking the prev arrow", function () {
      var prevArrow = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(years, "prev");

      _reactAddonsTestUtils["default"].Simulate.click(prevArrow);

      expect(subtractDecadeMock.mock.calls.length).toBe(1);
    });
    it("calls addDecade when clicking the next arrow", function () {
      var nextArrow = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(years, "next");

      _reactAddonsTestUtils["default"].Simulate.click(nextArrow);

      expect(addDecadeMock.mock.calls.length).toBe(1);
    });
    it("calls setViewYear when clicking a year", function () {
      var year = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(years, "active");

      _reactAddonsTestUtils["default"].Simulate.click(year);

      expect(setViewYearMock.mock.calls.length).toBe(1);
    });
  });
  describe("UI", function () {
    it("renders 12 years", function () {
      var yearList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(years, "year");

      expect(yearList.length).toBe(12);
    });
    it("renders the decade plus two extra", function () {
      var yearList = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(years, "year");

      var beginningDecade = parseInt(moment().format("GGGG").substr(0, 3) + 0); // will produce 2010 for 2015.

      var array = [];

      for (var i = 0; i < 12; i++) {
        array.push(beginningDecade + i - 1);
      } // [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


      expect(yearList.map(function (x) {
        return parseInt(x.textContent);
      })).toEqual(array);
    });
    it("has an active year that is now's year", function () {
      var active = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(years, "active");

      expect(parseInt(active.textContent)).toBe(parseInt(moment().format("GGGG")));
    });
    it("has no active year that if viewDate is another decade than selectedDate", function () {
      years = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimePickerYears, {
        addDecade: addDecadeMock,
        selectedDate: moment(),
        setViewYear: setViewYearMock,
        subtractDecade: subtractDecadeMock,
        viewDate: moment().add(12, "year")
      }));

      var active = _reactAddonsTestUtils["default"].scryRenderedDOMComponentsWithClass(years, "active");

      expect(active.length).toBe(0);
    });
  });
});