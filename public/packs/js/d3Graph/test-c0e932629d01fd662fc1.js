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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/d3Graph/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/d3Graph/test.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/d3Graph/test.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("WORKINGS");
var graph = {
  "nodes": [{
    "id": 1,
    "name": "A"
  }, {
    "id": 2,
    "name": "B"
  }, {
    "id": 3,
    "name": "C"
  }, {
    "id": 4,
    "name": "D"
  }, {
    "id": 5,
    "name": "E"
  }, {
    "id": 6,
    "name": "F"
  }, {
    "id": 7,
    "name": "G"
  }, {
    "id": 8,
    "name": "H"
  }, {
    "id": 9,
    "name": "I"
  }, {
    "id": 10,
    "name": "J"
  }],
  "links": [{
    "source_id": 1,
    "target_id": 2
  }, {
    "source_id": 1,
    "target_id": 5
  }, {
    "source_id": 1,
    "target_id": 6
  }, {
    "source_id": 2,
    "target_id": 3
  }, {
    "source_id": 2,
    "target_id": 7
  }, {
    "source_id": 3,
    "target_id": 4
  }, {
    "source_id": 8,
    "target_id": 3
  }, {
    "source_id": 4,
    "target_id": 5
  }, {
    "source_id": 4,
    "target_id": 9
  }, {
    "source_id": 5,
    "target_id": 10
  }]
};
var svg = d3.select("body").append('svg'),
    width = svg.attr("width"),
    height = svg.attr("height");
var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
  return d.id;
})).force("charge", d3.forceManyBody().strength(-400)).force("center", d3.forceCenter(1000 / 2, 1000 / 2));
console.log(width); //d3.json(jsonvar, function(error, graph) {
//if (error) throw error;

graph.links.forEach(function (d) {
  d.source = d.source_id;
  d.target = d.target_id;
});
var link = svg.append("g").style("stroke", "#aaa").selectAll("line").data(graph.links).enter().append("line");
var node = svg.append("g").attr("class", "nodes").selectAll("circle").data(graph.nodes).enter().append("circle").attr("r", 6).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
var label = svg.append("g").attr("class", "labels").selectAll("text").data(graph.nodes).enter().append("text").attr("class", "label").text(function (d) {
  return d.name;
});
simulation.nodes(graph.nodes).on("tick", ticked);
simulation.force("link").links(graph.links);

function ticked() {
  link.attr("x1", function (d) {
    return d.source.x;
  }).attr("y1", function (d) {
    return d.source.y;
  }).attr("x2", function (d) {
    return d.target.x;
  }).attr("y2", function (d) {
    return d.target.y;
  });
  node.attr("r", 20).style("fill", "#d9d9d9").style("stroke", "#969696").style("stroke-width", "1px").attr("cx", function (d) {
    return d.x + 6;
  }).attr("cy", function (d) {
    return d.y - 6;
  });
  label.attr("x", function (d) {
    return d.x;
  }).attr("y", function (d) {
    return d.y;
  }).style("font-size", "20px").style("fill", "#4393c3");
} //});


function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  simulation.fix(d);
}

function dragged(d) {
  simulation.fix(d, d3.event.x, d3.event.y);
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  simulation.unfix(d);
}

/***/ })

/******/ });
//# sourceMappingURL=test-c0e932629d01fd662fc1.js.map