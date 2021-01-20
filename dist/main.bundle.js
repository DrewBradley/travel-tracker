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
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: rgba(199, 226, 234, 0.7);\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  color: #242a3a;\n  font-weight: 800;\n  margin: 0; }\n\nul:before {\n  content: attr(aria-label);\n  font-size: 120%;\n  font-weight: 800;\n  margin-left: -15px; }\n\ninput {\n  cursor: pointer;\n  background: white; }\n\nbutton {\n  margin: 5%;\n  background-color: #e2854c;\n  border: 0;\n  height: 2rem;\n  font-size: 1rem;\n  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n  border-radius: 5px;\n  cursor: pointer; }\n\n.hidden {\n  display: none !important; }\n\n.nav {\n  display: flex;\n  font-family: \"Wire One\", sans-serif;\n  align-items: center;\n  font-size: 2rem;\n  justify-content: center; }\n  .nav h1 {\n    margin: 0; }\n\n.login-dashboard {\n  margin: auto;\n  margin-top: 10%;\n  text-align: center;\n  width: 200px;\n  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n  padding: 2%;\n  background-color: rgba(247, 224, 201, 0.5); }\n\n.dashboard {\n  background-color: rgba(247, 224, 201, 0.5);\n  height: 80vh;\n  padding: 1%;\n  display: grid;\n  grid-template-columns: repeat(4, 24%);\n  grid-row: 65% 30%;\n  grid-gap: 1%; }\n  .dashboard .dashboard-greeting {\n    font-size: 3rem;\n    margin: 0;\n    text-align: center; }\n  .dashboard .dashboard-trips {\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    border-radius: 5px;\n    padding: 2%;\n    height: auto;\n    width: auto;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 1 / 1 / 2 / 4; }\n  .dashboard .dashboard-request-form {\n    border-radius: 5px;\n    display: flex;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 1 / 4 / 1 / 4; }\n    .dashboard .dashboard-request-form h2 {\n      margin: 0; }\n    .dashboard .dashboard-request-form .destination-list {\n      max-width: 80%; }\n  .dashboard .dashboard-message {\n    border-radius: 5px;\n    text-align: center;\n    grid-area: 2 / 3 / 2 / 5;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7); }\n  .dashboard .trip-preview {\n    border-radius: 5px;\n    display: grid;\n    text-align: center;\n    grid-template-columns: repeat(2, 49%);\n    grid-row: 9% 90%;\n    grid-gap: 1%;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 2 / 3 / 2 / 5; }\n    .dashboard .trip-preview .trip-preview-title, .dashboard .trip-preview .destination-preview-title {\n      cursor: pointer;\n      margin: 0;\n      grid-area: 1 / 1 / 2 / 3; }\n    .dashboard .trip-preview .trip-preview-data {\n      grid-area: 2 / 1 / 2 / 2; }\n    .dashboard .trip-preview .trip-preview-image, .dashboard .trip-preview .destination-preview-image {\n      max-height: 200px;\n      width: 100%;\n      grid-area: 2 / 2 / 2 / 3; }\n  .dashboard .dashboard-year-review {\n    border-radius: 5px;\n    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);\n    padding: 2%;\n    background-color: rgba(236, 245, 248, 0.7);\n    grid-area: 2 / 1 / 2 / 3; }\n    .dashboard .dashboard-year-review p {\n      margin: 0; }\n    .dashboard .dashboard-year-review .yearly-spending {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10%; }\n      .dashboard .dashboard-year-review .yearly-spending h2, .dashboard .dashboard-year-review .yearly-spending p {\n        margin: 1%; }\n      .dashboard .dashboard-year-review .yearly-spending h2 {\n        font-family: 'Courier New', Courier, monospace;\n        font-size: 2rem; }\n\n@media only screen and (max-width: 450px) {\n  .login-dashboard {\n    width: 90%;\n    display: flex;\n    flex-direction: column; }\n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto; }\n    .dashboard .dashboard-trips {\n      grid-area: auto; }\n    .dashboard .dashboard-request-form {\n      grid-area: auto;\n      font-size: 1.5rem; }\n    .dashboard .trip-preview, .dashboard .dashboard-message {\n      grid-area: auto; }\n    .dashboard .dashboard-year-review {\n      grid-area: auto; } }\n\n@media only screen and (max-width: 780px) {\n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto; }\n    .dashboard .dashboard-trips {\n      grid-area: 1; }\n    .dashboard .dashboard-request-form {\n      grid-area: 2;\n      font-size: 1rem; }\n    .dashboard .trip-preview, .dashboard .dashboard-message {\n      grid-area: 4; }\n    .dashboard .dashboard-year-review {\n      grid-area: 3; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_breakpoints.scss"],"names":[],"mappings":"AAiBA;EACE,4BAA4B;EAC5B,qBAAqB;EACrB,yDAAuD;EACvD,0CAjBoC;EAkBpC,wEAAwE;EACxE,cAlBgB;EAmBhB,gBAAgB;EAChB,SAAS,EAAA;;AAGX;EACE,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,eAAe;EACf,iBAAqC,EAAA;;AAGvC;EACE,UAAU;EACV,yBAnCuB;EAoCvB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,iDApC6C;EAqC7C,kBApCW;EAqCX,eAAe,EAAA;;AAGjB;EACE,wBAAwB,EAAA;;AAG1B;EACE,aAAa;EACb,mCA3CgC;EA4ChC,mBAAmB;EACnB,eAAe;EACf,uBAAuB,EAAA;EALzB;IAOI,SAAS,EAAA;;AAIb;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,iDA7D6C;EA8D7C,WAAW;EACX,0CAnEkB,EAAA;;AAsEpB;EACE,0CAvEkB;EAwElB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,YAAY,EAAA;EAPd;IAUI,eAAe;IACf,SAAS;IACT,kBAAkB,EAAA;EAZtB;IAgBI,iDAlF2C;IAmF3C,kBAlFS;IAmFT,WAAW;IACX,YAAY;IACZ,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;EAtB5B;IA0BI,kBA3FS;IA4FT,aAAa;IACb,iDA9F2C;IA+F3C,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;IAlC5B;MAqCM,SAAS,EAAA;IArCf;MAyCM,cAAc,EAAA;EAzCpB;IA8CI,kBA/GS;IAgHT,kBAAkB;IAClB,wBAAwB;IACxB,iDAnH2C;IAoH3C,WAAW;IACX,0CAA4C,EAAA;EAnDhD;IAuDI,kBAxHS;IAyHT,aAAa;IACb,kBAAkB;IAClB,qCAAqC;IACrC,gBAAgB;IAChB,YAAY;IACZ,iDA/H2C;IAgI3C,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;IAhE5B;MAmEM,eAAe;MACf,SAAS;MACT,wBAAwB,EAAA;IArE9B;MAyEM,wBAAwB,EAAA;IAzE9B;MA6EM,iBAAiB;MACjB,WAAW;MACX,wBAAwB,EAAA;EA/E9B;IAoFI,kBArJS;IAsJT,iDAvJ2C;IAwJ3C,WAAW;IACX,0CAA4C;IAC5C,wBAAwB,EAAA;IAxF5B;MA2FM,SAAS,EAAA;IA3Ff;MA+FM,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,uBAAuB;MACvB,kBAAkB,EAAA;MAnGxB;QAsGQ,UAAU,EAAA;MAtGlB;QA0GQ,8CAA6C;QAC7C,eAAe,EAAA;;ACvLvB;EAEE;IACE,UAAU;IACV,aAAa;IACb,sBAAsB,EAAA;EAGxB;IACE,qCAAqC;IACrC,cAAc;IACd,YAAY,EAAA;IAHd;MAMI,eAAe,EAAA;IANnB;MAUI,eAAe;MACf,iBAAiB,EAAA;IAXrB;MAeI,eAAe,EAAA;IAfnB;MAmBI,eAAe,EAAA,EAChB;;AAIL;EAEE;IACE,qCAAqC;IACrC,cAAc;IACd,YAAY,EAAA;IAHd;MAMI,YAAY,EAAA;IANhB;MAUI,YAAY;MACZ,eAAe,EAAA;IAXnB;MAeI,YAAY,EAAA;IAfhB;MAmBI,YAAY,EAAA,EACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Wire+One&display=swap');\n\n// colors\n$elementblue: #747ba1;\n$lighterblue: rgba(199, 226, 234, 0.7);\n$fontblue: #242a3a;\n$accent-tan: #f7e0c9;\n$sandy-tangerine: #e2854c;\n$naturgreen: #2a5934;\n\n$box-shadow: 0px 0px 12px -3px rgba(0,0,0,0.98);\n$rounded: 5px;\n\n$primary-background: $lighterblue;\n$logo-font: 'Wire One', sans-serif;\n;\n\nbody {\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-image: url('../images/background-image.png'); \n  background-color: $lighterblue;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  color: $fontblue;\n  font-weight: 800;\n  margin: 0;\n}\n\nul:before{\n  content: attr(aria-label);\n  font-size: 120%;\n  font-weight: 800;\n  margin-left: -15px;\n}\n\ninput {\n  cursor: pointer;\n  background: lighten($accent-tan, 20%);\n}\n\nbutton {\n  margin: 5%;\n  background-color: $sandy-tangerine;\n  border: 0;\n  height: 2rem;\n  font-size: 1rem;\n  box-shadow: $box-shadow;\n  border-radius: $rounded;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.nav {\n  display: flex;\n  font-family: $logo-font;\n  align-items: center;\n  font-size: 2rem;\n  justify-content: center;\n  h1 {\n    margin: 0;\n  }\n}\n\n.login-dashboard {\n  margin: auto;\n  margin-top: 10%;\n  text-align: center;\n  width: 200px;\n  box-shadow: $box-shadow;\n  padding: 2%;\n  background-color: rgba($accent-tan, .5);\n}\n\n.dashboard {\n  background-color: rgba($accent-tan, .5);\n  height: 80vh;\n  padding: 1%;\n  display: grid;\n  grid-template-columns: repeat(4, 24%);\n  grid-row: 65% 30%;\n  grid-gap: 1%;\n  \n  .dashboard-greeting {\n    font-size: 3rem;\n    margin: 0;\n    text-align: center;\n  }\n  \n  .dashboard-trips {\n    box-shadow: $box-shadow;\n    border-radius: $rounded;\n    padding: 2%;\n    height: auto;\n    width: auto;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 1 / 1 / 2 / 4;\n  }\n\n  .dashboard-request-form {\n    border-radius: $rounded;\n    display: flex;\n    box-shadow: $box-shadow;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 1 / 4 / 1 / 4;\n\n    h2 {\n      margin: 0;\n    }\n\n    .destination-list {\n      max-width: 80%;\n    }\n  }\n\n  .dashboard-message {\n    border-radius: $rounded;\n    text-align: center;\n    grid-area: 2 / 3 / 2 / 5;\n    box-shadow: $box-shadow;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n  }\n\n  .trip-preview {\n    border-radius: $rounded;\n    display: grid;\n    text-align: center;\n    grid-template-columns: repeat(2, 49%);\n    grid-row: 9% 90%;\n    grid-gap: 1%;\n    box-shadow: $box-shadow;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 2 / 3 / 2 / 5;\n    \n    .trip-preview-title,  .destination-preview-title{\n      cursor: pointer;\n      margin: 0;\n      grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .trip-preview-data {\n      grid-area: 2 / 1 / 2 / 2;\n    }\n\n    .trip-preview-image, .destination-preview-image {\n      max-height: 200px;\n      width: 100%;\n      grid-area: 2 / 2 / 2 / 3;\n    }\n  }\n\n  .dashboard-year-review {\n    border-radius: $rounded;\n    box-shadow: $box-shadow;\n    padding: 2%;\n    background-color: lighten($lighterblue, 10%);\n    grid-area: 2 / 1 / 2 / 3;\n    \n    p {\n      margin: 0;\n    }\n    \n    .yearly-spending {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10%;\n      \n      h2, p {\n        margin: 1%;\n      }\n      \n      h2 {\n        font-family:'Courier New', Courier, monospace;\n        font-size: 2rem;\n      }\n    }\n  }\n}\n\n\n\n@import \"_breakpoints\";","@media only screen and (max-width: 450px) {\n\n  .login-dashboard {\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto;\n\n    .dashboard-trips {\n      grid-area: auto;\n    }\n\n    .dashboard-request-form {\n      grid-area: auto;\n      font-size: 1.5rem;\n    }\n\n    .trip-preview, .dashboard-message {\n      grid-area: auto;\n    }\n\n    .dashboard-year-review {\n      grid-area: auto;\n    }\n  }\n}\n\n@media only screen and (max-width: 780px) {\n  \n  .dashboard {\n    grid-template-columns: repeat(1, 1fr);\n    grid-row: auto;\n    height: auto;\n  \n    .dashboard-trips {\n      grid-area: 1;\n    }\n\n    .dashboard-request-form {\n      grid-area: 2;\n      font-size: 1rem;\n    }\n\n    .trip-preview, .dashboard-message {\n      grid-area: 4;\n    }\n\n    .dashboard-year-review {\n      grid-area: 3;\n    }\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWdlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9EZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9FeGN1cnNpT253YXJkLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lIO0FBQzdCO0FBQ087QUFDeEI7QUFDM0UsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRiw4QkFBOEIsUUFBUywrRUFBK0U7QUFDdEgseUNBQXlDLHNGQUErQixDQUFDLG9FQUE2QjtBQUN0RztBQUNBLDhCQUE4QixRQUFTLFNBQVMsaUNBQWlDLDBCQUEwQixzRUFBc0UsK0NBQStDLDZFQUE2RSxtQkFBbUIscUJBQXFCLGNBQWMsRUFBRSxlQUFlLDhCQUE4QixvQkFBb0IscUJBQXFCLHVCQUF1QixFQUFFLFdBQVcsb0JBQW9CLHNCQUFzQixFQUFFLFlBQVksZUFBZSw4QkFBOEIsY0FBYyxpQkFBaUIsb0JBQW9CLHNEQUFzRCx1QkFBdUIsb0JBQW9CLEVBQUUsYUFBYSw2QkFBNkIsRUFBRSxVQUFVLGtCQUFrQiwwQ0FBMEMsd0JBQXdCLG9CQUFvQiw0QkFBNEIsRUFBRSxhQUFhLGdCQUFnQixFQUFFLHNCQUFzQixpQkFBaUIsb0JBQW9CLHVCQUF1QixpQkFBaUIsc0RBQXNELGdCQUFnQiwrQ0FBK0MsRUFBRSxnQkFBZ0IsK0NBQStDLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDBDQUEwQyxzQkFBc0IsaUJBQWlCLEVBQUUsb0NBQW9DLHNCQUFzQixnQkFBZ0IseUJBQXlCLEVBQUUsaUNBQWlDLHdEQUF3RCx5QkFBeUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsaURBQWlELCtCQUErQixFQUFFLHdDQUF3Qyx5QkFBeUIsb0JBQW9CLHdEQUF3RCw2QkFBNkIsOEJBQThCLDBCQUEwQixrQkFBa0IsaURBQWlELCtCQUErQixFQUFFLDZDQUE2QyxrQkFBa0IsRUFBRSw0REFBNEQsdUJBQXVCLEVBQUUsbUNBQW1DLHlCQUF5Qix5QkFBeUIsK0JBQStCLHdEQUF3RCxrQkFBa0IsaURBQWlELEVBQUUsOEJBQThCLHlCQUF5QixvQkFBb0IseUJBQXlCLDRDQUE0Qyx1QkFBdUIsbUJBQW1CLHdEQUF3RCxrQkFBa0IsaURBQWlELCtCQUErQixFQUFFLHlHQUF5Ryx3QkFBd0Isa0JBQWtCLGlDQUFpQyxFQUFFLG1EQUFtRCxpQ0FBaUMsRUFBRSx5R0FBeUcsMEJBQTBCLG9CQUFvQixpQ0FBaUMsRUFBRSx1Q0FBdUMseUJBQXlCLHdEQUF3RCxrQkFBa0IsaURBQWlELCtCQUErQixFQUFFLDJDQUEyQyxrQkFBa0IsRUFBRSwwREFBMEQsc0JBQXNCLCtCQUErQiw0QkFBNEIsZ0NBQWdDLDJCQUEyQixFQUFFLHFIQUFxSCxxQkFBcUIsRUFBRSwrREFBK0QseURBQXlELDBCQUEwQixFQUFFLCtDQUErQyxzQkFBc0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsRUFBRSxnQkFBZ0IsNENBQTRDLHFCQUFxQixtQkFBbUIsRUFBRSxtQ0FBbUMsd0JBQXdCLEVBQUUsMENBQTBDLHdCQUF3QiwwQkFBMEIsRUFBRSwrREFBK0Qsd0JBQXdCLEVBQUUseUNBQXlDLHdCQUF3QixFQUFFLEVBQUUsK0NBQStDLGdCQUFnQiw0Q0FBNEMscUJBQXFCLG1CQUFtQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwwQ0FBMEMscUJBQXFCLHdCQUF3QixFQUFFLCtEQUErRCxxQkFBcUIsRUFBRSx5Q0FBeUMscUJBQXFCLEVBQUUsRUFBRSxTQUFTLDZIQUE2SCxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGlCQUFpQixLQUFLLFlBQVksV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxhQUFhLFlBQVksVUFBVSxVQUFVLGFBQWEsY0FBYyxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLGFBQWEsY0FBYyxXQUFXLGlCQUFpQixNQUFNLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxZQUFZLG1CQUFtQixPQUFPLGFBQWEsWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxjQUFjLGNBQWMsV0FBVyxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxhQUFhLFdBQVcsYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksa0JBQWtCLE9BQU8sZ0JBQWdCLE1BQU0sZ0JBQWdCLE9BQU8sYUFBYSxhQUFhLGFBQWEsY0FBYyxZQUFZLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsWUFBWSxZQUFZLGtCQUFrQixPQUFPLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxjQUFjLFlBQVksWUFBWSxrQkFBa0IsT0FBTyxnQkFBZ0IsTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGFBQWEsaUJBQWlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sWUFBWSxXQUFXLGVBQWUsS0FBSyxlQUFlLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxlQUFlLE1BQU0sdUJBQXVCLEtBQUssS0FBSyxZQUFZLFdBQVcsZUFBZSxLQUFLLGVBQWUsTUFBTSxVQUFVLGVBQWUsTUFBTSxlQUFlLE1BQU0sdUhBQXVILHFDQUFxQyx5Q0FBeUMscUJBQXFCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLG9EQUFvRCxnQkFBZ0Isc0NBQXNDLHFDQUFxQyxHQUFHLFVBQVUsaUNBQWlDLDBCQUEwQiw0REFBNEQsb0NBQW9DLDZFQUE2RSxxQkFBcUIscUJBQXFCLGNBQWMsR0FBRyxjQUFjLDhCQUE4QixvQkFBb0IscUJBQXFCLHVCQUF1QixHQUFHLFdBQVcsb0JBQW9CLDBDQUEwQyxHQUFHLFlBQVksZUFBZSx1Q0FBdUMsY0FBYyxpQkFBaUIsb0JBQW9CLDRCQUE0Qiw0QkFBNEIsb0JBQW9CLEdBQUcsYUFBYSw2QkFBNkIsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQiw0QkFBNEIsUUFBUSxnQkFBZ0IsS0FBSyxHQUFHLHNCQUFzQixpQkFBaUIsb0JBQW9CLHVCQUF1QixpQkFBaUIsNEJBQTRCLGdCQUFnQiw0Q0FBNEMsR0FBRyxnQkFBZ0IsNENBQTRDLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDBDQUEwQyxzQkFBc0IsaUJBQWlCLDZCQUE2QixzQkFBc0IsZ0JBQWdCLHlCQUF5QixLQUFLLDBCQUEwQiw4QkFBOEIsOEJBQThCLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1EQUFtRCwrQkFBK0IsS0FBSywrQkFBK0IsOEJBQThCLG9CQUFvQiw4QkFBOEIsNkJBQTZCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG1EQUFtRCwrQkFBK0IsWUFBWSxrQkFBa0IsT0FBTywyQkFBMkIsdUJBQXVCLE9BQU8sS0FBSywwQkFBMEIsOEJBQThCLHlCQUF5QiwrQkFBK0IsOEJBQThCLGtCQUFrQixtREFBbUQsS0FBSyxxQkFBcUIsOEJBQThCLG9CQUFvQix5QkFBeUIsNENBQTRDLHVCQUF1QixtQkFBbUIsOEJBQThCLGtCQUFrQixtREFBbUQsK0JBQStCLDZEQUE2RCx3QkFBd0Isa0JBQWtCLGlDQUFpQyxPQUFPLDRCQUE0QixpQ0FBaUMsT0FBTyx5REFBeUQsMEJBQTBCLG9CQUFvQixpQ0FBaUMsT0FBTyxLQUFLLDhCQUE4Qiw4QkFBOEIsOEJBQThCLGtCQUFrQixtREFBbUQsK0JBQStCLGVBQWUsa0JBQWtCLE9BQU8sOEJBQThCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQywyQkFBMkIsdUJBQXVCLHFCQUFxQixTQUFTLG9CQUFvQix3REFBd0QsMEJBQTBCLFNBQVMsT0FBTyxLQUFLLEdBQUcsaUNBQWlDLDhDQUE4Qyx3QkFBd0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsS0FBSyxrQkFBa0IsNENBQTRDLHFCQUFxQixtQkFBbUIsMEJBQTBCLHdCQUF3QixPQUFPLGlDQUFpQyx3QkFBd0IsMEJBQTBCLE9BQU8sMkNBQTJDLHdCQUF3QixPQUFPLGdDQUFnQyx3QkFBd0IsT0FBTyxLQUFLLEdBQUcsK0NBQStDLG9CQUFvQiw0Q0FBNEMscUJBQXFCLG1CQUFtQiw0QkFBNEIscUJBQXFCLE9BQU8saUNBQWlDLHFCQUFxQix3QkFBd0IsT0FBTywyQ0FBMkMscUJBQXFCLE9BQU8sZ0NBQWdDLHFCQUFxQixPQUFPLEtBQUssR0FBRyxtQkFBbUI7QUFDcGxYO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQy9CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQzNRaUM7OztBQUdqQyxxQkFBcUIsaURBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDVnJCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNqQjFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUMzQnZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQ2xEbkI7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDNUYsWUFBcUk7O0FBRXJJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSVQsMExBQU8sYUFBYSxFOzs7Ozs7Ozs7Ozs7QUNabkM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0Msb0NBQW9DLGVBQWU7QUFDbkQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCLFVBQVUsVUFBVSxJQUFJLGNBQWMsZ0JBQWdCLHFDQUFxQyxZQUFZLFlBQVksWUFBWSxRQUFRO0FBQ3ZMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtREFBbUQ7QUFDaEYsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQSxzREFBc0QscUJBQXFCO0FBQzNFLHNEQUFzRCxhQUFhO0FBQ25FLGdEQUFnRCxpQkFBaUI7QUFDakUsK0NBQStDLDZCQUE2QjtBQUM1RSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBZSw4RkFBK0IsRTs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQWUsNEZBQTZCLEU7Ozs7Ozs7Ozs7OztBQ0E1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5QjtBQUNlO0FBQ0Y7O0FBRVg7QUFDTTtBQUNKOztBQU9QOztBQUlBOztBQUV0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDBCQUEwQiwrREFBVztBQUNyQyx1QkFBdUIsNERBQVE7QUFDL0IsdUJBQXVCLG1FQUFlOztBQUV0QztBQUNBO0FBQ0EseUJBQXlCLGlEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUIsOENBQUk7QUFDdkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFFBQVEsc0RBQVU7QUFDbEIsT0FBTztBQUNQLE1BQU0sc0RBQVU7QUFDaEIsTUFBTSxzREFBVTtBQUNoQixNQUFNLHNEQUFVO0FBQ2hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtRUFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxNQUFNLHNEQUFVO0FBQ2hCLEtBQUs7QUFDTCxJQUFJLDJEQUFPO0FBQ1gsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEI7Ozs7Ozs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDOzs7QUFHaEM7QUFDUCx5REFBeUQsT0FBTztBQUNoRTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFXO0FBQzVCLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AscURBQXFELE9BQU87QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1XaXJlK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAyMjYsIDIzNCwgMC43KTtcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjQyYTNhO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbnVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xcbiAgZm9udC1zaXplOiAxMjAlO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDsgfVxcblxcbmlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbjogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4NTRjO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXaXJlIE9uZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5uYXYgaDEge1xcbiAgICBtYXJnaW46IDA7IH1cXG5cXG4ubG9naW4tZGFzaGJvYXJkIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC45OCk7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyMjQsIDIwMSwgMC41KTsgfVxcblxcbi5kYXNoYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDIyNCwgMjAxLCAwLjUpO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjQlKTtcXG4gIGdyaWQtcm93OiA2NSUgMzAlO1xcbiAgZ3JpZC1nYXA6IDElOyB9XFxuICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtZ3JlZXRpbmcge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtdHJpcHMge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuOTgpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjQ1LCAyNDgsIDAuNyk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDsgfVxcbiAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLXJlcXVlc3QtZm9ybSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjQ1LCAyNDgsIDAuNyk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAxIC8gNDsgfVxcbiAgICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtcmVxdWVzdC1mb3JtIGgyIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLXJlcXVlc3QtZm9ybSAuZGVzdGluYXRpb24tbGlzdCB7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7IH1cXG4gIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1tZXNzYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogMiAvIDMgLyAyIC8gNTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTsgfVxcbiAgLmRhc2hib2FyZCAudHJpcC1wcmV2aWV3IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQ5JSk7XFxuICAgIGdyaWQtcm93OiA5JSA5MCU7XFxuICAgIGdyaWQtZ2FwOiAxJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMyAvIDIgLyA1OyB9XFxuICAgIC5kYXNoYm9hcmQgLnRyaXAtcHJldmlldyAudHJpcC1wcmV2aWV3LXRpdGxlLCAuZGFzaGJvYXJkIC50cmlwLXByZXZpZXcgLmRlc3RpbmF0aW9uLXByZXZpZXctdGl0bGUge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzOyB9XFxuICAgIC5kYXNoYm9hcmQgLnRyaXAtcHJldmlldyAudHJpcC1wcmV2aWV3LWRhdGEge1xcbiAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAyIC8gMjsgfVxcbiAgICAuZGFzaGJvYXJkIC50cmlwLXByZXZpZXcgLnRyaXAtcHJldmlldy1pbWFnZSwgLmRhc2hib2FyZCAudHJpcC1wcmV2aWV3IC5kZXN0aW5hdGlvbi1wcmV2aWV3LWltYWdlIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMiAvIDM7IH1cXG4gIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjk4KTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDUsIDI0OCwgMC43KTtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDIgLyAzOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLXllYXItcmV2aWV3IC55ZWFybHktc3BlbmRpbmcge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTsgfVxcbiAgICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyAueWVhcmx5LXNwZW5kaW5nIGgyLCAuZGFzaGJvYXJkIC5kYXNoYm9hcmQteWVhci1yZXZpZXcgLnllYXJseS1zcGVuZGluZyBwIHtcXG4gICAgICAgIG1hcmdpbjogMSU7IH1cXG4gICAgICAuZGFzaGJvYXJkIC5kYXNoYm9hcmQteWVhci1yZXZpZXcgLnllYXJseS1zcGVuZGluZyBoMiB7XFxuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLmxvZ2luLWRhc2hib2FyZCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5kYXNoYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXJvdzogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgICAgZ3JpZC1hcmVhOiBhdXRvOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICAgIGdyaWQtYXJlYTogYXV0bztcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcbiAgICAuZGFzaGJvYXJkIC50cmlwLXByZXZpZXcsIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1tZXNzYWdlIHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87IH1cXG4gICAgLmRhc2hib2FyZCAuZGFzaGJvYXJkLXllYXItcmV2aWV3IHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXG4gIC5kYXNoYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXJvdzogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC10cmlwcyB7XFxuICAgICAgZ3JpZC1hcmVhOiAxOyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICAgIGdyaWQtYXJlYTogMjtcXG4gICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgLmRhc2hib2FyZCAudHJpcC1wcmV2aWV3LCAuZGFzaGJvYXJkIC5kYXNoYm9hcmQtbWVzc2FnZSB7XFxuICAgICAgZ3JpZC1hcmVhOiA0OyB9XFxuICAgIC5kYXNoYm9hcmQgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgICAgZ3JpZC1hcmVhOiAzOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYnJlYWtwb2ludHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFpQkE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLHlEQUF1RDtFQUN2RCwwQ0FqQm9DO0VBa0JwQyx3RUFBd0U7RUFDeEUsY0FsQmdCO0VBbUJoQixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGlCQUFxQyxFQUFBOztBQUd2QztFQUNFLFVBQVU7RUFDVix5QkFuQ3VCO0VBb0N2QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixpREFwQzZDO0VBcUM3QyxrQkFwQ1c7RUFxQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGFBQWE7RUFDYixtQ0EzQ2dDO0VBNENoQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QixFQUFBO0VBTHpCO0lBT0ksU0FBUyxFQUFBOztBQUliO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlEQTdENkM7RUE4RDdDLFdBQVc7RUFDWCwwQ0FuRWtCLEVBQUE7O0FBc0VwQjtFQUNFLDBDQXZFa0I7RUF3RWxCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsWUFBWSxFQUFBO0VBUGQ7SUFVSSxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQixFQUFBO0VBWnRCO0lBZ0JJLGlEQWxGMkM7SUFtRjNDLGtCQWxGUztJQW1GVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQ0FBNEM7SUFDNUMsd0JBQXdCLEVBQUE7RUF0QjVCO0lBMEJJLGtCQTNGUztJQTRGVCxhQUFhO0lBQ2IsaURBOUYyQztJQStGM0Msc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDBDQUE0QztJQUM1Qyx3QkFBd0IsRUFBQTtJQWxDNUI7TUFxQ00sU0FBUyxFQUFBO0lBckNmO01BeUNNLGNBQWMsRUFBQTtFQXpDcEI7SUE4Q0ksa0JBL0dTO0lBZ0hULGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaURBbkgyQztJQW9IM0MsV0FBVztJQUNYLDBDQUE0QyxFQUFBO0VBbkRoRDtJQXVESSxrQkF4SFM7SUF5SFQsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpREEvSDJDO0lBZ0kzQyxXQUFXO0lBQ1gsMENBQTRDO0lBQzVDLHdCQUF3QixFQUFBO0lBaEU1QjtNQW1FTSxlQUFlO01BQ2YsU0FBUztNQUNULHdCQUF3QixFQUFBO0lBckU5QjtNQXlFTSx3QkFBd0IsRUFBQTtJQXpFOUI7TUE2RU0saUJBQWlCO01BQ2pCLFdBQVc7TUFDWCx3QkFBd0IsRUFBQTtFQS9FOUI7SUFvRkksa0JBckpTO0lBc0pULGlEQXZKMkM7SUF3SjNDLFdBQVc7SUFDWCwwQ0FBNEM7SUFDNUMsd0JBQXdCLEVBQUE7SUF4RjVCO01BMkZNLFNBQVMsRUFBQTtJQTNGZjtNQStGTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsa0JBQWtCLEVBQUE7TUFuR3hCO1FBc0dRLFVBQVUsRUFBQTtNQXRHbEI7UUEwR1EsOENBQTZDO1FBQzdDLGVBQWUsRUFBQTs7QUN2THZCO0VBRUU7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBR3hCO0lBQ0UscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxZQUFZLEVBQUE7SUFIZDtNQU1JLGVBQWUsRUFBQTtJQU5uQjtNQVVJLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtJQVhyQjtNQWVJLGVBQWUsRUFBQTtJQWZuQjtNQW1CSSxlQUFlLEVBQUEsRUFDaEI7O0FBSUw7RUFFRTtJQUNFLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsWUFBWSxFQUFBO0lBSGQ7TUFNSSxZQUFZLEVBQUE7SUFOaEI7TUFVSSxZQUFZO01BQ1osZUFBZSxFQUFBO0lBWG5CO01BZUksWUFBWSxFQUFBO0lBZmhCO01BbUJJLFlBQVksRUFBQSxFQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdpcmUrT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8vIGNvbG9yc1xcbiRlbGVtZW50Ymx1ZTogIzc0N2JhMTtcXG4kbGlnaHRlcmJsdWU6IHJnYmEoMTk5LCAyMjYsIDIzNCwgMC43KTtcXG4kZm9udGJsdWU6ICMyNDJhM2E7XFxuJGFjY2VudC10YW46ICNmN2UwYzk7XFxuJHNhbmR5LXRhbmdlcmluZTogI2UyODU0YztcXG4kbmF0dXJncmVlbjogIzJhNTkzNDtcXG5cXG4kYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0zcHggcmdiYSgwLDAsMCwwLjk4KTtcXG4kcm91bmRlZDogNXB4O1xcblxcbiRwcmltYXJ5LWJhY2tncm91bmQ6ICRsaWdodGVyYmx1ZTtcXG4kbG9nby1mb250OiAnV2lyZSBPbmUnLCBzYW5zLXNlcmlmO1xcbjtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLnBuZycpOyBcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodGVyYmx1ZTtcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAkZm9udGJsdWU7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bDpiZWZvcmV7XFxuICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xcbiAgZm9udC1zaXplOiAxMjAlO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbGlnaHRlbigkYWNjZW50LXRhbiwgMjAlKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbjogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2FuZHktdGFuZ2VyaW5lO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICBib3JkZXItcmFkaXVzOiAkcm91bmRlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiAkbG9nby1mb250O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5sb2dpbi1kYXNoYm9hcmQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGFjY2VudC10YW4sIC41KTtcXG59XFxuXFxuLmRhc2hib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRhY2NlbnQtdGFuLCAuNSk7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNCUpO1xcbiAgZ3JpZC1yb3c6IDY1JSAzMCU7XFxuICBncmlkLWdhcDogMSU7XFxuICBcXG4gIC5kYXNoYm9hcmQtZ3JlZXRpbmcge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZGFzaGJvYXJkLXRyaXBzIHtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRyb3VuZGVkO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkbGlnaHRlcmJsdWUsIDEwJSk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQtcmVxdWVzdC1mb3JtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogJHJvdW5kZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0ZXJibHVlLCAxMCUpO1xcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMSAvIDQ7XFxuXFxuICAgIGgyIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgLmRlc3RpbmF0aW9uLWxpc3Qge1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZGFzaGJvYXJkLW1lc3NhZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAkcm91bmRlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IDIgLyAzIC8gMiAvIDU7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkbGlnaHRlcmJsdWUsIDEwJSk7XFxuICB9XFxuXFxuICAudHJpcC1wcmV2aWV3IHtcXG4gICAgYm9yZGVyLXJhZGl1czogJHJvdW5kZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDklKTtcXG4gICAgZ3JpZC1yb3c6IDklIDkwJTtcXG4gICAgZ3JpZC1nYXA6IDElO1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0ZXJibHVlLCAxMCUpO1xcbiAgICBncmlkLWFyZWE6IDIgLyAzIC8gMiAvIDU7XFxuICAgIFxcbiAgICAudHJpcC1wcmV2aWV3LXRpdGxlLCAgLmRlc3RpbmF0aW9uLXByZXZpZXctdGl0bGV7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLnRyaXAtcHJldmlldy1kYXRhIHtcXG4gICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnRyaXAtcHJldmlldy1pbWFnZSwgLmRlc3RpbmF0aW9uLXByZXZpZXctaW1hZ2Uge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAyIC8gMztcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRyb3VuZGVkO1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0ZXJibHVlLCAxMCUpO1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDM7XFxuICAgIFxcbiAgICBwIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgXFxuICAgIC55ZWFybHktc3BlbmRpbmcge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gICAgICBcXG4gICAgICBoMiwgcCB7XFxuICAgICAgICBtYXJnaW46IDElO1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICBoMiB7XFxuICAgICAgICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcblxcblxcbkBpbXBvcnQgXFxcIl9icmVha3BvaW50c1xcXCI7XCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuXFxuICAubG9naW4tZGFzaGJvYXJkIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXJvdzogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAuZGFzaGJvYXJkLXRyaXBzIHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICAgIGdyaWQtYXJlYTogYXV0bztcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAudHJpcC1wcmV2aWV3LCAuZGFzaGJvYXJkLW1lc3NhZ2Uge1xcbiAgICAgIGdyaWQtYXJlYTogYXV0bztcXG4gICAgfVxcblxcbiAgICAuZGFzaGJvYXJkLXllYXItcmV2aWV3IHtcXG4gICAgICBncmlkLWFyZWE6IGF1dG87XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xcbiAgXFxuICAuZGFzaGJvYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgZ3JpZC1yb3c6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gIFxcbiAgICAuZGFzaGJvYXJkLXRyaXBzIHtcXG4gICAgICBncmlkLWFyZWE6IDE7XFxuICAgIH1cXG5cXG4gICAgLmRhc2hib2FyZC1yZXF1ZXN0LWZvcm0ge1xcbiAgICAgIGdyaWQtYXJlYTogMjtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLnRyaXAtcHJldmlldywgLmRhc2hib2FyZC1tZXNzYWdlIHtcXG4gICAgICBncmlkLWFyZWE6IDQ7XFxuICAgIH1cXG5cXG4gICAgLmRhc2hib2FyZC15ZWFyLXJldmlldyB7XFxuICAgICAgZ3JpZC1hcmVhOiAzO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcbmltcG9ydCBUcmF2ZWxlciBmcm9tIFwiLi9UcmF2ZWxlclwiXG5cblxuY2xhc3MgQWdlbmN5IGV4dGVuZHMgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgIHN1cGVyKGlkLCBuYW1lKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW5jeTsiLCJjbGFzcyBEZXN0aW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5pZCA9IGRlc3RpbmF0aW9uLmlkO1xuICAgIHRoaXMubmFtZSA9IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uO1xuICAgIHRoaXMuY29zdFBlckRheSA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgIHRoaXMuY29zdFBlclBlcnNvbiA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgdGhpcy5pbWFnZSA9IGRlc3RpbmF0aW9uLmltYWdlO1xuICAgIHRoaXMuYWx0VGV4dCA9IGRlc3RpbmF0aW9uLnRleHQ7XG4gIH1cbiAgXG4gIHJldHVybkRlc3RpbmF0aW9uTmFtZShpZCkge1xuICAgIGlmICh0aGlzLmlkID09PSBpZCl7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbjsiLCJjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyLm5hbWU7XG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlci50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy50cmlwcyA9IFtdO1xuICB9XG4gIHJldHVybkZpcnN0TmFtZUxhc3RJbml0aWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWUuc3BsaXQoJyAnKVswXSArICcgJyArIHRoaXMubmFtZS5zcGxpdCgnICcpWzFdWzBdO1xuICB9XG4gIFxuICBpc1RoaXNNeVRyaXAodHJpcCkge1xuICAgIGlmICh0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy50cmlwcy5wdXNoKHRyaXApXG4gICAgfVxuICB9XG5cbiAgZmluZFllYXJseVRyYXZlbENvc3QobGFzdFllYXIpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBpZiAobGFzdFllYXIgPCB0cmlwLmZpbmRUcmlwRW5kRGF0ZSgpLnJlcGxhY2UoLy0vZywgJy8nKSkge1xuICAgICAgICB0b3RhbCArPSB0cmlwLmNhbGN1bGF0ZVRvdGFsQ29zdCgpXG4gICAgICB9XG4gICAgICByZXR1cm4gdG90YWxcbiAgICB9LCAwKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyOyIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyaXBEYXRhLmlkXG4gICAgdGhpcy51c2VySUQgPSB0cmlwRGF0YS51c2VySUQ7XG4gICAgdGhpcy5oYXBwZW5pbmdEYXRhO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXBEYXRhLmRlc3RpbmF0aW9uSUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbkRhdGEgPSBkZXN0aW5hdGlvbkRhdGE7XG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwRGF0YS50cmF2ZWxlcnM7XG4gICAgdGhpcy5kYXRlID0gdHJpcERhdGEuZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcERhdGEuZHVyYXRpb247XG4gICAgdGhpcy5zdGF0dXMgPSB0cmlwRGF0YS5zdGF0dXM7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gdHJpcERhdGEuc3VnZ2VzdGVkQWN0aXZpdGllcztcbiAgfVxuXG4gIGZpbmRUcmlwRW5kRGF0ZSgpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSlcbiAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHRoaXMuZHVyYXRpb24pKVxuICAgIHJldHVybiBuZXcgRGF0ZShlbmREYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApXG4gIH1cblxuICB3aGVuSXNUaGlzVHJpcCh0b2RheSkge1xuICAgIGxldCBlbmREYXRlID0gdGhpcy5maW5kVHJpcEVuZERhdGUoKS5yZXBsYWNlKC8tL2csICcvJylcbiAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5kYXRlO1xuICAgIGlmIChlbmREYXRlID4gdG9kYXkgJiYgdGhpcy5kYXRlIDwgdG9kYXkpIHtcbiAgICAgIHRoaXMuaGFwcGVuaW5nRGF0YSA9ICdjdXJyZW50JztcbiAgICB9IGVsc2UgaWYgKGVuZERhdGUgPCB0b2RheSkge1xuICAgICAgdGhpcy5oYXBwZW5pbmdEYXRhID0gJ3Bhc3QnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhcHBlbmluZ0RhdGEgPSAndXBjb21pbmcnO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUFnZW50RmVlKHRvdGFsVHJhdmVsQ29zdCl7XG4gICAgbGV0IGFnZW50RmVlID0gdG90YWxUcmF2ZWxDb3N0LzEwO1xuICAgIHJldHVybiBhZ2VudEZlZVxuICB9XG5cbiAgY2FsY3VsYXRlVHJpcENvc3QoKSB7XG4gICAgbGV0IHRyaXBDb3N0UGVyUGVyc29uID0gdGhpcy5kZXN0aW5hdGlvbkRhdGEuY29zdFBlclBlcnNvbiArICh0aGlzLmRlc3RpbmF0aW9uRGF0YS5jb3N0UGVyRGF5ICogdGhpcy5kdXJhdGlvbilcbiAgICByZXR1cm4gdHJpcENvc3RQZXJQZXJzb24gKiB0aGlzLnRyYXZlbGVycztcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsQ29zdCgpIHtcbiAgICBsZXQgdHJhdmVsQ29zdCA9IHRoaXMuY2FsY3VsYXRlVHJpcENvc3QoKTtcbiAgICBsZXQgYWdlbnRGZWUgPSB0aGlzLmNhbGN1bGF0ZUFnZW50RmVlKHRyYXZlbENvc3QpO1xuICAgIHJldHVybiB0cmF2ZWxDb3N0ICsgYWdlbnRGZWVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgdHJpcFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1wcmV2aWV3Jyk7XG5jb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkLW1lc3NhZ2UnKVxuY29uc3QgcGFzdFRyaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3QtdHJpcHMnKVxuY29uc3QgdXBjb21pbmdUcmlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXR1cmUtdHJpcHMnKVxuY29uc3QgY3VycmVudFRyaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdHJpcHMnKVxuY29uc3QgdHJpcFByZXZpZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlwLXByZXZpZXctdGl0bGUnKTtcbmNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQnKVxuXG5leHBvcnQgY29uc3QgZG9tVXBkYXRlcyA9IHtcbiAgZGlzcGxheVRyYXZlbGVyTmFtZSh0cmF2ZWxlcil7XG4gICAgY29uc3QgZGFzaGJvYXJkR3JlZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkLWdyZWV0aW5nJylcbiAgICBkYXNoYm9hcmRHcmVldGluZy5pbm5lclRleHQgPSBcIkhlbGxvLCBcIiArICh0cmF2ZWxlci5yZXR1cm5GaXJzdE5hbWVMYXN0SW5pdGlhbCgpKVxuICB9LFxuXG4gIGFkZFRvRGVzdGluYXRpb25MaXN0KGRlc3RpbmF0aW9uKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLWxpc3QnKVxuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkZXN0aW5hdGlvbkxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gYCR7ZGVzdGluYXRpb24ubmFtZX1gXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtkZXN0aW5hdGlvbi5pZH1gKVxuICB9LFxuXG4gIHNob3dUcmlwKHBhcmVudCwgdHJpcCl7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgIGxpLmlubmVyVGV4dCA9IGAke3RyaXAuZGVzdGluYXRpb25EYXRhLm5hbWV9LCBEYXRlOiAke3RyaXAuZGF0ZX0sICR7dHJpcC5kdXJhdGlvbn0gZGF5cywgQ29zdDogJCR7dHJpcC5jYWxjdWxhdGVUb3RhbENvc3QoKS50b0ZpeGVkKDIpfSwgU3RhdHVzOiAke3RyaXAuc3RhdHVzfSwgVHJpcElEOiAke3RyaXAuaWR9YFxuICB9LFxuXG4gIGRpc3BsYXlVc2VyVHJpcHModHJhdmVsZXIpe1xuICAgIHRyYXZlbGVyLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBpZiAodHJpcC5oYXBwZW5pbmdEYXRhID09PSAncGFzdCcpIHtcbiAgICAgICAgdGhpcy5zaG93VHJpcChwYXN0VHJpcExpc3QsIHRyaXApO1xuICAgICAgfSBlbHNlIGlmICh0cmlwLmhhcHBlbmluZ0RhdGEgPT09ICd1cGNvbWluZycpIHtcbiAgICAgICAgdGhpcy5zaG93VHJpcCh1cGNvbWluZ1RyaXBMaXN0LCB0cmlwKTtcbiAgICAgIH0gZWxzZSBpZiAodHJpcC5oYXBwZW5pbmdEYXRhID09PSAnY3VycmVudCcpIHtcbiAgICAgICAgdGhpcy5zaG93VHJpcChjdXJyZW50VHJpcExpc3QsIHRyaXApO1xuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheVllYXJseUNvc3QodHJhdmVsZXIpIHtcbiAgICBsZXQgbGFzdFllYXIgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEZ1bGxZZWFyKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDEpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKVxuICAgIGNvbnN0IHllYXJDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC15ZWFyLWNvc3QnKTtcbiAgICB5ZWFyQ29zdC5pbm5lclRleHQgPSBgJCR7dHJhdmVsZXIuZmluZFllYXJseVRyYXZlbENvc3QobGFzdFllYXIpLnRvRml4ZWQoMil9YFxuICB9LFxuICBcbiAgZGlzcGxheUVzdGltYXRlKG5ld1RyaXAsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuY2hlY2tGaWVsZHMoKTtcbiAgICB0cmlwUHJldmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGNvbnN0IHRyaXBQcmV2aWV3RGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1wcmV2aWV3LWRlc3RpbmF0aW9uJyk7XG4gICAgY29uc3QgdHJpcFByZXZpZXdEZXBhcnR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1wcmV2aWV3LWxlYXZpbmcnKTtcbiAgICBjb25zdCB0cmlwUHJldmlld0R1cmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtcHJldmlldy1kdXJhdGlvbicpO1xuICAgIGNvbnN0IHRyaXBQcmV2aWV3VG90YWxDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtcHJldmlldy10b3RhbC1jb3N0Jyk7XG4gICAgY29uc3QgdHJpcFByZXZpZXdJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlwLXByZXZpZXctaW1hZ2UnKTtcbiAgICB0cmlwUHJldmlld1RpdGxlLmlubmVyVGV4dCA9IGBZb3VyIHRyaXAgdG8gJHtkZXN0aW5hdGlvbkRhdGEubmFtZX1gXG4gICAgdHJpcFByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRlc3RpbmF0aW9uRGF0YS5pbWFnZSlcbiAgICB0cmlwUHJldmlld0ltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgZGVzdGluYXRpb25EYXRhLmFsdFRleHQpXG4gICAgdHJpcFByZXZpZXdEZXN0aW5hdGlvbi5pbm5lckhUTUwgPSBgRGVzdGluYXRpb24gJHtkZXN0aW5hdGlvbkRhdGEubmFtZX1gXG4gICAgdHJpcFByZXZpZXdEZXBhcnR1cmUuaW5uZXJIVE1MID0gYERlcGFydGluZyBvbjogJHtuZXdUcmlwLmRhdGV9YFxuICAgIHRyaXBQcmV2aWV3RHVyYXRpb24uaW5uZXJIVE1MID0gYER1cmF0aW9uICR7bmV3VHJpcC5kdXJhdGlvbn1gXG4gICAgdHJpcFByZXZpZXdUb3RhbENvc3QuaW5uZXJIVE1MID0gYENvc3Q6ICQke25ld1RyaXAuY2FsY3VsYXRlVG90YWxDb3N0KCl9YFxuICB9LFxuXG4gIGNoZWNrRmllbGRzKCkge1xuICAgIGNvbnN0IHRyaXBTdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGF0ZScpXG4gICAgY29uc3QgdHJpcEVuZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRhdGUnKVxuICAgIGNvbnN0IHRyYXZlbGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmVsZXItY291bnQnKVxuICAgIGNvbnN0IHRyaXBEZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JylcbiAgICBjb25zdCBib29rSXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay10cmlwJyk7XG5cbiAgICBpZiAodHJpcFN0YXJ0RGF0ZS52YWx1ZSAmJiB0cmlwRW5kRGF0ZS52YWx1ZSAmJiB0cmF2ZWxlckNvdW50LnZhbHVlKSB7XG4gICAgICBib29rSXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0cmlwUHJldmlld1RpdGxlLmlubmVyVGV4dCA9IFwiUGxlYXNlIGZpbGwgb3V0IGZvcm0gY29tcGxldGVseSFcIlxuICAgIH1cbiAgfSxcblxuICBzaG93U3VjY2Vzc1Bvc3QoKSB7XG4gICAgY29uc3QgbWVzc2FnZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLXByZXZpZXctdGl0bGUnKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tcHJldmlldy1tZXNzYWdlJylcbiAgICB0cmlwUHJldmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGhpZ2hsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIG1lc3NhZ2VUaXRsZS5pbm5lclRleHQgPSBcIlJlcXVlc3Qgc3VibWl0dGVkIVwiXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSBcIllvdXIgdHJpcCBpcyBwZW5kaW5nLiBQbGVhc2Ugd2FpdCBmb3IgYW4gYWdlbnQgdG8gYXBwcm92ZSFcIlxuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9FeGN1cnNpT253YXJkLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYmFja2dyb3VuZC1pbWFnZS5wbmdcIjsiLCIvLyBBbiBleGFtcGxlIG9mIGhvdyB5b3UgdGVsbCB3ZWJwYWNrIHRvIHVzZSBhIENTUyAoU0NTUykgZmlsZVxuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9FeGN1cnNpT253YXJkLWxvZ28ucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLnBuZydcblxuaW1wb3J0IFRyaXAgZnJvbSAnLi9Ucmlwcyc7XG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9UcmF2ZWxlcidcbmltcG9ydCBBZ2VuY3kgZnJvbSAnLi9BZ2VuY3knXG5cbmltcG9ydCB7XG4gIGdldFRyYXZlbGVyLFxuICBnZXRUcmlwcyxcbiAgZ2V0RGVzdGluYXRpb25zLFxuICBhZGRUcmlwXG59IGZyb20gJy4vdXRpbGl0eS5qcyc7XG5cbmltcG9ydCB7XG4gIGRvbVVwZGF0ZXNcbn0gZnJvbSAnLi9kb21VcGRhdGVzJztcblxubGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKVxuXG4vLyBsb2dpblxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyk7XG5cbi8vIGRhc2hib2FyZFxuY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZCcpXG5jb25zdCB1cGNvbWluZ1RyaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1dHVyZS10cmlwcycpXG5jb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tcHJldmlldy1idXR0b24nKVxuLy8gdHJpcCByZXF1ZXN0IHNlbGVjdG9yc1xuY29uc3QgdHJpcFN0YXJ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1kYXRlJylcbmNvbnN0IHRyaXBFbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kYXRlJylcbmNvbnN0IHRyYXZlbGVyQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmVsZXItY291bnQnKVxuY29uc3QgdHJpcERlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLWxpc3QnKVxuXG4vLyBsZXQgdHJhdmVsZXJJRCA9IChNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDQ5KSlcbmxldCB0cmF2ZWxlcklEXG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IHRyYXZlbGVyUmVzdWx0cyA9IGdldFRyYXZlbGVyKHRyYXZlbGVySUQpXG4gIGNvbnN0IHRyaXBzUmVzdWx0cyA9IGdldFRyaXBzKClcbiAgY29uc3QgcGxhY2VSZXN1bHRzID0gZ2V0RGVzdGluYXRpb25zKClcbiAgICBcbiAgUHJvbWlzZS5hbGwoW3RyYXZlbGVyUmVzdWx0cywgdHJpcHNSZXN1bHRzLCBwbGFjZVJlc3VsdHNdKVxuICAgIC50aGVuKHZhbHVlcyA9PiB7XG4gICAgICBsZXQgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIodmFsdWVzWzBdKVxuICAgICAgbGV0IHRyaXBzID0gdmFsdWVzWzFdLm1hcCh0cmlwID0+IHtcbiAgICAgICAgbGV0IHBsYWNlID0gdmFsdWVzWzJdLmZpbmQocGxhY2UgPT4ge1xuICAgICAgICAgIHJldHVybiBwbGFjZS5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXcgVHJpcCh0cmlwLCBwbGFjZSlcbiAgICAgIH0pXG4gICAgICB0cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICB0cmlwLndoZW5Jc1RoaXNUcmlwKHRvZGF5KVxuICAgICAgICB0cmF2ZWxlci5pc1RoaXNNeVRyaXAodHJpcClcbiAgICAgIH0pXG4gICAgICB2YWx1ZXNbMl0uZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGRvbVVwZGF0ZXMuYWRkVG9EZXN0aW5hdGlvbkxpc3QoZGVzdGluYXRpb24pXG4gICAgICB9KVxuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJhdmVsZXJOYW1lKHRyYXZlbGVyKTtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVVzZXJUcmlwcyh0cmF2ZWxlcik7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlZZWFybHlDb3N0KHRyYXZlbGVyKTtcbiAgICB9KVxufVxuXG5jb25zdCBmaW5kRHVyYXRpb24gPSAoc3RhcnQsIGVuZCkgPT4ge1xuICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnQpO1xuICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZCk7XG4gIHJldHVybiAoZW5kRGF0ZS5nZXREYXRlKCkpIC0gKHN0YXJ0RGF0ZS5nZXREYXRlKCkpXG59XG5cbmNvbnN0IHJldHVyblRyaXBFc3RpbWF0ZSA9IChldmVudCkgPT4ge1xuICBnZXREZXN0aW5hdGlvbnMoKVxuICAgIC50aGVuKGRlc3RpbmF0aW9ucyA9PiB7XG4gICAgbGV0IGRlc3RpbmF0aW9uRGF0YSA9IGRlc3RpbmF0aW9ucy5maW5kKHBsYWNlID0+IHtcbiAgICAgIHJldHVybiBwbGFjZS5pZCA9PT0gcGFyc2VJbnQodHJpcERlc3RpbmF0aW9uLnZhbHVlKVxuICAgIH0pXG4gICAgbGV0IHN0YXJ0ID0gdHJpcFN0YXJ0RGF0ZS52YWx1ZTtcbiAgICBsZXQgZW5kID0gdHJpcEVuZERhdGUudmFsdWU7XG4gICAgbGV0IGR1cmF0aW9uID0gZmluZER1cmF0aW9uKHN0YXJ0LCBlbmQpO1xuICAgIGxldCBuZXdUcmlwID0gbmV3IFRyaXAoe1xuICAgICAgXCJpZFwiOiBEYXRlLm5vdygpLFxuICAgICAgXCJ1c2VySURcIjogdHJhdmVsZXJJRCxcbiAgICAgIFwiZGVzdGluYXRpb25JRFwiOiBwYXJzZUludCh0cmlwRGVzdGluYXRpb24udmFsdWUpLFxuICAgICAgXCJ0cmF2ZWxlcnNcIjogcGFyc2VJbnQodHJhdmVsZXJDb3VudC52YWx1ZSksXG4gICAgICBcImRhdGVcIjogc3RhcnQucmVwbGFjZUFsbChcIi1cIiwgXCIvXCIpLFxuICAgICAgXCJkdXJhdGlvblwiOiBkdXJhdGlvbixcbiAgICAgIFwic3RhdHVzXCI6ICdwZW5kaW5nJyxcbiAgICAgIFwic3VnZ2VzdGVkQWN0aXZpdGllc1wiOiBbJ2RvIHN0dWZmJ10sXG4gICAgfSwgZGVzdGluYXRpb25EYXRhKVxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZXQtZXN0aW1hdGUnKSkge1xuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5RXN0aW1hdGUobmV3VHJpcCwgZGVzdGluYXRpb25EYXRhKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9vay10cmlwJykpIHtcbiAgICBhZGRUcmlwKG5ld1RyaXApXG4gICAgZG9tVXBkYXRlcy5zaG93VHJpcCh1cGNvbWluZ1RyaXBMaXN0LCBuZXdUcmlwKVxuICAgIGRvbVVwZGF0ZXMuc2hvd1N1Y2Nlc3NQb3N0KG5ld1RyaXApXG4gICAgfVxuICB9KVxufTtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWRhc2hib2FyZCcpO1xuICBjb25zdCBsb2dpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tdXNlci1uYW1lJyk7XG4gIGNvbnN0IGxvZ2luUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tcGFzc3dvcmQnKTtcbiAgaWYgKGxvZ2luTmFtZS52YWx1ZS5zbGljZSgwLCA4KSA9PT0gJ3RyYXZlbGVyJyAmJiBsb2dpblBhc3N3b3JkLnZhbHVlID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICB0cmF2ZWxlcklEID0gbG9naW5OYW1lLnZhbHVlLnNsaWNlKDgsIDEwKVxuICAgIHBhZ2VMb2FkKCk7XG4gICAgZGFzaGJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgbG9naW5TY3JlZW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykgICBcbiAgfSBlbHNlIGlmIChsb2dpbk5hbWUudmFsdWUuc2xpY2UoMCwgOCkgPT09ICd0cmF2ZWxlcicgJiYgbG9naW5QYXNzd29yZC52YWx1ZSAhPT0gJ3RyYXZlbDIwMjAnKSB7XG4gICAgbGV0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9naW5TY3JlZW4uYXBwZW5kQ2hpbGQod2FybmluZylcbiAgICB3YXJuaW5nLmlubmVyVGV4dCA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgcGFzc3dvcmQhXCJcbiAgfSBlbHNlIGlmIChsb2dpbk5hbWUudmFsdWUuc2xpY2UoMCwgOCkgIT09ICd0cmF2ZWxlcicpIHtcbiAgICBsZXQgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2dpblNjcmVlbi5hcHBlbmRDaGlsZCh3YXJuaW5nKVxuICAgIHdhcm5pbmcuaW5uZXJUZXh0ID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZSFcIlxuICB9XG59XG5cbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9naW4pXG4vLyBoaWdobGlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21VcGRhdGVzLmRpc3BsYXlIaWdobGlnaHQpXG5kYXNoYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXR1cm5UcmlwRXN0aW1hdGUpXG4vLyB3aW5kb3cub25sb2FkID0gcGFnZUxvYWQoKTsiLCJpbXBvcnQgRGVzdGluYXRpb24gZnJvbSAnLi9EZXN0aW5hdGlvbidcblxuXG5leHBvcnQgY29uc3QgZ2V0VHJhdmVsZXIgPSAodXNlcklkKSA9PiB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJHt1c2VySWR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4odHJhdmVsZXIgPT4gdHJhdmVsZXIpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUcmlwcyA9ICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbih0cmlwcyA9PiB0cmlwcy50cmlwcylcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlc3RpbmF0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGVzdGluYXRpb25zID0+IGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9ucy5kZXN0aW5hdGlvbnMpXG4gICAgLnRoZW4oZGVzdGluYXRpb25zID0+IGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9ucy5tYXAoZGVzdGluYXRpb24gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEZXN0aW5hdGlvbihkZXN0aW5hdGlvbilcbiAgICB9KSlcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRyaXAgPSAodHJpcCkgPT4ge1xuICBsZXQgcG9zdEJvZHkgPSB7XG4gICAgaWQ6IHRyaXAuaWQsXG4gICAgdXNlcklEOiB0cmlwLnVzZXJJRCxcbiAgICBkZXN0aW5hdGlvbklEOiB0cmlwLmRlc3RpbmF0aW9uSUQsIFxuICAgIHRyYXZlbGVyczogdHJpcC50cmF2ZWxlcnMsIFxuICAgIGRhdGU6IHRyaXAuZGF0ZSwgXG4gICAgZHVyYXRpb246IHRyaXAuZHVyYXRpb24sIFxuICAgIHN0YXR1czogdHJpcC5zdGF0dXMsIFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllc1xuICB9XG4gIGNvbnNvbGUubG9nKHBvc3RCb2R5KVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3RCb2R5KVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUcmlwID0gKGlkLCBzdGF0dXMsIHN1Z2dlc3RlZEFjdGl2aXRpZXMpID0+IHtcbiAgbGV0IHBvc3RCb2R5ID0ge1xuICAgIGlkOiBpZCxcbiAgICBzdGF0dXM6IHN0YXR1cywgXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogc3VnZ2VzdGVkQWN0aXZpdGllc1xuICB9XG4gIGNvbnNvbGUubG9nKHBvc3RCb2R5KVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VwZGF0ZVRyaXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdEJvZHkpXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRyaXAgPSAodHJpcElEKSA9PiB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcy8ke3RyaXBJRH1gLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxufSJdLCJzb3VyY2VSb290IjoiIn0=