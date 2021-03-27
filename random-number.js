function RandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function GenerateRandomNumbers() {
  let numbers = [];

  for (let i = 0; i < 20; i++) {
    let x = RandomNumber();
    // let x = d3.randomNormal(0, 1);

    if (!numbers.includes(x)) {
      numbers.push(x);
    } else {
      i--;
    }
  }
  // var numbers = d3.range(20).map(d3.randomNormal(20, 5));
  // var numbers = d3.range(20).map(d3.randomExponential(.02));
  return numbers;
}
// var numbers = d3.range(10).map(d3.randomNormal(20, 5));
// console.log(values);

function GenerateNormalNumbers(){
  var numbers = d3.range(20).map(d3.randomNormal(20, 5));
  return numbers;
}

function GenerateUniformNumbers(){
  var numbers = d3.range(20).map(d3.randomUniform(1, 100));
  return numbers;
}

function GenerateExponentialNumbers(){
  var numbers = d3.range(20).map(d3.randomExponential(.02));
  return numbers;
}