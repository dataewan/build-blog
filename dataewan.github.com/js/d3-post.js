
var width = 600,
    height= 400;

var plot = d3.select("svg").append("g")

var data = [];

for (i = 0; i < 20; i++){
    data.push(Math.random()*10);
}

var xscale = d3.scale.linear()
  .domain([0, 20])
  .range([0, width]);

var yscale = d3.scale.linear()
  .domain(d3.extent(data))
  .range([height, 0]);

plot.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cx", function(d, i) { return xscale(i); } )
    .attr("cy", function(d) { return yscale(d); });
