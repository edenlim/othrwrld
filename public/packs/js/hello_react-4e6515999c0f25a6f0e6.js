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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/eden/originalProject/GAProject4/othrwrld/app/javascript/packs/hello_react.jsx: Unexpected token (27:13)\n\n  25 |   ReactDOM.render(\n  26 |         {/*<Hello name=\"React\" />*/}\n> 27 |         <App/>,\n     |              ^\n  28 |     document.body.appendChild(document.createElement('div')),\n  29 |   )\n  30 | })\n    at Object.raise (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.unexpected (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Object.parseExprAtom (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9627:20)\n    at Object.parseExprAtom (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOpBaseRightExpr (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9150:34)\n    at Object.parseExprOpRightExpr (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9143:21)\n    at Object.parseExprOp (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9106:27)\n    at Object.parseExprOpBaseRightExpr (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9150:17)\n    at Object.parseExprOpRightExpr (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9143:21)\n    at Object.parseExprOp (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9106:27)\n    at Object.parseExprOps (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9066:17)\n    at Object.parseMaybeConditional (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseExprListItem (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10297:18)\n    at Object.parseCallExpressionArguments (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9407:22)\n    at Object.parseSubscript (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9315:29)\n    at Object.parseSubscripts (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9231:19)\n    at Object.parseExprSubscripts (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9220:17)\n    at Object.parseMaybeUnary (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseExpression (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:8925:23)\n    at Object.parseStatementContent (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10785:23)\n    at Object.parseStatement (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseBlock (/Users/eden/originalProject/GAProject4/othrwrld/node_modules/@babel/parser/lib/index.js:11203:10)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-4e6515999c0f25a6f0e6.js.map