// sum(3)(4)(5)

//calculate(3)(7)(fn)

const sum = (a, b, c = 0) => {
  return a + b + c
}

const result = sum(1,2,3)
// console.log(result)

const calculate = (valueOne) => {
  return function(valueTwo) {
    return function(action) {
      return action(valueOne,valueTwo)
    }
  }
}

const resultCalc = calculate(5)(2)(sum)
console.log(resultCalc)