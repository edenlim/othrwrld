console.log("test.js is WORKING")

//<------ D3 ------>
var svg = d3.select("#d3div").append('svg'),
    width = svg.attr("width"),
    height = svg.attr("height");

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-50))
    .force("center", d3.forceCenter(800 / 2, 800 / 2));


d3.json("/characters/all/d3json#", function(error, graph) {
    if (error) throw error;

    graph.links.forEach(function(d) {
        d.source = d.character_id;
        d.target = d.character2;
    });

    var link = svg.append("g")
        .style("stroke", "#aaa")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line");

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 6)
        .on("dblclick", dblclick)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    var label = svg.append("g")
        .attr("class", "labels")
        .selectAll("text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("class", "label")
        .text(function(d) { return d.name; })
        .style('text-anchor', "middle")
        .style('dominant-baseline', "hanging")
        .attr("y", 5);

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("r", 10)
            .style("fill", "#d9d9d9") //Change this to change color
            .style("stroke", "#969696")
            .style("stroke-width", "1px")
            .style("text-align", "center")
            .attr("cx", function(d) { return d.x + 6; })
            .attr("cy", function(d) { return d.y - 6; });

        label
            .attr("x", function(d) { return d.x + 5; })
            .attr("y", function(d) { return d.y - 25; })
            .style("font-size", "10px").style("fill", "#4393c3");
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

        console.log(d3.select(this)["_groups"][0][0])
        console.log(d3.select(this))
        console.log(d3.select(this).select("circle"))
        // d3.select(this)["_groups"][0][0].style("fill", "red")
        d3.select(this).select("_groups"[0][0]).select("circle").style("fill", "red")

    }
};

function dragstarted(d) {
    if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
};

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
};

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    if (d.fixed == true) {
        d.fx = d.x;
        d.fy = d.y;
    } else {
        d.fx = null;
        d.fy = null;
    }
};

//<------ JS ------>
var hide = true;
var svgdiv = document.getElementById("d3div")
svgdiv.hidden = true;
var rlschart = document.getElementById("rls");

rlschart.addEventListener("click",function(){
    console.log("clicked")
    if(hide === true){
        svgdiv.hidden = false;
        hide = false;
    } else {
        svgdiv.hidden = true;
        hide = true;
    }
})