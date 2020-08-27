"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactAddonsTestUtils = _interopRequireDefault(require("react-addons-test-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

jest.dontMock("moment");
jest.dontMock("../DateTimeField.js");
describe("DateTimeField", function () {
  var moment = require("moment");

  var DateTimeField = require("../DateTimeField.js");

  var happyDate = moment("1990-06-05 07:30");
  var createParent, TestParent;
  describe("By default", function () {
    it("shows the right date for a given dateTime and inputFormat", function () {
      var component = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimeField, {
        dateTime: happyDate.format("x")
      }));

      var input = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithTag(component, "input");

      expect(input.value).toBe("06/05/90 7:30 AM");
    });
    it("allows a custom zIndex to be applied to overlay", function () {
      var component = _reactAddonsTestUtils["default"].renderIntoDocument( /*#__PURE__*/_react["default"].createElement(DateTimeField, {
        zIndex: 1234
      }));

      var input = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(component, "input-group-addon");

      _reactAddonsTestUtils["default"].Simulate.click(input);

      var overlay = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithClass(component, "bootstrap-datetimepicker-overlay");

      expect(_reactDom["default"].findDOMNode(overlay).style.zIndex).toBe('1234');
    });
  });
  describe("When changing props", function () {
    beforeEach(function () {
      TestParent = _react["default"].createFactory(_react["default"].createClass({
        displayName: "TestParent",
        getInitialState: function getInitialState() {
          return _objectSpread({
            dateTime: happyDate.format("x")
          }, this.props);
        },
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(DateTimeField, this.state);
        }
      }));

      createParent = function createParent(initalState) {
        return _reactAddonsTestUtils["default"].renderIntoDocument(TestParent(initalState));
      }; // eslint-disable-line

    });
    it("changes the displayed date when dateTime changes", function () {
      var Parent = createParent();

      var input = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithTag(Parent, "input");

      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({
        dateTime: moment("1981-06-04 05:45").format("x")
      });
      expect(input.value).toBe("06/04/81 5:45 AM");
    });
    it("changes the displayed format when inputFormat changes", function () {
      var Parent = createParent();

      var input = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithTag(Parent, "input");

      expect(input.value).toBe("06/05/90 7:30 AM");
      Parent.setState({
        inputFormat: "x"
      });
      expect(input.value).toBe(happyDate.format("x"));
    });
    it("doesn't change the defaultText if dateTime didn't change", function () {
      var Parent = createParent({
        defaultText: "Pick a date"
      });

      var input = _reactAddonsTestUtils["default"].findRenderedDOMComponentWithTag(Parent, "input");

      expect(input.value).toBe("Pick a date");
      Parent.setState({});
      expect(input.value).toBe("Pick a date");
    });
  });
});