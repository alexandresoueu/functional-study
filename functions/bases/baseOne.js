//function declararion
const goodMorning = () => {
  return 'Good Morning Friend!'
}

// console.log(goodMorning())


// Function SUM 
const sum = (first, second) => {
  return first + second
}
//TEST SUM - Should return a sum between two params

const scenarios = [
  {
    "one": 1,
    "two": 3,
    "result": 4 
  },
  {
    "one": 1,
    "two": 4,
    "three": 9,
    "result": 5
  },
  {
    "one": 1,
    "result": NaN
  }
]

for (let index = 0; index < scenarios.length; index++) {
  const element = scenarios[index];

  if (Number.isNaN(element.result && Number.isNaN(sum(element.one, element.two, element.three)))) {
    console.log('OK =>',element.result)
  } else if (sum(element.one, element.two, element.three) === element.result) {
   console.log('OK')
  } else {
    console.log('FAIL')
  }
}

//RESULT SUM
// let result = sum(1, 2)
// console.log('Right: ', result)

// result = sum(2, 3, 4, 5, 6)
// console.log('Ignore::', result)

// result = sum(1)
// console.log('1 + Undefined ::: ', result)
