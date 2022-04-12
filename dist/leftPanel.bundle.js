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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/LeftPanel.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LeftPanel.ts":
/*!**************************!*\
  !*** ./src/LeftPanel.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar LeftPanel = /** @class */ (function () {\r\n    function LeftPanel() {\r\n    }\r\n    LeftPanel.init = function () {\r\n        for (var i = 0; i < 3; i++) {\r\n            this.currentThree.push(this.colors[this.rand(0, 7)]);\r\n        }\r\n        this.addThreeBallToLeftPanel();\r\n    };\r\n    LeftPanel.createBall = function (bgColor) {\r\n        var d = document.createElement(\"div\");\r\n        d.className = \"ball\";\r\n        d.style.cssFloat = \"left\";\r\n        d.style.marginLeft = \"5px\";\r\n        d.style.background = bgColor;\r\n        return d;\r\n    };\r\n    LeftPanel.addThreeBallToLeftPanel = function () {\r\n        var balls = document.getElementById(\"balls\");\r\n        var colors = [];\r\n        for (var i = 0; i < 3; i++) {\r\n            var col = this.colors[this.rand(0, 7)];\r\n            balls.appendChild(this.createBall(col));\r\n            colors.push(col);\r\n        }\r\n        this.currentThree = colors;\r\n    };\r\n    LeftPanel.randomThree = function () {\r\n        var colors = [];\r\n        for (var i = 0; i < 3; i++) {\r\n            var col = this.colors[this.rand(0, 7)];\r\n            colors.push(col);\r\n        }\r\n        return colors;\r\n    };\r\n    LeftPanel.replaceLeftBalls = function () {\r\n        document.getElementById(\"balls\").innerHTML = '';\r\n        this.addThreeBallToLeftPanel();\r\n    };\r\n    LeftPanel.rand = function (min, max) {\r\n        return Math.floor(Math.random() * (max - min) + min);\r\n    };\r\n    LeftPanel.currentThree = [];\r\n    LeftPanel.colors = [\"red\", \"green\", \"blue\", \"orange\", \"yellow\", \"pink\", \"black\"];\r\n    return LeftPanel;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftPanel);\r\n\n\n//# sourceURL=webpack:///./src/LeftPanel.ts?");

/***/ })

/******/ });