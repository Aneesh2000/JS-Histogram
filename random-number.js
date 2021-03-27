function RandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function GenerateRandomNumbers(NoReplac = true) {
  let numbers = [];

  if (!NoReplac) {
    for (let i = 0; i < 20; i++) {
      let x = RandomNumber();
      // let x = d3.randomNormal(0, 1);

      if (!numbers.includes(x)) {
        numbers.push(x);
      } else {
        i--;
      }
    }
  } else {
    for (let i = 0; i < 20; i++) {
      let x = RandomNumber();
      numbers.push(x);
    }
  }
  // var numbers = d3.range(20).map(d3.randomNormal(20, 5));
  // var numbers = d3.range(20).map(d3.randomExponential(.02));
  console.log(numbers);
  return numbers;
}

// var numbers = d3.range(10).map(d3.randomNormal(20, 5));
// console.log(values);

function GenerateNormalNumbers(mean, deviation) {
  console.log(mean);
  var numbers = d3.range(20).map(d3.randomNormal(mean, deviation));
  return numbers;
}

function GenerateUniformNumbers(min, max) {
  var numbers = d3.range(20).map(d3.randomUniform(min, max));
  return numbers;
}

function GenerateExponentialNumbers(lambda) {
  var numbers = d3.range(20).map(d3.randomExponential(lambda));
  return numbers;
}
