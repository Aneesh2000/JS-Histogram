document.getElementById("main_btn").addEventListener("click", () => {
  document.getElementById("histogram_div").innerHTML = "";
  GenerateHistogram();
});

function GenerateHistogram() {
  let TheNumbers = GenerateRandomNumbers();
  document.getElementById("theData").innerHTML = TheNumbers;
  min = d3.min(TheNumbers);
  max = d3.max(TheNumbers);
  let domain = [min, max];

  
  var margin = { top: 30, right: 30, bottom: 30, left: 50 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var x_axis = d3.scaleLinear().domain(domain).range([0, width]);
  var histogram = d3
    .histogram()
    .domain(x_axis.domain())
    .thresholds(x_axis.ticks(20));

  var bins = histogram(TheNumbers);
  var svg = d3
    .select("#histogram_div")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x_axis));

  var y_axis = d3
    .scaleLinear()
    .range([height, 0])
    .domain([
      0,
      d3.max(bins, function (d) {
        return d.length;
      }),
    ]);

  svg.append("g").call(d3.axisLeft(y_axis));

  svg
    .selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("transform", function (d) {
      return "translate(" + x_axis(d.x0) + "," + y_axis(d.length) + ")";
    })
    .attr("width", function (d) {
      return x_axis(d.x1) - x_axis(d.x0) - 1;
    })
    .attr("height", function (d) {
      return height - y_axis(d.length);
    })
    .style("fill", "#0000ff");
}
