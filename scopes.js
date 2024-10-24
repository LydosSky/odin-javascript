let globalAge = 23;

function printAge(age) {
  var varAge = 34;

  if (age > 0) {
    const constAge = age * 2;
    console.log(constAge);
  }

  console.log(constAge);
}

printAge(globalAge);

function makeAdding(firstNumber) {
  const first = firstNumber;
  return function resulting(secondNumber) {
    const second = secondNumber;
    return first + second;
  };
}

const add5 = makeAdding(5);
console.log(add5);
