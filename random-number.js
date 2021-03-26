let TheNumbers = [];

function RandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

for (let i = 0; i < 20; i++) {
  let x = RandomNumber();

  if (!TheNumbers.includes(x)) {
    TheNumbers.push(x);
  } else {
    i--;
  }
}
