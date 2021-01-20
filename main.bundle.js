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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_background_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/background-image.png */ "./src/images/background-image.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Wire+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_background_image_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: rgba(199, 226, 234, 0.7);\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  color: #242a3a;\n  font-weight: 800;\n  margin: 0; }\n\nul:before {\n  content: attr(aria-label);\n  font-size: 120%;\n  font-weight: 800;\n  margin-left: -15px; }\n\ninput {\n  cursor: pointer;\n  background: white; }\n\nbutton {\n  margin: 5%;\n  background-color: #e2854c;\n  border: 0;\n  height: 2rem;\n  font-size: 1rem;\n  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n  border-radius: 5px;\n  cursor: pointer; }\n\n.hidden {\n  display: none !important; }\n\n.nav {\n  display: flex;\n  font-family: \"Wire One\", sans-serif;\n  align-items: center;\n  font-size: 2rem;\n  justify-content: center; }\n  .nav h1 {\n    margin: 0; }\n\n.login-dashboard {\n  margin: auto;\n  margin-top: 10%;\n  text-align: center;\n  width: 200px;\n  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n  padding: 2%;\n  background-color: rgba(247, 224, 201, 0.5); }\n\n.dashboard {\n  background-color: rgba(247, 224, 201, 0.5);\n  height: 80vh;\n  padding: 1%;\n  display: grid;\n  grid-template-columns: repeat(4, 24%);\n  grid-row: 65% 30%;\n  grid-gap: 1%; }\n  .dashboard .dashboard-greeting {\n    font-size: 3rem;\n    margin: 0;\n    text-align: center; }\n  .dashboard .dashboard-trips {\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    border-radius: 5px;\n    padding: 2%;\n    height: auto;\n    width: auto;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 1 / 1 / 2 / 4; }\n  .dashboard .dashboard-request-form {\n    border-radius: 5px;\n    display: flex;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 1 / 4 / 1 / 4; }\n    .dashboard .dashboard-request-form h2 {\n      margin: 0; }\n    .dashboard .dashboard-request-form .destination-list {\n      max-width: 80%; }\n  .dashboard .dashboard-message {\n    text-align: center;\n    grid-area: 2 / 3 / 2 / 5;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7); }\n  .dashboard .trip-preview {\n    border-radius: 5px;\n    display: grid;\n    text-align: center;\n    grid-template-columns: repeat(2, 49%);\n    grid-row: 9% 90%;\n    grid-gap: 1%;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 2 / 3 / 2 / 5; }\n    .dashboard .trip-preview .trip-preview-title, .dashboard .trip-preview .destination-preview-title {\n      cursor: pointer;\n      margin: 0;\n      grid-area: 1 / 1 / 2 / 3; }\n    .dashboard .trip-preview .trip-preview-data {\n      grid-area: 2 / 1 / 2 / 2; }\n    .dashboard .trip-preview .trip-preview-image, .dashboard .trip-preview .destination-preview-image {\n      max-height: 200px;\n      width: 100%;\n      grid-area: 2 / 2 / 2 / 3; }\n  .dashboard .dashboard-year-review {\n    border-radius: 5px;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 2 / 1 / 2 / 3; }\n    .dashboard .dashboard-year-review p {\n      margin: 0; }\n    .dashboard .dashboard-year-review .yearly-spending {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10%; }\n      .dashboard .dashboard-year-review .yearly-spending h2, .dashboard .dashboard-year-review .yearly-spending p {\n        margin: 1%; }\n      .dashboard .dashboard-year-review .yearly-spending h2 {\n        font-family: 'Courier New', Courier, monospace;\n        font-size: 2rem; }\n\n@media only screen and (max-width: 450px) {\n  .login-dashboard {\n    width: 90%;\n    display: flex;\n    flex-direction: column; }\n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto; }\n    .dashboard .dashboard-trips {\n      grid-area: auto; }\n    .dashboard .dashboard-request-form {\n      grid-area: auto;\n      font-size: 1.5rem; }\n    .dashboard .trip-preview, .dashboard .dashboard-message {\n      grid-area: auto; }\n    .dashboard .dashboard-year-review {\n      grid-area: auto; } }\n\n@media only screen and (max-width: 780px) {\n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto; }\n    .dashboard .dashboard-trips {\n      grid-area: 1; }\n    .dashboard .dashboard-request-form {\n      grid-area: 2;\n      font-size: 1rem; }\n    .dashboard .trip-preview, .dashboard .dashboard-message {\n      grid-area: 4; }\n    .dashboard .dashboard-year-review {\n      grid-area: 3; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_breakpoints.scss"],"names":[],"mappings":"AAiBA;EACE,4BAA4B;EAC5B,qBAAqB;EACrB,yDAAuD;EACvD,0CAjBoC;EAkBpC,wEAAwE;EACxE,cAlBgB;EAmBhB,gBAAgB;EAChB,SAAS,EAAA;;AAGX;EACE,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,eAAe;EACf,iBAAqC,EAAA;;AAGvC;EACE,UAAU;EACV,yBAnCuB;EAoCvB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,iDApC6C;EAqC7C,kBApCW;EAqCX,eAAe,EAAA;;AAGjB;EACE,wBAAwB,EAAA;;AAG1B;EACE,aAAa;EACb,mCA3CgC;EA4ChC,mBAAmB;EACnB,eAAe;EACf,uBAAuB,EAAA;EALzB;IAOI,SAAS,EAAA;;AAIb;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,iDA7D6C;EA8D7C,WAAW;EACX,0CAnEkB,EAAA;;AAsEpB;EACE,0CAvEkB;EAwElB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,YAAY,EAAA;EAPd;IAUI,eAAe;IACf,SAAS;IACT,kBAAkB,EAAA;EAZtB;IAgBI,iDAlF2C;IAmF3C,kBAlFS;IAmFT,WAAW;IACX,YAAY;IACZ,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;EAtB5B;IA0BI,kBA3FS;IA4FT,aAAa;IACb,iDA9F2C;IA+F3C,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;IAlC5B;MAqCM,SAAS,EAAA;IArCf;MAyCM,cAAc,EAAA;EAzCpB;IA8CI,kBAAkB;IAClB,wBAAwB;IACxB,iDAlH2C;IAmH3C,WAAW;IACX,0CAA4C,EAAA;EAlDhD;IAsDI,kBAvHS;IAwHT,aAAa;IACb,kBAAkB;IAClB,qCAAqC;IACrC,gBAAgB;IAChB,YAAY;IACZ,iDA9H2C;IA+H3C,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;IA/D5B;MAkEM,eAAe;MACf,SAAS;MACT,wBAAwB,EAAA;IApE9B;MAwEM,wBAAwB,EAAA;IAxE9B;MA4EM,iBAAiB;MACjB,WAAW;MACX,wBAAwB,EAAA;EA9E9B;IAmFI,kBApJS;IAqJT,iDAtJ2C;IAuJ3C,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;IAvF5B;MA0FM,SAAS,EAAA;IA1Ff;MA8FM,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,uBAAuB;MACvB,kBAAkB,EAAA;MAlGxB;QAqGQ,UAAU,EAAA;MArGlB;QAyGQ,8CAA6C;QAC7C,eAAe,EAAA;;ACtLvB;EAEE;IACE,UAAU;IACV,aAAa;IACb,sBAAsB,EAAA;EAGxB;IACE,qCAAqC;IACrC,cAAc;IACd,YAAY,EAAA;IAHd;MAMI,eAAe,EAAA;IANnB;MAUI,eAAe;MACf,iBAAiB,EAAA;IAXrB;MAeI,eAAe,EAAA;IAfnB;MAmBI,eAAe,EAAA,EAChB;;AAIL;EAEE;IACE,qCAAqC;IACrC,cAAc;IACd,YAAY,EAAA;IAHd;MAMI,YAAY,EAAA;IANhB;MAUI,YAAY;MACZ,eAAe,EAAA;IAXnB;MAeI,YAAY,EAAA;IAfhB;MAmBI,YAAY,EAAA,EACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Wire+One&display=swap');\n\n// colors\n$elementblue: #747ba1;\n$lighterblue: rgba(199, 226, 234, 0.7);\n$fontblue: #242a3a;\n$accent-tan: #f7e0c9;\n$sandy-tangerine: #e2854c;\n$naturgreen: #2a5934;\n\n$box-shadow: 0px 0px 12px -3px rgba(0,0,0,0.98);\n$rounded: 5px;\n\n$primary-background: $lighterblue;\n$logo-font: 'Wire One', sans-serif;\n;\n\nbody {\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-image: url('../images/background-image.png'); \n  background-color: $lighterblue;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  color: $fontblue;\n  font-weight: 800;\n  margin: 0;\n}\n\nul:before{\n  content: attr(aria-label);\n  font-size: 120%;\n  font-weight: 800;\n  margin-left: -15px;\n}\n\ninput {\n  cursor: pointer;\n  background: lighten($accent-tan, 20%);\n}\n\nbutton {\n  margin: 5%;\n  background-color: $sandy-tangerine;\n  border: 0;\n  height: 2rem;\n  font-size: 1rem;\n  box-shadow: $box-shadow;\n  border-radius: $rounded;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.nav {\n  display: flex;\n  font-family: $logo-font;\n  align-items: center;\n  font-size: 2rem;\n  justify-content: center;\n  h1 {\n    margin: 0;\n  }\n}\n\n.login-dashboard {\n  margin: auto;\n  margin-top: 10%;\n  text-align: center;\n  width: 200px;\n  box-shadow: $box-shadow;\n  padding: 2%;\n  background-color: rgba($accent-tan, .5);\n}\n\n.dashboard {\n  background-color: rgba($accent-tan, .5);\n  height: 80vh;\n  padding: 1%;\n  display: grid;\n  grid-template-columns: repeat(4, 24%);\n  grid-row: 65% 30%;\n  grid-gap: 1%;\n  \n  .dashboard-greeting {\n    font-size: 3rem;\n    margin: 0;\n    text-align: center;\n  }\n  \n  .dashboard-trips {\n    box-shadow: $box-shadow;\n    border-radius: $rounded;\n    padding: 2%;\n    height: auto;\n    width: auto;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 1 / 1 / 2 / 4;\n  }\n\n  .dashboard-request-form {\n    border-radius: $rounded;\n    display: flex;\n    box-shadow: $box-shadow;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 1 / 4 / 1 / 4;\n\n    h2 {\n      margin: 0;\n    }\n\n    .destination-list {\n      max-width: 80%;\n    }\n  }\n\n  .dashboard-message {\n    text-align: center;\n    grid-area: 2 / 3 / 2 / 5;\n    box-shadow: $box-shadow;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n  }\n\n  .trip-preview {\n    border-radius: $rounded;\n    display: grid;\n    text-align: center;\n    grid-template-columns: repeat(2, 49%);\n    grid-row: 9% 90%;\n    grid-gap: 1%;\n    box-shadow: $box-shadow;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 2 / 3 / 2 / 5;\n    \n    .trip-preview-title,  .destination-preview-title{\n      cursor: pointer;\n      margin: 0;\n      grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .trip-preview-data {\n      grid-area: 2 / 1 / 2 / 2;\n    }\n\n    .trip-preview-image, .destination-preview-image {\n      max-height: 200px;\n      width: 100%;\n      grid-area: 2 / 2 / 2 / 3;\n    }\n  }\n\n  .dashboard-year-review {\n    border-radius: $rounded;\n    box-shadow: $box-shadow;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 2 / 1 / 2 / 3;\n    \n    p {\n      margin: 0;\n    }\n    \n    .yearly-spending {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10%;\n      \n      h2, p {\n        margin: 1%;\n      }\n      \n      h2 {\n        font-family:'Courier New', Courier, monospace;\n        font-size: 2rem;\n      }\n    }\n  }\n}\n\n\n\n@import \"_breakpoints\";","@media only screen and (max-width: 450px) {\n\n  .login-dashboard {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto;\n\n    .dashboard-trips {\n      grid-area: auto;\n    }\n\n    .dashboard-request-form {\n      grid-area: auto;\n      font-size: 1.5rem;\n    }\n\n    .trip-preview, .dashboard-message {\n      grid-area: auto;\n    }\n\n    .dashboard-year-review {\n      grid-area: auto;\n    }\n  }\n}\n\n@media only screen and (max-width: 780px) {\n  \n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto;\n  \n    .dashboard-trips {\n      grid-area: 1;\n    }\n\n    .dashboard-request-form {\n      grid-area: 2;\n      font-size: 1rem;\n    }\n\n    .trip-preview, .dashboard-message {\n      grid-area: 4;\n    }\n\n    .dashboard-year-review {\n      grid-area: 3;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Agency.js":
/*!***********************!*\
  !*** ./src/Agency.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");




class Agency extends _Traveler__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(id, name) {
    super(id, name)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Agency);

/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Destination {
  constructor(destination) {
    this.id = destination.id;
    this.name = destination.destination;
    this.costPerDay = destination.estimatedLodgingCostPerDay;
    this.costPerPerson = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
    this.altText = destination.text;
  }
  
  returnDestinationName(id) {
    if (this.id === id){
      return this.name;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Destination);

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = [];
  }
  returnFirstNameLastInitial() {
    return this.name.split(' ')[0] + ' ' + this.name.split(' ')[1][0];
  }
  
  isThisMyTrip(trip) {
    if (trip.userID === this.id) {
      this.trips.push(trip)
    }
  }

  findYearlyTravelCost(lastYear) {
    return this.trips.reduce((total, trip) => {
      if (lastYear < trip.findTripEndDate().replace(/-/g, '/')) {
        total += trip.calculateTotalCost()
      }
      return total
    }, 0)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/Trips.js":
/*!**********************!*\
  !*** ./src/Trips.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id
    this.userID = tripData.userID;
    this.happeningData;
    this.destinationID = tripData.destinationID;
    this.destinationData = destinationData;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }

  findTripEndDate() {
    let date = new Date(this.date)
    let endDate = new Date(date.setDate(date.getDate() + this.duration))
    return new Date(endDate).toISOString().slice(0,10)
  }

  whenIsThisTrip(today) {
    let endDate = this.findTripEndDate().replace(/-/g, '/')
    let startDate = this.date;
    if (endDate > today && this.date < today) {
      this.happeningData = 'current';
    } else if (endDate < today) {
      this.happeningData = 'past';
    } else {
      this.happeningData = 'upcoming';
    }
  }

  calculateAgentFee(totalTravelCost){
    let agentFee = totalTravelCost/10;
    return agentFee
  }

  calculateTripCost() {
    let tripCostPerPerson = this.destinationData.costPerPerson + (this.destinationData.costPerDay * this.duration)
    return tripCostPerPerson * this.travelers;
  }

  calculateTotalCost() {
    let travelCost = this.calculateTripCost();
    let agentFee = this.calculateAgentFee(travelCost);
    return travelCost + agentFee
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: domUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domUpdates", function() { return domUpdates; });
const tripPreview = document.querySelector('.trip-preview');
const highlight = document.querySelector('.dashboard-message')
const pastTripList = document.querySelector('.past-trips')
const upcomingTripList = document.querySelector('.future-trips')
const currentTripList = document.querySelector('.current-trips')
const tripPreviewTitle = document.querySelector('.trip-preview-title');
const dashboard = document.querySelector('.dashboard')

const domUpdates = {
  displayTravelerName(traveler){
    const dashboardGreeting = document.querySelector('.dashboard-greeting')
    dashboardGreeting.innerText = "Hello, " + (traveler.returnFirstNameLastInitial())
  },

  addToDestinationList(destination) {
    const destinationList = document.querySelector('.destination-list')
    let option = document.createElement('option');
    destinationList.appendChild(option);
    option.innerText = `${destination.name}`
    option.setAttribute('value', `${destination.id}`)
  },

  showTrip(parent, trip){
    let li = document.createElement('li');
    parent.appendChild(li);
    li.innerText = `${trip.destinationData.name}, Date: ${trip.date}, ${trip.duration} days, Cost: $${trip.calculateTotalCost().toFixed(2)}, Status: ${trip.status}, TripID: ${trip.id}`
  },

  displayUserTrips(traveler){
    traveler.trips.forEach(trip => {
      if (trip.happeningData === 'past') {
        this.showTrip(pastTripList, trip);
      } else if (trip.happeningData === 'upcoming') {
        this.showTrip(upcomingTripList, trip);
      } else if (trip.happeningData === 'current') {
        this.showTrip(currentTripList, trip);
      }
    })
  },

  displayYearlyCost(traveler) {
    let lastYear = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().slice(0,10).replaceAll("-", "/")
    const yearCost = document.querySelector('.dashboard-year-cost');
    yearCost.innerText = `$${traveler.findYearlyTravelCost(lastYear).toFixed(2)}`
  },
  
  displayEstimate(newTrip, destinationData) {
    this.checkFields();
    tripPreview.classList.remove('hidden')
    highlight.classList.add('hidden')
    const tripPreviewDestination = document.querySelector('.trip-preview-destination');
    const tripPreviewDeparture = document.querySelector('.trip-preview-leaving');
    const tripPreviewDuration = document.querySelector('.trip-preview-duration');
    const tripPreviewTotalCost = document.querySelector('.trip-preview-total-cost');
    const tripPreviewImage = document.querySelector('.trip-preview-image');
    tripPreviewTitle.innerText = `Your trip to ${destinationData.name}`
    tripPreviewImage.setAttribute('src', destinationData.image)
    tripPreviewImage.setAttribute('alt', destinationData.altText)
    tripPreviewDestination.innerHTML = `Destination ${destinationData.name}`
    tripPreviewDeparture.innerHTML = `Departing on: ${newTrip.date}`
    tripPreviewDuration.innerHTML = `Duration ${newTrip.duration}`
    tripPreviewTotalCost.innerHTML = `Cost: $${newTrip.calculateTotalCost()}`
  },

  checkFields() {
    const tripStartDate = document.querySelector('.start-date')
    const tripEndDate = document.querySelector('.end-date')
    const travelerCount = document.querySelector('.traveler-count')
    const tripDestination = document.querySelector('.destination-list')
    const bookItButton = document.querySelector('.book-trip');

    if (tripStartDate.value && tripEndDate.value && travelerCount.value) {
      bookItButton.classList.remove('hidden')
      return
    } else {
      tripPreviewTitle.innerText = "Please fill out form completely!"
    }
  },

  showSuccessPost() {
    const messageTitle = document.querySelector('.destination-preview-title')
    const message = document.querySelector('.destination-preview-message')
    tripPreview.classList.add('hidden')
    highlight.classList.remove('hidden')
    messageTitle.innerText = "Request submitted!"
    message.innerText = "Your trip is pending. Please wait for an agent to approve!"
  }

}

/***/ }),

/***/ "./src/images/ExcursiOnward-logo.png":
/*!*******************************************!*\
  !*** ./src/images/ExcursiOnward-logo.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/ExcursiOnward-logo.png");

/***/ }),

/***/ "./src/images/background-image.png":
/*!*****************************************!*\
  !*** ./src/images/background-image.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/background-image.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_ExcursiOnward_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ExcursiOnward-logo.png */ "./src/images/ExcursiOnward-logo.png");
/* harmony import */ var _images_background_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/background-image.png */ "./src/images/background-image.png");
/* harmony import */ var _Trips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trips */ "./src/Trips.js");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");
/* harmony import */ var _Agency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Agency */ "./src/Agency.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
// An example of how you tell webpack to use a CSS (SCSS) file












let today = new Date().toISOString().slice(0,10).replaceAll("-", "/")

// login
const loginButton = document.querySelector('.login-button');

// dashboard
const dashboard = document.querySelector('.dashboard')
const upcomingTripList = document.querySelector('.future-trips')
const highlight = document.querySelector('.destination-preview-button')
// trip request selectors
const tripStartDate = document.querySelector('.start-date')
const tripEndDate = document.querySelector('.end-date')
const travelerCount = document.querySelector('.traveler-count')
const tripDestination = document.querySelector('.destination-list')

// let travelerID = (Math.ceil(Math.random() * 49))
let travelerID

const pageLoad = () => {

  const travelerResults = Object(_utility_js__WEBPACK_IMPORTED_MODULE_6__["getTraveler"])(travelerID)
  const tripsResults = Object(_utility_js__WEBPACK_IMPORTED_MODULE_6__["getTrips"])()
  const placeResults = Object(_utility_js__WEBPACK_IMPORTED_MODULE_6__["getDestinations"])()
    
  Promise.all([travelerResults, tripsResults, placeResults])
    .then(values => {
      let traveler = new _Traveler__WEBPACK_IMPORTED_MODULE_4__["default"](values[0])
      let trips = values[1].map(trip => {
        let place = values[2].find(place => {
          return place.id === trip.destinationID
        })
        return new _Trips__WEBPACK_IMPORTED_MODULE_3__["default"](trip, place)
      })
      trips.forEach(trip => {
        trip.whenIsThisTrip(today)
        traveler.isThisMyTrip(trip)
      })
      values[2].forEach(destination => {
        _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].addToDestinationList(destination)
      })
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].displayTravelerName(traveler);
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].displayUserTrips(traveler);
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].displayYearlyCost(traveler);
    })
}

const findDuration = (start, end) => {
  let startDate = new Date(start);
  let endDate = new Date(end);
  return (endDate.getDate()) - (startDate.getDate())
}

const returnTripEstimate = (event) => {
  Object(_utility_js__WEBPACK_IMPORTED_MODULE_6__["getDestinations"])()
    .then(destinations => {
    let destinationData = destinations.find(place => {
      return place.id === parseInt(tripDestination.value)
    })
    let start = tripStartDate.value;
    let end = tripEndDate.value;
    let duration = findDuration(start, end);
    let newTrip = new _Trips__WEBPACK_IMPORTED_MODULE_3__["default"]({
      "id": Date.now(),
      "userID": travelerID,
      "destinationID": parseInt(tripDestination.value),
      "travelers": parseInt(travelerCount.value),
      "date": start.replaceAll("-", "/"),
      "duration": duration,
      "status": 'pending',
      "suggestedActivities": ['do stuff'],
    }, destinationData)
    if (event.target.classList.contains('get-estimate')) {
      _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].displayEstimate(newTrip, destinationData)
    } else if (event.target.classList.contains('book-trip')) {
    Object(_utility_js__WEBPACK_IMPORTED_MODULE_6__["addTrip"])(newTrip)
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].showTrip(upcomingTripList, newTrip)
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["domUpdates"].showSuccessPost(newTrip)
    }
  })
};

const login = () => {
  const loginScreen = document.querySelector('.login-dashboard');
  const loginName = document.querySelector('#login-user-name');
  const loginPassword = document.querySelector('#login-password');
  if (loginName.value.slice(0, 8) === 'traveler' && loginPassword.value === 'travel2020') {
    travelerID = loginName.value.slice(8, 10)
    pageLoad();
    dashboard.classList.toggle('hidden')
    loginScreen.classList.toggle('hidden')   
  } else if (loginName.value.slice(0, 8) === 'traveler' && loginPassword.value !== 'travel2020') {
    let warning = document.createElement('p');
    loginScreen.appendChild(warning)
    warning.innerText = "Please enter a valid password!"
  } else if (loginName.value.slice(0, 8) !== 'traveler') {
    let warning = document.createElement('p');
    loginScreen.appendChild(warning)
    warning.innerText = "Please enter a valid username!"
  }
}

loginButton.addEventListener('click', login)
// highlight.addEventListener('click', domUpdates.displayHighlight)
dashboard.addEventListener('click', returnTripEstimate)
// window.onload = pageLoad();

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/*! exports provided: getTraveler, getTrips, getDestinations, addTrip, updateTrip, deleteTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTraveler", function() { return getTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrips", function() { return getTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinations", function() { return getDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTrip", function() { return addTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTrip", function() { return updateTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTrip", function() { return deleteTrip; });
/* harmony import */ var _Destination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Destination */ "./src/Destination.js");



const getTraveler = (userId) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${userId}`)
    .then(response => response.json())
    .then(traveler => traveler)
}

const getTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
    .then(response => response.json())
    .then(trips => trips.trips)
}

const getDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .then(destinations => destinations = destinations.destinations)
    .then(destinations => destinations = destinations.map(destination => {
      return new _Destination__WEBPACK_IMPORTED_MODULE_0__["default"](destination)
    }))
}

const addTrip = (trip) => {
  let postBody = {
    id: trip.id,
    userID: trip.userID,
    destinationID: trip.destinationID, 
    travelers: trip.travelers, 
    date: trip.date, 
    duration: trip.duration, 
    status: trip.status, 
    suggestedActivities: trip.suggestedActivities
  }
  console.log(postBody)
  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const updateTrip = (id, status, suggestedActivities) => {
  let postBody = {
    id: id,
    status: status, 
    suggestedActivities: suggestedActivities
  }
  console.log(postBody)
  return fetch("http://localhost:3001/api/v1/updateTrip", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const deleteTrip = (tripID) => {
  return fetch(`http://localhost:3001/api/v1/trips/${tripID}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWdlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9EZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9FeGN1cnNpT253YXJkLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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O0FBQ0E7O0FBRU87QUFDUCxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdpcmUrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDIyNiwgMjM0LCAwLjcpO1xcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMyNDJhM2E7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxudWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XFxuICBmb250LXNpemU6IDEyMCU7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4OyB9XFxuXFxuaW5wdXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjg1NGM7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIldpcmUgT25lXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLm5hdiBoMSB7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbi5sb2dpbi1kYXNoYm9hcmQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDIyNCwgMjAxLCAwLjUpOyB9XFxuXFxuLmRhc2hib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjI0LCAyMDEsIDAuNSk7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNCUpO1xcbiAgZ3JpZC1yb3c6IDY1JSAzMCU7XFxuICBncmlkLWdhcDogMSU7IH1cXG4gIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1ncmVldGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5kYXNoYm9hcmQgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC45OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0OyB9XFxuICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtcmVxdWVzdC1mb3JtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuOTgpO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDEgLyA0OyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0gaDIge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtcmVxdWVzdC1mb3JtIC5kZXN0aW5hdGlvbi1saXN0IHtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTsgfVxcbiAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLW1lc3NhZ2Uge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogMiAvIDMgLyAyIC8gNTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTsgfVxcbiAgLmRhc2hib2FyZCAudHJpcC1wcmV2aWV3IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQ5JSk7XFxuICAgIGdyaWQtcm93OiA5JSA5MCU7XFxuICAgIGdyaWQtZ2FwOiAxJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDIgLyA1OyB9XFxuICAgIC5kYXNoYm9hcmQgLnRyaXAtcHJldmlldyAudHJpcC1wcmV2aWV3LXRpdGxlLCAuZGFzaGJvYXJkIC50cmlwLXByZXZpZXcgLmRlc3RpbmF0aW9uLXByZXZpZXctdGl0bGUge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzOyB9XFxuICAgIC5kYXNoYm9hcmQgLnRyaXAtcHJldmlldyAudHJpcC1wcmV2aWV3LWRhdGEge1xcbiAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMjsgfVxcbiAgICAuZGFzaGJvYXJkIC50cmlwLXByZXZpZXcgLnRyaXAtcHJldmlldy1pbWFnZSwgLmRhc2hib2FyZCAudHJpcC1wcmV2aWV3IC5kZXN0aW5hdGlvbi1wcmV2aWV3LWltYWdlIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDM7IH1cXG4gIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLXllYXItcmV2aWV3IC55ZWFybHktc3BlbmRpbmcge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTsgfVxcbiAgICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyAueWVhcmx5LXNwZW5kaW5nIGgyLCAuZGFzaGJvYXJkIC5kYXNoYm9hcmQteWVhci1yZXZpZXcgLnllYXJseS1zcGVuZGluZyBwIHtcXG4gICAgICAgIG1hcmdpbjogMSU7IH1cXG4gICAgICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQteWVhci1yZXZpZXcgLnllYXJseS1zcGVuZGluZyBoMiB7XFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLmxvZ2luLWRhc2hib2FyZCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5kYXNoYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXJvdzogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgICAgZ3JpZC1hcmVhOiBhdXRvOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICAgIGdyaWQtYXJlYTogYXV0bztcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcbiAgICAuZGFzaGJvYXJkIC50cmlwLXByZXZpZXcsIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1tZXNzYWdlIHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87IH1cXG4gICAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLXllYXItcmV2aWV3IHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gIC5kYXNoYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXJvdzogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgICAgZ3JpZC1hcmVhOiAxOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICAgIGdyaWQtYXJlYTogMjtcXG4gICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgLmRhc2hib2FyZCAudHJpcC1wcmV2aWV3LCAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtbWVzc2FnZSB7XFxuICAgICAgZ3JpZC1hcmVhOiA0OyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgICAgZ3JpZC1hcmVhOiAzOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYnJlYWtwb2ludHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFpQkE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLHlEQUF1RDtFQUN2RCwwQ0FqQm9DO0VBa0JwQyx3RUFBd0U7RUFDeEUsY0FsQmdCO0VBbUJoQixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGlCQUFxQyxFQUFBOztBQUd2QztFQUNFLFVBQVU7RUFDVix5QkFuQ3VCO0VBb0N2QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixpREFwQzZDO0VBcUM3QyxrQkFwQ1c7RUFxQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGFBQWE7RUFDYixtQ0EzQ2dDO0VBNENoQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QixFQUFBO0VBTHpCO0lBT0ksU0FBUyxFQUFBOztBQUliO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlEQTdENkM7RUE4RDdDLFdBQVc7RUFDWCwwQ0FuRWtCLEVBQUE7O0FBc0VwQjtFQUNFLDBDQXZFa0I7RUF3RWxCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBUGQ7SUFVSSxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQixFQUFBO0VBWnRCO0lBZ0JJLGlEQWxGMkM7SUFtRjNDLGtCQWxGUztJQW1GVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQ0FBNEM7SUFDNUMsd0JBQXdCLEVBQUE7RUF0QjVCO0lBMEJJLGtCQTNGUztJQTRGVCxhQUFhO0lBQ2IsaURBOUYyQztJQStGM0Msc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBDQUE0QztJQUM1Qyx3QkFBd0IsRUFBQTtJQWxDNUI7TUFxQ00sU0FBUyxFQUFBO0lBckNmO01BeUNNLGNBQWMsRUFBQTtFQXpDcEI7SUE4Q0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpREFsSDJDO0lBbUgzQyxXQUFXO0lBQ1gsMENBQTRDLEVBQUE7RUFsRGhEO0lBc0RJLGtCQXZIUztJQXdIVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlEQTlIMkM7SUErSDNDLFdBQVc7SUFDWCwwQ0FBNEM7SUFDNUMsd0JBQXdCLEVBQUE7SUEvRDVCO01Ba0VNLGVBQWU7TUFDZixTQUFTO01BQ1Qsd0JBQXdCLEVBQUE7SUFwRTlCO01Bd0VNLHdCQUF3QixFQUFBO0lBeEU5QjtNQTRFTSxpQkFBaUI7TUFDakIsV0FBVztNQUNYLHdCQUF3QixFQUFBO0VBOUU5QjtJQW1GSSxrQkFwSlM7SUFxSlQsaURBdEoyQztJQXVKM0MsV0FBVztJQUNYLDBDQUE0QztJQUM1Qyx3QkFBd0IsRUFBQTtJQXZGNUI7TUEwRk0sU0FBUyxFQUFBO0lBMUZmO01BOEZNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixrQkFBa0IsRUFBQTtNQWxHeEI7UUFxR1EsVUFBVSxFQUFBO01BckdsQjtRQXlHUSw4Q0FBNkM7UUFDN0MsZUFBZSxFQUFBOztBQ3RMdkI7RUFFRTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFHeEI7SUFDRSxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLFlBQVksRUFBQTtJQUhkO01BTUksZUFBZSxFQUFBO0lBTm5CO01BVUksZUFBZTtNQUNmLGlCQUFpQixFQUFBO0lBWHJCO01BZUksZUFBZSxFQUFBO0lBZm5CO01BbUJJLGVBQWUsRUFBQSxFQUNoQjs7QUFJTDtFQUVFO0lBQ0UscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxZQUFZLEVBQUE7SUFIZDtNQU1JLFlBQVksRUFBQTtJQU5oQjtNQVVJLFlBQVk7TUFDWixlQUFlLEVBQUE7SUFYbkI7TUFlSSxZQUFZLEVBQUE7SUFmaEI7TUFtQkksWUFBWSxFQUFBLEVBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V2lyZStPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuLy8gY29sb3JzXFxuJGVsZW1lbnRibHVlOiAjNzQ3YmExO1xcbiRsaWdodGVyYmx1ZTogcmdiYSgxOTksIDIyNiwgMjM0LCAwLjcpO1xcbiRmb250Ymx1ZTogIzI0MmEzYTtcXG4kYWNjZW50LXRhbjogI2Y3ZTBjOTtcXG4kc2FuZHktdGFuZ2VyaW5lOiAjZTI4NTRjO1xcbiRuYXR1cmdyZWVuOiAjMmE1OTM0O1xcblxcbiRib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTNweCByZ2JhKDAsMCwwLDAuOTgpO1xcbiRyb3VuZGVkOiA1cHg7XFxuXFxuJHByaW1hcnktYmFja2dyb3VuZDogJGxpZ2h0ZXJibHVlO1xcbiRsb2dvLWZvbnQ6ICdXaXJlIE9uZScsIHNhbnMtc2VyaWY7XFxuO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UucG5nJyk7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJibHVlO1xcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICRmb250Ymx1ZTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnVsOmJlZm9yZXtcXG4gIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XFxuICBmb250LXNpemU6IDEyMCU7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRhY2NlbnQtdGFuLCAyMCUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzYW5keS10YW5nZXJpbmU7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gIGJvcmRlci1yYWRpdXM6ICRyb3VuZGVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6ICRsb2dvLWZvbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmxvZ2luLWRhc2hib2FyZCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gIHBhZGRpbmc6IDIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkYWNjZW50LXRhbiwgLjUpO1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGFjY2VudC10YW4sIC41KTtcXG4gIGhlaWdodDogODB2aDtcXG4gIHBhZGRpbmc6IDElO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDI0JSk7XFxuICBncmlkLXJvdzogNjUlIDMwJTtcXG4gIGdyaWQtZ2FwOiAxJTtcXG4gIFxcbiAgLmRhc2hib2FyZC1ncmVldGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5kYXNoYm9hcmQtdHJpcHMge1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgYm9yZGVyLXJhZGl1czogJHJvdW5kZWQ7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRsaWdodGVyYmx1ZSwgMTAlKTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcbiAgfVxcblxcbiAgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAkcm91bmRlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkbGlnaHRlcmJsdWUsIDEwJSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAxIC8gNDtcXG5cXG4gICAgaDIge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAuZGVzdGluYXRpb24tbGlzdCB7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQtbWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDIgLyA1O1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0ZXJibHVlLCAxMCUpO1xcbiAgfVxcblxcbiAgLnRyaXAtcHJldmlldyB7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRyb3VuZGVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQ5JSk7XFxuICAgIGdyaWQtcm93OiA5JSA5MCU7XFxuICAgIGdyaWQtZ2FwOiAxJTtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRsaWdodGVyYmx1ZSwgMTAlKTtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDIgLyA1O1xcbiAgICBcXG4gICAgLnRyaXAtcHJldmlldy10aXRsZSwgIC5kZXN0aW5hdGlvbi1wcmV2aWV3LXRpdGxle1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICB9XFxuXFxuICAgIC50cmlwLXByZXZpZXctZGF0YSB7XFxuICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAyO1xcbiAgICB9XFxuXFxuICAgIC50cmlwLXByZXZpZXctaW1hZ2UsIC5kZXN0aW5hdGlvbi1wcmV2aWV3LWltYWdlIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQteWVhci1yZXZpZXcge1xcbiAgICBib3JkZXItcmFkaXVzOiAkcm91bmRlZDtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRsaWdodGVyYmx1ZSwgMTAlKTtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzO1xcbiAgICBcXG4gICAgcCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAueWVhcmx5LXNwZW5kaW5nIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxuICAgICAgXFxuICAgICAgaDIsIHAge1xcbiAgICAgICAgbWFyZ2luOiAxJTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgaDIge1xcbiAgICAgICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG5cXG5AaW1wb3J0IFxcXCJfYnJlYWtwb2ludHNcXFwiO1wiLFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcblxcbiAgLmxvZ2luLWRhc2hib2FyZCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZGFzaGJvYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgZ3JpZC1yb3c6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgICAgZ3JpZC1hcmVhOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5kYXNoYm9hcmQtcmVxdWVzdC1mb3JtIHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnRyaXAtcHJldmlldywgLmRhc2hib2FyZC1tZXNzYWdlIHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgICAgZ3JpZC1hcmVhOiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gIFxcbiAgLmRhc2hib2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgIGdyaWQtcm93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICBcXG4gICAgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgICAgZ3JpZC1hcmVhOiAxO1xcbiAgICB9XFxuXFxuICAgIC5kYXNoYm9hcmQtcmVxdWVzdC1mb3JtIHtcXG4gICAgICBncmlkLWFyZWE6IDI7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC50cmlwLXByZXZpZXcsIC5kYXNoYm9hcmQtbWVzc2FnZSB7XFxuICAgICAgZ3JpZC1hcmVhOiA0O1xcbiAgICB9XFxuXFxuICAgIC5kYXNoYm9hcmQteWVhci1yZXZpZXcge1xcbiAgICAgIGdyaWQtYXJlYTogMztcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSBcIi4vVHJhdmVsZXJcIlxuXG5cbmNsYXNzIEFnZW5jeSBleHRlbmRzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcbiAgICBzdXBlcihpZCwgbmFtZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VuY3k7IiwiY2xhc3MgRGVzdGluYXRpb24ge1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbikge1xuICAgIHRoaXMuaWQgPSBkZXN0aW5hdGlvbi5pZDtcbiAgICB0aGlzLm5hbWUgPSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLmNvc3RQZXJEYXkgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICB0aGlzLmNvc3RQZXJQZXJzb24gPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICAgIHRoaXMuaW1hZ2UgPSBkZXN0aW5hdGlvbi5pbWFnZTtcbiAgICB0aGlzLmFsdFRleHQgPSBkZXN0aW5hdGlvbi50ZXh0O1xuICB9XG4gIFxuICByZXR1cm5EZXN0aW5hdGlvbk5hbWUoaWQpIHtcbiAgICBpZiAodGhpcy5pZCA9PT0gaWQpe1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb247IiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlcikge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlci5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdHJhdmVsZXIudHJhdmVsZXJUeXBlO1xuICAgIHRoaXMudHJpcHMgPSBbXTtcbiAgfVxuICByZXR1cm5GaXJzdE5hbWVMYXN0SW5pdGlhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lLnNwbGl0KCcgJylbMF0gKyAnICcgKyB0aGlzLm5hbWUuc3BsaXQoJyAnKVsxXVswXTtcbiAgfVxuICBcbiAgaXNUaGlzTXlUcmlwKHRyaXApIHtcbiAgICBpZiAodHJpcC51c2VySUQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHRoaXMudHJpcHMucHVzaCh0cmlwKVxuICAgIH1cbiAgfVxuXG4gIGZpbmRZZWFybHlUcmF2ZWxDb3N0KGxhc3RZZWFyKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMucmVkdWNlKCh0b3RhbCwgdHJpcCkgPT4ge1xuICAgICAgaWYgKGxhc3RZZWFyIDwgdHJpcC5maW5kVHJpcEVuZERhdGUoKS5yZXBsYWNlKC8tL2csICcvJykpIHtcbiAgICAgICAgdG90YWwgKz0gdHJpcC5jYWxjdWxhdGVUb3RhbENvc3QoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsXG4gICAgfSwgMClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmlwRGF0YS5pZFxuICAgIHRoaXMudXNlcklEID0gdHJpcERhdGEudXNlcklEO1xuICAgIHRoaXMuaGFwcGVuaW5nRGF0YTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwRGF0YS5kZXN0aW5hdGlvbklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25EYXRhID0gZGVzdGluYXRpb25EYXRhO1xuICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcERhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXBEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBEYXRhLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcERhdGEuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXBEYXRhLnN1Z2dlc3RlZEFjdGl2aXRpZXM7XG4gIH1cblxuICBmaW5kVHJpcEVuZERhdGUoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpXG4gICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyB0aGlzLmR1cmF0aW9uKSlcbiAgICByZXR1cm4gbmV3IERhdGUoZW5kRGF0ZSkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKVxuICB9XG5cbiAgd2hlbklzVGhpc1RyaXAodG9kYXkpIHtcbiAgICBsZXQgZW5kRGF0ZSA9IHRoaXMuZmluZFRyaXBFbmREYXRlKCkucmVwbGFjZSgvLS9nLCAnLycpXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICBpZiAoZW5kRGF0ZSA+IHRvZGF5ICYmIHRoaXMuZGF0ZSA8IHRvZGF5KSB7XG4gICAgICB0aGlzLmhhcHBlbmluZ0RhdGEgPSAnY3VycmVudCc7XG4gICAgfSBlbHNlIGlmIChlbmREYXRlIDwgdG9kYXkpIHtcbiAgICAgIHRoaXMuaGFwcGVuaW5nRGF0YSA9ICdwYXN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXBwZW5pbmdEYXRhID0gJ3VwY29taW5nJztcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVBZ2VudEZlZSh0b3RhbFRyYXZlbENvc3Qpe1xuICAgIGxldCBhZ2VudEZlZSA9IHRvdGFsVHJhdmVsQ29zdC8xMDtcbiAgICByZXR1cm4gYWdlbnRGZWVcbiAgfVxuXG4gIGNhbGN1bGF0ZVRyaXBDb3N0KCkge1xuICAgIGxldCB0cmlwQ29zdFBlclBlcnNvbiA9IHRoaXMuZGVzdGluYXRpb25EYXRhLmNvc3RQZXJQZXJzb24gKyAodGhpcy5kZXN0aW5hdGlvbkRhdGEuY29zdFBlckRheSAqIHRoaXMuZHVyYXRpb24pXG4gICAgcmV0dXJuIHRyaXBDb3N0UGVyUGVyc29uICogdGhpcy50cmF2ZWxlcnM7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbENvc3QoKSB7XG4gICAgbGV0IHRyYXZlbENvc3QgPSB0aGlzLmNhbGN1bGF0ZVRyaXBDb3N0KCk7XG4gICAgbGV0IGFnZW50RmVlID0gdGhpcy5jYWxjdWxhdGVBZ2VudEZlZSh0cmF2ZWxDb3N0KTtcbiAgICByZXR1cm4gdHJhdmVsQ29zdCArIGFnZW50RmVlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IHRyaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtcHJldmlldycpO1xuY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1tZXNzYWdlJylcbmNvbnN0IHBhc3RUcmlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXN0LXRyaXBzJylcbmNvbnN0IHVwY29taW5nVHJpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnV0dXJlLXRyaXBzJylcbmNvbnN0IGN1cnJlbnRUcmlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRyaXBzJylcbmNvbnN0IHRyaXBQcmV2aWV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1wcmV2aWV3LXRpdGxlJyk7XG5jb25zdCBkYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkJylcblxuZXhwb3J0IGNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gIGRpc3BsYXlUcmF2ZWxlck5hbWUodHJhdmVsZXIpe1xuICAgIGNvbnN0IGRhc2hib2FyZEdyZWV0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1ncmVldGluZycpXG4gICAgZGFzaGJvYXJkR3JlZXRpbmcuaW5uZXJUZXh0ID0gXCJIZWxsbywgXCIgKyAodHJhdmVsZXIucmV0dXJuRmlyc3ROYW1lTGFzdEluaXRpYWwoKSlcbiAgfSxcblxuICBhZGRUb0Rlc3RpbmF0aW9uTGlzdChkZXN0aW5hdGlvbikge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JylcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZGVzdGluYXRpb25MaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IGAke2Rlc3RpbmF0aW9uLm5hbWV9YFxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7ZGVzdGluYXRpb24uaWR9YClcbiAgfSxcblxuICBzaG93VHJpcChwYXJlbnQsIHRyaXApe1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxpKTtcbiAgICBsaS5pbm5lclRleHQgPSBgJHt0cmlwLmRlc3RpbmF0aW9uRGF0YS5uYW1lfSwgRGF0ZTogJHt0cmlwLmRhdGV9LCAke3RyaXAuZHVyYXRpb259IGRheXMsIENvc3Q6ICQke3RyaXAuY2FsY3VsYXRlVG90YWxDb3N0KCkudG9GaXhlZCgyKX0sIFN0YXR1czogJHt0cmlwLnN0YXR1c30sIFRyaXBJRDogJHt0cmlwLmlkfWBcbiAgfSxcblxuICBkaXNwbGF5VXNlclRyaXBzKHRyYXZlbGVyKXtcbiAgICB0cmF2ZWxlci50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgaWYgKHRyaXAuaGFwcGVuaW5nRGF0YSA9PT0gJ3Bhc3QnKSB7XG4gICAgICAgIHRoaXMuc2hvd1RyaXAocGFzdFRyaXBMaXN0LCB0cmlwKTtcbiAgICAgIH0gZWxzZSBpZiAodHJpcC5oYXBwZW5pbmdEYXRhID09PSAndXBjb21pbmcnKSB7XG4gICAgICAgIHRoaXMuc2hvd1RyaXAodXBjb21pbmdUcmlwTGlzdCwgdHJpcCk7XG4gICAgICB9IGVsc2UgaWYgKHRyaXAuaGFwcGVuaW5nRGF0YSA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICAgIHRoaXMuc2hvd1RyaXAoY3VycmVudFRyaXBMaXN0LCB0cmlwKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGRpc3BsYXlZZWFybHlDb3N0KHRyYXZlbGVyKSB7XG4gICAgbGV0IGxhc3RZZWFyID0gbmV3IERhdGUobmV3IERhdGUoKS5zZXRGdWxsWWVhcihuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIilcbiAgICBjb25zdCB5ZWFyQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQteWVhci1jb3N0Jyk7XG4gICAgeWVhckNvc3QuaW5uZXJUZXh0ID0gYCQke3RyYXZlbGVyLmZpbmRZZWFybHlUcmF2ZWxDb3N0KGxhc3RZZWFyKS50b0ZpeGVkKDIpfWBcbiAgfSxcbiAgXG4gIGRpc3BsYXlFc3RpbWF0ZShuZXdUcmlwLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICB0aGlzLmNoZWNrRmllbGRzKCk7XG4gICAgdHJpcFByZXZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBoaWdobGlnaHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zdCB0cmlwUHJldmlld0Rlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtcHJldmlldy1kZXN0aW5hdGlvbicpO1xuICAgIGNvbnN0IHRyaXBQcmV2aWV3RGVwYXJ0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtcHJldmlldy1sZWF2aW5nJyk7XG4gICAgY29uc3QgdHJpcFByZXZpZXdEdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlwLXByZXZpZXctZHVyYXRpb24nKTtcbiAgICBjb25zdCB0cmlwUHJldmlld1RvdGFsQ29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlwLXByZXZpZXctdG90YWwtY29zdCcpO1xuICAgIGNvbnN0IHRyaXBQcmV2aWV3SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1wcmV2aWV3LWltYWdlJyk7XG4gICAgdHJpcFByZXZpZXdUaXRsZS5pbm5lclRleHQgPSBgWW91ciB0cmlwIHRvICR7ZGVzdGluYXRpb25EYXRhLm5hbWV9YFxuICAgIHRyaXBQcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBkZXN0aW5hdGlvbkRhdGEuaW1hZ2UpXG4gICAgdHJpcFByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGRlc3RpbmF0aW9uRGF0YS5hbHRUZXh0KVxuICAgIHRyaXBQcmV2aWV3RGVzdGluYXRpb24uaW5uZXJIVE1MID0gYERlc3RpbmF0aW9uICR7ZGVzdGluYXRpb25EYXRhLm5hbWV9YFxuICAgIHRyaXBQcmV2aWV3RGVwYXJ0dXJlLmlubmVySFRNTCA9IGBEZXBhcnRpbmcgb246ICR7bmV3VHJpcC5kYXRlfWBcbiAgICB0cmlwUHJldmlld0R1cmF0aW9uLmlubmVySFRNTCA9IGBEdXJhdGlvbiAke25ld1RyaXAuZHVyYXRpb259YFxuICAgIHRyaXBQcmV2aWV3VG90YWxDb3N0LmlubmVySFRNTCA9IGBDb3N0OiAkJHtuZXdUcmlwLmNhbGN1bGF0ZVRvdGFsQ29zdCgpfWBcbiAgfSxcblxuICBjaGVja0ZpZWxkcygpIHtcbiAgICBjb25zdCB0cmlwU3RhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWRhdGUnKVxuICAgIGNvbnN0IHRyaXBFbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kYXRlJylcbiAgICBjb25zdCB0cmF2ZWxlckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXZlbGVyLWNvdW50JylcbiAgICBjb25zdCB0cmlwRGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpXG4gICAgY29uc3QgYm9va0l0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stdHJpcCcpO1xuXG4gICAgaWYgKHRyaXBTdGFydERhdGUudmFsdWUgJiYgdHJpcEVuZERhdGUudmFsdWUgJiYgdHJhdmVsZXJDb3VudC52YWx1ZSkge1xuICAgICAgYm9va0l0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdHJpcFByZXZpZXdUaXRsZS5pbm5lclRleHQgPSBcIlBsZWFzZSBmaWxsIG91dCBmb3JtIGNvbXBsZXRlbHkhXCJcbiAgICB9XG4gIH0sXG5cbiAgc2hvd1N1Y2Nlc3NQb3N0KCkge1xuICAgIGNvbnN0IG1lc3NhZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1wcmV2aWV3LXRpdGxlJylcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLXByZXZpZXctbWVzc2FnZScpXG4gICAgdHJpcFByZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBoaWdobGlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBtZXNzYWdlVGl0bGUuaW5uZXJUZXh0ID0gXCJSZXF1ZXN0IHN1Ym1pdHRlZCFcIlxuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJZb3VyIHRyaXAgaXMgcGVuZGluZy4gUGxlYXNlIHdhaXQgZm9yIGFuIGFnZW50IHRvIGFwcHJvdmUhXCJcbiAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvRXhjdXJzaU9ud2FyZC1sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UucG5nXCI7IiwiLy8gQW4gZXhhbXBsZSBvZiBob3cgeW91IHRlbGwgd2VicGFjayB0byB1c2UgYSBDU1MgKFNDU1MpIGZpbGVcbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvRXhjdXJzaU9ud2FyZC1sb2dvLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5wbmcnXG5cbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcHMnO1xuaW1wb3J0IFRyYXZlbGVyIGZyb20gJy4vVHJhdmVsZXInXG5pbXBvcnQgQWdlbmN5IGZyb20gJy4vQWdlbmN5J1xuXG5pbXBvcnQge1xuICBnZXRUcmF2ZWxlcixcbiAgZ2V0VHJpcHMsXG4gIGdldERlc3RpbmF0aW9ucyxcbiAgYWRkVHJpcFxufSBmcm9tICcuL3V0aWxpdHkuanMnO1xuXG5pbXBvcnQge1xuICBkb21VcGRhdGVzXG59IGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbmxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIilcblxuLy8gbG9naW5cbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuXG4vLyBkYXNoYm9hcmRcbmNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQnKVxuY29uc3QgdXBjb21pbmdUcmlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXR1cmUtdHJpcHMnKVxuY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLXByZXZpZXctYnV0dG9uJylcbi8vIHRyaXAgcmVxdWVzdCBzZWxlY3RvcnNcbmNvbnN0IHRyaXBTdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGF0ZScpXG5jb25zdCB0cmlwRW5kRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGF0ZScpXG5jb25zdCB0cmF2ZWxlckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXZlbGVyLWNvdW50JylcbmNvbnN0IHRyaXBEZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JylcblxuLy8gbGV0IHRyYXZlbGVySUQgPSAoTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA0OSkpXG5sZXQgdHJhdmVsZXJJRFxuXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcblxuICBjb25zdCB0cmF2ZWxlclJlc3VsdHMgPSBnZXRUcmF2ZWxlcih0cmF2ZWxlcklEKVxuICBjb25zdCB0cmlwc1Jlc3VsdHMgPSBnZXRUcmlwcygpXG4gIGNvbnN0IHBsYWNlUmVzdWx0cyA9IGdldERlc3RpbmF0aW9ucygpXG4gICAgXG4gIFByb21pc2UuYWxsKFt0cmF2ZWxlclJlc3VsdHMsIHRyaXBzUmVzdWx0cywgcGxhY2VSZXN1bHRzXSlcbiAgICAudGhlbih2YWx1ZXMgPT4ge1xuICAgICAgbGV0IHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKHZhbHVlc1swXSlcbiAgICAgIGxldCB0cmlwcyA9IHZhbHVlc1sxXS5tYXAodHJpcCA9PiB7XG4gICAgICAgIGxldCBwbGFjZSA9IHZhbHVlc1syXS5maW5kKHBsYWNlID0+IHtcbiAgICAgICAgICByZXR1cm4gcGxhY2UuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3IFRyaXAodHJpcCwgcGxhY2UpXG4gICAgICB9KVxuICAgICAgdHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgICAgdHJpcC53aGVuSXNUaGlzVHJpcCh0b2RheSlcbiAgICAgICAgdHJhdmVsZXIuaXNUaGlzTXlUcmlwKHRyaXApXG4gICAgICB9KVxuICAgICAgdmFsdWVzWzJdLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICBkb21VcGRhdGVzLmFkZFRvRGVzdGluYXRpb25MaXN0KGRlc3RpbmF0aW9uKVxuICAgICAgfSlcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRyYXZlbGVyTmFtZSh0cmF2ZWxlcik7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlVc2VyVHJpcHModHJhdmVsZXIpO1xuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5WWVhcmx5Q29zdCh0cmF2ZWxlcik7XG4gICAgfSlcbn1cblxuY29uc3QgZmluZER1cmF0aW9uID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0KTtcbiAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZShlbmQpO1xuICByZXR1cm4gKGVuZERhdGUuZ2V0RGF0ZSgpKSAtIChzdGFydERhdGUuZ2V0RGF0ZSgpKVxufVxuXG5jb25zdCByZXR1cm5UcmlwRXN0aW1hdGUgPSAoZXZlbnQpID0+IHtcbiAgZ2V0RGVzdGluYXRpb25zKClcbiAgICAudGhlbihkZXN0aW5hdGlvbnMgPT4ge1xuICAgIGxldCBkZXN0aW5hdGlvbkRhdGEgPSBkZXN0aW5hdGlvbnMuZmluZChwbGFjZSA9PiB7XG4gICAgICByZXR1cm4gcGxhY2UuaWQgPT09IHBhcnNlSW50KHRyaXBEZXN0aW5hdGlvbi52YWx1ZSlcbiAgICB9KVxuICAgIGxldCBzdGFydCA9IHRyaXBTdGFydERhdGUudmFsdWU7XG4gICAgbGV0IGVuZCA9IHRyaXBFbmREYXRlLnZhbHVlO1xuICAgIGxldCBkdXJhdGlvbiA9IGZpbmREdXJhdGlvbihzdGFydCwgZW5kKTtcbiAgICBsZXQgbmV3VHJpcCA9IG5ldyBUcmlwKHtcbiAgICAgIFwiaWRcIjogRGF0ZS5ub3coKSxcbiAgICAgIFwidXNlcklEXCI6IHRyYXZlbGVySUQsXG4gICAgICBcImRlc3RpbmF0aW9uSURcIjogcGFyc2VJbnQodHJpcERlc3RpbmF0aW9uLnZhbHVlKSxcbiAgICAgIFwidHJhdmVsZXJzXCI6IHBhcnNlSW50KHRyYXZlbGVyQ291bnQudmFsdWUpLFxuICAgICAgXCJkYXRlXCI6IHN0YXJ0LnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKSxcbiAgICAgIFwiZHVyYXRpb25cIjogZHVyYXRpb24sXG4gICAgICBcInN0YXR1c1wiOiAncGVuZGluZycsXG4gICAgICBcInN1Z2dlc3RlZEFjdGl2aXRpZXNcIjogWydkbyBzdHVmZiddLFxuICAgIH0sIGRlc3RpbmF0aW9uRGF0YSlcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2V0LWVzdGltYXRlJykpIHtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUVzdGltYXRlKG5ld1RyaXAsIGRlc3RpbmF0aW9uRGF0YSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jvb2stdHJpcCcpKSB7XG4gICAgYWRkVHJpcChuZXdUcmlwKVxuICAgIGRvbVVwZGF0ZXMuc2hvd1RyaXAodXBjb21pbmdUcmlwTGlzdCwgbmV3VHJpcClcbiAgICBkb21VcGRhdGVzLnNob3dTdWNjZXNzUG9zdChuZXdUcmlwKVxuICAgIH1cbiAgfSlcbn07XG5cbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBjb25zdCBsb2dpblNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1kYXNoYm9hcmQnKTtcbiAgY29uc3QgbG9naW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLXVzZXItbmFtZScpO1xuICBjb25zdCBsb2dpblBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLXBhc3N3b3JkJyk7XG4gIGlmIChsb2dpbk5hbWUudmFsdWUuc2xpY2UoMCwgOCkgPT09ICd0cmF2ZWxlcicgJiYgbG9naW5QYXNzd29yZC52YWx1ZSA9PT0gJ3RyYXZlbDIwMjAnKSB7XG4gICAgdHJhdmVsZXJJRCA9IGxvZ2luTmFtZS52YWx1ZS5zbGljZSg4LCAxMClcbiAgICBwYWdlTG9hZCgpO1xuICAgIGRhc2hib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIGxvZ2luU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpICAgXG4gIH0gZWxzZSBpZiAobG9naW5OYW1lLnZhbHVlLnNsaWNlKDAsIDgpID09PSAndHJhdmVsZXInICYmIGxvZ2luUGFzc3dvcmQudmFsdWUgIT09ICd0cmF2ZWwyMDIwJykge1xuICAgIGxldCB3YXJuaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvZ2luU2NyZWVuLmFwcGVuZENoaWxkKHdhcm5pbmcpXG4gICAgd2FybmluZy5pbm5lclRleHQgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHBhc3N3b3JkIVwiXG4gIH0gZWxzZSBpZiAobG9naW5OYW1lLnZhbHVlLnNsaWNlKDAsIDgpICE9PSAndHJhdmVsZXInKSB7XG4gICAgbGV0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9naW5TY3JlZW4uYXBwZW5kQ2hpbGQod2FybmluZylcbiAgICB3YXJuaW5nLmlubmVyVGV4dCA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgdXNlcm5hbWUhXCJcbiAgfVxufVxuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ2luKVxuLy8gaGlnaGxpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5kaXNwbGF5SGlnaGxpZ2h0KVxuZGFzaGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0dXJuVHJpcEVzdGltYXRlKVxuLy8gd2luZG93Lm9ubG9hZCA9IHBhZ2VMb2FkKCk7IiwiaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJy4vRGVzdGluYXRpb24nXG5cblxuZXhwb3J0IGNvbnN0IGdldFRyYXZlbGVyID0gKHVzZXJJZCkgPT4ge1xuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7dXNlcklkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHRyYXZlbGVyID0+IHRyYXZlbGVyKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VHJpcHMgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4odHJpcHMgPT4gdHJpcHMudHJpcHMpXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZXN0aW5hdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRlc3RpbmF0aW9ucyA9PiBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnMuZGVzdGluYXRpb25zKVxuICAgIC50aGVuKGRlc3RpbmF0aW9ucyA9PiBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGVzdGluYXRpb24oZGVzdGluYXRpb24pXG4gICAgfSkpXG59XG5cbmV4cG9ydCBjb25zdCBhZGRUcmlwID0gKHRyaXApID0+IHtcbiAgbGV0IHBvc3RCb2R5ID0ge1xuICAgIGlkOiB0cmlwLmlkLFxuICAgIHVzZXJJRDogdHJpcC51c2VySUQsXG4gICAgZGVzdGluYXRpb25JRDogdHJpcC5kZXN0aW5hdGlvbklELCBcbiAgICB0cmF2ZWxlcnM6IHRyaXAudHJhdmVsZXJzLCBcbiAgICBkYXRlOiB0cmlwLmRhdGUsIFxuICAgIGR1cmF0aW9uOiB0cmlwLmR1cmF0aW9uLCBcbiAgICBzdGF0dXM6IHRyaXAuc3RhdHVzLCBcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiB0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgfVxuICBjb25zb2xlLmxvZyhwb3N0Qm9keSlcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0Qm9keSlcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVHJpcCA9IChpZCwgc3RhdHVzLCBzdWdnZXN0ZWRBY3Rpdml0aWVzKSA9PiB7XG4gIGxldCBwb3N0Qm9keSA9IHtcbiAgICBpZDogaWQsXG4gICAgc3RhdHVzOiBzdGF0dXMsIFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IHN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgfVxuICBjb25zb2xlLmxvZyhwb3N0Qm9keSlcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91cGRhdGVUcmlwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3RCb2R5KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUcmlwID0gKHRyaXBJRCkgPT4ge1xuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMvJHt0cmlwSUR9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9