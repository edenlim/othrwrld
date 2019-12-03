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

var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));
var duration = 3000;
var speed = 0.5;
var cursorXOffset = 0;
var cursorYOffset = -50;
var hearts = [];

function generateHeart(x, y, xBound, xStart, scale) {
  var heart = document.createElement("DIV");
  heart.setAttribute('class', 'heart');
  brd.appendChild(heart);
  heart.time = duration;
  heart.x = x;
  heart.y = y;
  heart.bound = xBound;
  heart.direction = xStart;
  heart.style.left = heart.x + "px";
  heart.style.top = heart.y + "px";
  heart.scale = scale;
  heart.style.transform = "scale(" + scale + "," + scale + ")";
  if (hearts == null) hearts = [];
  hearts.push(heart);
  return heart;
}

var down = false;
var event = null;

document.onmousedown = function (e) {
  down = true;
  event = e;
};

document.onmouseup = function (e) {
  down = false;
};

document.onmousemove = function (e) {
  event = e;
};

document.ontouchstart = function (e) {
  down = true;
  event = e.touches[0];
};

document.ontouchend = function (e) {
  down = false;
};

document.ontouchmove = function (e) {
  event = e.touches[0];
};

var before = Date.now();
var id = setInterval(frame, 5);
var gr = setInterval(check, 100);

function frame() {
  var current = Date.now();
  var deltaTime = current - before;
  before = current;

  for (i in hearts) {
    var heart = hearts[i];
    heart.time -= deltaTime;

    if (heart.time > 0) {
      heart.y -= speed;
      heart.style.top = heart.y + "px";
      heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
    } else {
      heart.parentNode.removeChild(heart);
      hearts.splice(i, 1);
    }
  }
}

function check() {
  if (down) {
    var start = 1 - Math.round(Math.random()) * 2;
    var scale = Math.random() * Math.random() * 0.8 + 0.2;
    var bound = 30 + Math.random() * 20;
    generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=romance-5337689f5f64fe987fff.js.map