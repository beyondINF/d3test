function DrawBarChart() {
    var dataSet = [];                        
    for (var i = 0; i < 50; i++) {           
        var newNumber = Math.random() * 50;
        dataSet.push(newNumber);             
    }

    console.log(dataSet)
    d3.select("body")
        .selectAll("div")
        .data(dataSet)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function (d) {
            var barHeight = d * 5;
            return barHeight + "px";
        });
}