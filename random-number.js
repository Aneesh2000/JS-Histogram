function RandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function GenerateRandomNumbers() {
  let numbers = [];

  for (let i = 0; i < 20; i++) {
    let x = RandomNumber();

    if (!numbers.includes(x)) {
      numbers.push(x);
    } 
    else {
      i--;
    }
  }

  return numbers;
}
