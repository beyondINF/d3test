function DrawSvgShapes() {
    var h = 50;
    var w = 500;

    var svg = d3.select("body")
        .append("svg")
        .attr("class", "svg-item");

    var dataset = [5, 10, 15, 20, 25];

    var circles = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("fill", "blue");

    circles.attr("cx", function (d, i) {
        return (i * 50) + 25;
    })
        .attr("cy", h / 2)
        .attr("r", function (d) {
            return d;
        });
}