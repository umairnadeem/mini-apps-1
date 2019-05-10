/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Heading_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.jsx */ \"./client/src/components/Heading.jsx\");\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.jsx */ \"./client/src/components/Board.jsx\");\n/* harmony import */ var _Status_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Status.jsx */ \"./client/src/components/Status.jsx\");\n/* harmony import */ var _Player_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player.jsx */ \"./client/src/components/Player.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      size: 5,\n      status: 0,\n      player: 0,\n      players: [new _Player_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('red'), new _Player_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('black')]\n    };\n    _this.init = _this.init.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.addEventListener('load', this.init);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this.state.players.forEach(function (player) {\n        player.ready(_this2.state.size);\n      });\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e, player) {\n      var isColored = false;\n      var col = $(e.target).attr('data-x').toString();\n      $(\"td[data-x=\\\"\".concat(col, \"\\\"]\")).get().reverse().forEach(function (elem) {\n        if ($(elem).html() == '' && !isColored) {\n          $(elem).attr('bgcolor', \"\".concat(player.color));\n          $(elem).html(' ');\n          player.move($(elem).attr('data-x'), $(elem).attr('data-y'));\n          isColored = true;\n          console.log('hit');\n        }\n      });\n\n      if (this.won(player)) {\n        // this.gameWon(player);\n        console.log('won');\n      }\n\n      this.setState(function (state) {\n        return {\n          player: state.player < state.players.length - 1 ? state.player + 1 : 0\n        };\n      });\n    }\n  }, {\n    key: \"won\",\n    value: function won(player) {\n      // this.wonDiag(player) || \n      return this.wonCol(player) || this.wonRow(player);\n    }\n  }, {\n    key: \"wonRow\",\n    value: function wonRow(player) {\n      var bool = false;\n      player.board.forEach(function (row) {\n        if (row.reduce(function (accum, elem) {\n          return accum + elem;\n        }) >= 4) {\n          bool = true;\n        }\n      });\n      return bool;\n    }\n  }, {\n    key: \"wonCol\",\n    value: function wonCol(player) {\n      var bool = false;\n      player.board.forEach(function (col, x) {\n        if (player.board.reduce(function (accum, elem) {\n          return accum + elem[x];\n        }, 0) >= 4) {\n          bool = true;\n        }\n      });\n      return bool;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return React.createElement(\"div\", null, React.createElement(_Heading_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        size: this.state.size,\n        handleClick: function handleClick(e) {\n          return _this3.handleClick(e, _this3.state.players[_this3.state.player]);\n        }\n      }), React.createElement(_Status_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        status: this.state.status,\n        player: this.state.players[this.state.player]\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nLmpzeCc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZC5qc3gnO1xuaW1wb3J0IFN0YXR1cyBmcm9tICcuL1N0YXR1cy5qc3gnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNpemU6IDUsXG4gICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICBwbGF5ZXI6IDAsXG4gICAgICAgICAgICBwbGF5ZXJzOiBbbmV3IFBsYXllcigncmVkJyksIG5ldyBQbGF5ZXIoJ2JsYWNrJyldXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5pdCA9IHRoaXMuaW5pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuaW5pdCk7XG4gICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIucmVhZHkodGhpcy5zdGF0ZS5zaXplKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soZSwgcGxheWVyKSB7XG4gICAgICAgIHZhciBpc0NvbG9yZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbCA9ICQoZS50YXJnZXQpLmF0dHIoJ2RhdGEteCcpLnRvU3RyaW5nKCk7XG4gICAgICAgICQoYHRkW2RhdGEteD1cIiR7Y29sfVwiXWApLmdldCgpLnJldmVyc2UoKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCQoZWxlbSkuaHRtbCgpID09ICcnICYmICFpc0NvbG9yZWQpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW0pLmF0dHIoJ2JnY29sb3InLCBgJHtwbGF5ZXIuY29sb3J9YCk7XG4gICAgICAgICAgICAgICAgJChlbGVtKS5odG1sKCcgJylcbiAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZSgkKGVsZW0pLmF0dHIoJ2RhdGEteCcpLCAkKGVsZW0pLmF0dHIoJ2RhdGEteScpKTtcbiAgICAgICAgICAgICAgICBpc0NvbG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMud29uKHBsYXllcikpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVdvbihwbGF5ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgICAgIHBsYXllcjogc3RhdGUucGxheWVyIDwgc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gc3RhdGUucGxheWVyICsgMSA6IDBcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHdvbihwbGF5ZXIpIHtcbiAgICAgICAgLy8gdGhpcy53b25EaWFnKHBsYXllcikgfHwgXG4gICAgICAgIHJldHVybiB0aGlzLndvbkNvbChwbGF5ZXIpIHx8IHRoaXMud29uUm93KHBsYXllcik7XG4gICAgfVxuXG4gICAgd29uUm93KHBsYXllcikge1xuICAgICAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXIuYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJvdy5yZWR1Y2UoKGFjY3VtLCBlbGVtKSA9PiBhY2N1bSArIGVsZW0pID49IDQpIHtcbiAgICAgICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBib29sO1xuICAgIH1cblxuICAgIHdvbkNvbChwbGF5ZXIpIHtcbiAgICAgICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLmJvYXJkLmZvckVhY2goKGNvbCwgeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBsYXllci5ib2FyZC5yZWR1Y2UoKGFjY3VtLCBlbGVtKSA9PiBhY2N1bSArIGVsZW1beF0sIDApID49IDQpIHtcbiAgICAgICAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBib29sO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgLz5cbiAgICAgICAgICAgICAgICA8Qm9hcmQgc2l6ZT17dGhpcy5zdGF0ZS5zaXplfSBoYW5kbGVDbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSwgdGhpcy5zdGF0ZS5wbGF5ZXJzW3RoaXMuc3RhdGUucGxheWVyXSl9IC8+XG4gICAgICAgICAgICAgICAgPFN0YXR1cyBzdGF0dXM9e3RoaXMuc3RhdGUuc3RhdHVzfSBwbGF5ZXI9e3RoaXMuc3RhdGUucGxheWVyc1t0aGlzLnN0YXRlLnBsYXllcl19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUkE7QUFTQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7OztBQTVFQTtBQUNBO0FBOEVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.jsx */ \"./client/src/components/Square.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Board =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board(props) {\n    _classCallCheck(this, Board);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));\n  }\n\n  _createClass(Board, [{\n    key: \"generate\",\n    value: function generate(size) {\n      var arr = [];\n\n      for (var x = 0; x < size; x++) {\n        arr.push(React.createElement(_Square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          x: x\n        }));\n      }\n\n      return arr;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return React.createElement(\"table\", null, React.createElement(\"tbody\", null, this.generate(this.props.size).map(function (elem, y, arr) {\n        return React.createElement(\"tr\", null, arr.map(function (elem) {\n          return React.cloneElement(elem, {\n            y: y,\n            handleClick: _this.props.handleClick\n          });\n        }));\n      })));\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeD8zNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcXVhcmUgZnJvbSAnLi9TcXVhcmUuanN4JztcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlKHNpemUpIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemU7IHgrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goPFNxdWFyZSB4PXt4fS8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGUodGhpcy5wcm9wcy5zaXplKS5tYXAoKGVsZW0sIHksIGFycikgPT4gPHRyPnthcnIubWFwKGVsZW0gPT4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW0sIHt5LCBoYW5kbGVDbGljazogdGhpcy5wcm9wcy5oYW5kbGVDbGlja30pKX08L3RyPil9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBckJBO0FBQ0E7QUF1QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Board.jsx\n");

/***/ }),

/***/ "./client/src/components/Heading.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/Heading.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Heading = function Heading(props) {\n  return React.createElement(\"div\", null, \"CONNECT 4 beautiful EDITION\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGluZy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSGVhZGluZy5qc3g/NDU2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkaW5nID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5DT05ORUNUIDQgYmVhdXRpZnVsIEVESVRJT048L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Heading.jsx\n");

/***/ }),

/***/ "./client/src/components/Player.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Player.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(color) {\n    _classCallCheck(this, Player);\n\n    this.color = color;\n    this.board = null;\n  }\n\n  _createClass(Player, [{\n    key: \"ready\",\n    value: function ready(size) {\n      // this.board = new Array(size).fill(new Array(size).fill(0));\n      this.board = new Array(size).fill().map(function (x) {\n        return new Array(size).fill(0);\n      });\n    }\n  }, {\n    key: \"move\",\n    value: function move(x, y) {\n      if (this.board !== null) {\n        this.board[y][x] = 1;\n        console.log(this.board);\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUGxheWVyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9QbGF5ZXIuanN4P2YzZDEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBudWxsO1xuICAgIH1cblxuICAgIHJlYWR5KHNpemUpIHtcbiAgICAgICAgLy8gdGhpcy5ib2FyZCA9IG5ldyBBcnJheShzaXplKS5maWxsKG5ldyBBcnJheShzaXplKS5maWxsKDApKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheShzaXplKS5maWxsKCkubWFwKHggPT4gbmV3IEFycmF5KHNpemUpLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIG1vdmUoeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Player.jsx\n");

/***/ }),

/***/ "./client/src/components/Square.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Square = function Square(props) {\n  return React.createElement(\"td\", {\n    \"data-x\": props.x,\n    \"data-y\": props.y,\n    onClick: props.handleClick\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TcXVhcmUuanN4PzczYTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiAoXG4gICAgPHRkIGRhdGEteD17cHJvcHMueH0gZGF0YS15PXtwcm9wcy55fSBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+PC90ZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Square.jsx\n");

/***/ }),

/***/ "./client/src/components/Status.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Status.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Status =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Status, _React$Component);\n\n  function Status(props) {\n    var _this;\n\n    _classCallCheck(this, Status);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Status).call(this, props));\n    _this.state = {\n      statuses: [\"Player \".concat(_this.props.player, \"'s turn\")]\n    };\n    return _this;\n  }\n\n  _createClass(Status, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null);\n    }\n  }]);\n\n  return Status;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Status);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3RhdHVzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TdGF0dXMuanN4P2IyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RhdHVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0dXNlczogW2BQbGF5ZXIgJHt0aGlzLnByb3BzLnBsYXllcn0ncyB0dXJuYF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7Ozs7QUFaQTtBQUNBO0FBY0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Status.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });