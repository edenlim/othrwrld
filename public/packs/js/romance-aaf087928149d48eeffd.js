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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/romance.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/romance.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/romance.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/eden/originalProject/GAProject4/othrwrld/app/javascript/packs/romance.js: Unexpected token (8:23)\n\n   6 | const cursorYOffset = -5;\n   7 | var hearts = [];\n>  8 | function generateHeart(300, 300, null, null, 1)\n     |                        ^\n   9 | {\n  10 |     var before = Date.now();\n  11 | var id = setInterval(frame, 5);\n    at Object.raise (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.unexpected (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Object.parseIdentifierName (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10327:18)\n    at Object.parseIdentifier (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10305:23)\n    at Object.parseBindingAtom (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8718:17)\n    at Object.parseMaybeDefault (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8778:25)\n    at Object.parseAssignableListItem (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8760:23)\n    at Object.parseBindingList (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8752:24)\n    at Object.parseFunctionParams (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11387:24)\n    at Object.parseFunction (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Object.parseFunctionStatement (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11004:17)\n    at Object.parseStatementContent (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10694:21)\n    at Object.parseStatement (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseTopLevel (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10587:10)\n    at Object.parse (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:12097:10)\n    at parse (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:12148:38)\n    at parser (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\n    at runSync (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at /Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/core/lib/transform.js:34:34\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ })

/******/ });
//# sourceMappingURL=romance-aaf087928149d48eeffd.js.map