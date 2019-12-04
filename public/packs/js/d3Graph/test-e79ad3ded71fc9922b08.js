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

console.log("WORKINGS"); // var graph = {
// nodes: [
// {
// id: 1,
// name: "J",
// qualities: "{Hair: Red}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.738Z",
// updated_at: "2019-12-02T06:44:39.738Z"
// },
// {
// id: 2,
// name: "H",
// qualities: "{Hair: Black}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.751Z",
// updated_at: "2019-12-02T06:44:39.751Z"
// },
// {
// id: 3,
// name: "M",
// qualities: "{Hair: Rainbow}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.760Z",
// updated_at: "2019-12-02T06:44:39.760Z"
// },
// {
// id: 4,
// name: "R",
// qualities: "{Hair: Black and white}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.766Z",
// updated_at: "2019-12-02T06:44:39.766Z"
// },
// {
// id: 5,
// name: "D",
// qualities: "{Hair: Black}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.772Z",
// updated_at: "2019-12-02T06:44:39.772Z"
// },
// {
// id: 6,
// name: "H",
// qualities: "{}",
// user_id: 1,
// created_at: "2019-12-02T07:52:26.376Z",
// updated_at: "2019-12-02T07:52:26.376Z"
// }
// ],
// links: [
// {
// id: 1,
// character_id: 1,
// character2: 2,
// affiliation: "Cousin",
// created_at: "2019-12-02T06:44:39.800Z",
// updated_at: "2019-12-02T06:44:39.800Z"
// },
// {
// id: 2,
// character_id: 1,
// character2: 4,
// affiliation: "Friend",
// created_at: "2019-12-02T06:44:39.811Z",
// updated_at: "2019-12-02T06:44:39.811Z"
// },
// {
// id: 3,
// character_id: 2,
// character2: 3,
// affiliation: "Friend",
// created_at: "2019-12-02T06:44:39.819Z",
// updated_at: "2019-12-02T06:44:39.819Z"
// },
// {
// id: 4,
// character_id: 2,
// character2: 5,
// affiliation: "Couple",
// created_at: "2019-12-02T06:44:39.830Z",
// updated_at: "2019-12-02T06:44:39.830Z"
// },
// {
// id: 5,
// character_id: 3,
// character2: 5,
// affiliation: "Friend",
// created_at: "2019-12-02T06:44:39.843Z",
// updated_at: "2019-12-02T06:44:39.843Z"
// }
// ]
// }
//CSS FILE IS TEMPLATE.SCSS

var svg = d3.select("body").append('svg'),
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
    node.attr("r", 10).style("color", "#d9d9d9") //Change this to change color
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
    console.log(d); // d3.select(this)["_groups"][0][0].style("fill", "red")

    d3.select(this)["_groups"][0][0].style.color = "red";
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

;

/***/ })

/******/ });
//# sourceMappingURL=test-e79ad3ded71fc9922b08.js.map