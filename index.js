//with/without replacement
let rCheckbox = document.getElementById("Replacement_checkbox");
let Mainbtn = document.getElementById("main_btn");

Mainbtn.addEventListener("click", () => {
  document.getElementById("histogram_div").innerHTML = "";
  let TheNumbers;
  if (rCheckbox.checked) {
    TheNumbers = GenerateRandomNumbers();
  } else {
    TheNumbers = GenerateRandomNumbers(false);
  }
  GenerateHistogram(TheNumbers);
});

//FOr Normal
let meanElem = document.getElementById("normal_mean");
let deviationElem = document.getElementById("normal_deviation");

document.getElementById("main_Normal").addEventListener("click", () => {
  document.getElementById("histogram_div").innerHTML = "";
  let TheNumbers = GenerateNormalNumbers(
    meanElem.value | 0,
    deviationElem.value | 1
  );
  GenerateHistogram(TheNumbers);
});

//for Uniform
let UminElem = document.getElementById("uniform_min");
let UmaxElem = document.getElementById("uniform_max");

document.getElementById("main_Uniform").addEventListener("click", () => {
  document.getElementById("histogram_div").innerHTML = "";
  let TheNumbers = GenerateUniformNumbers(UminElem | 0, UmaxElem | 100);
  GenerateHistogram(TheNumbers);
});

//Exponential
let lambdaVal = document.getElementById("expone_lambda");

document.getElementById("main_Exponential").addEventListener("click", () => {
  document.getElementById("histogram_div").innerHTML = "";
  let TheNumbers = GenerateExponentialNumbers(lambdaVal | 1);
  GenerateHistogram(TheNumbers);
});

function GenerateHistogram(TheNumbers) {
  //let TheNumbers = TheNumbers;

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
