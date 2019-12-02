console.log("WORKINGS")

// var graph = {
// nodes: [
// {
// id: 1,
// name: "Jane Hutton",
// qualities: "{Hair: Red}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.738Z",
// updated_at: "2019-12-02T06:44:39.738Z"
// },
// {
// id: 2,
// name: "Hiro Smith",
// qualities: "{Hair: Black}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.751Z",
// updated_at: "2019-12-02T06:44:39.751Z"
// },
// {
// id: 3,
// name: "Marie Alex",
// qualities: "{Hair: Rainbow}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.760Z",
// updated_at: "2019-12-02T06:44:39.760Z"
// },
// {
// id: 4,
// name: "Roxanne Mecure",
// qualities: "{Hair: Black and white}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.766Z",
// updated_at: "2019-12-02T06:44:39.766Z"
// },
// {
// id: 5,
// name: "Debra",
// qualities: "{Hair: Black}",
// user_id: 1,
// created_at: "2019-12-02T06:44:39.772Z",
// updated_at: "2019-12-02T06:44:39.772Z"
// },
// {
// id: 6,
// name: "Harry Powers",
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

var svg = d3.select("body").append('svg'),
    width = svg.attr("width"),
    height = svg.attr("height");

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(600 / 2 , 600 / 2));


d3.json("/characters/all/d3json#", function(error, graph) {
  if (error) throw error;

  graph.links.forEach(function(d){
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
        .text(function(d) { return d.name; });

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
        .style("fill", "#d9d9d9")
        .style("stroke", "#969696")
        .style("stroke-width", "1px")
        .style("text-align","center")
        .attr("cx", function (d) { return d.x+6; })
        .attr("cy", function(d) { return d.y-6; });

    label
        .attr("x", function(d) { return d.x; })
        .attr("y", function (d) { return d.y; })
        .style("font-size", "15px").style("fill", "#4393c3");
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart()
  simulation.fix(d);
}

function dragged(d) {
  simulation.fix(d, d3.event.x, d3.event.y);
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  simulation.unfix(d);
}