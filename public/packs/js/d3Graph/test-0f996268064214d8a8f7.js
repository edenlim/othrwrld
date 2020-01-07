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

console.log("test.js is WORKING"); //<------ D3 ------>

var svg = d3.select("#d3div").append('svg'),
    width = svg.attr("width"),
    height = svg.attr("height");
var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
  return d.id;
})).force("charge", d3.forceManyBody().strength(-50)).force("center", d3.forceCenter(800 / 2, 800 / 2));
d3.json("/characters/all/d3json#", function (error, graph) {
  if (error) throw error;
  graph.links.forEach(function (d) {
    d.source = d.character_id;
    d.target = d.character2;
  });
  var link = svg.append("g").style("stroke", "#aaa").selectAll("line").data(graph.links).enter().append("line");
  var node = svg.append("g").attr("class", "nodes").selectAll("circle").data(graph.nodes).enter().append("circle").attr("r", 6).on("dblclick", dblclick).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
  var label = svg.append("g").attr("class", "labels").selectAll("text").data(graph.nodes).enter().append("text").attr("class", "label").text(function (d) {
    return d.name;
  }).style('text-anchor', "middle").style('dominant-baseline', "hanging").attr("y", 5);
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
    node.attr("r", 10).style("fill", "#d9d9d9") //Change this to change color
    .style("stroke", "#969696").style("stroke-width", "1px").style("text-align", "center").attr("cx", function (d) {
      return d.x + 6;
    }).attr("cy", function (d) {
      return d.y - 6;
    });
    label.attr("x", function (d) {
      return d.x + 5;
    }).attr("y", function (d) {
      return d.y - 25;
    }).style("font-size", "10px").style("fill", "#4393c3");
  }
});

function dblclick(d) {
  if (!d3.event.active) {
    simulation.alphaTarget(0.3).restart();
  }

  if (d.fixed == true) {
    d.fx = null;
    d.fy = null;
    d.fixed = false;
    d3.select(this).select("circle").style("fill", "#ccc");
  } else {
    d.fx = d.x;
    d.fy = d.y;
    d.fixed = true;
    console.log(d3.select(this)["_groups"][0][0]);
    console.log(d3.select(this));
    console.log(d3.select(this).select("circle")); // d3.select(this)["_groups"][0][0].style("fill", "red")

    d3.select(this).select("_groups"[0][0]).select("circle").style("fill", "red");
  }
}

;

function dragstarted(d) {
  if (!d3.event.active) {
    simulation.alphaTarget(0.3).restart();
  }

  d.fx = d.x;
  d.fy = d.y;
}

;

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

;

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);

  if (d.fixed == true) {
    d.fx = d.x;
    d.fy = d.y;
  } else {
    d.fx = null;
    d.fy = null;
  }
}

; //<------ JS ------>

var rlschart = document.getElementById("rls");
rlschart.onClick(function () {
  console.log("clicked");
});

/***/ })

/******/ });
//# sourceMappingURL=test-0f996268064214d8a8f7.js.map