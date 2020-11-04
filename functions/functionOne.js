//function declararion
function goodMorning() {
  console.log('Good Morning Friend!')
}

goodMorning()

//function expression
const gretings = function () {
  console.log('Maybe is not morning!')
}

gretings()

function sum(first, second) {
  return first + second
}

let result = sum(1, 2)
console.log('Right: ', result)

result = sum(2, 3, 4, 5, 6)
console.log('Ignore::', result)

result = sum(1)
console.log('1 + Undefined ::: ', result)