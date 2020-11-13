// arrow function
const greetings = () => console.log('Happy new year.')
greetings()

const yupee = name => `Yupee you are here ${name}`

console.log(yupee('Bob Marley'))

const sum = (...numbers) => {
  // console.log(typeof numbers)
  let total = 0
  for (let n of numbers) {
    total += n
  }
  return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(sum(10, 9, 8, 7, 6))
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// this -- Should have the keyword function if don't work
Array.prototype.last = function () {
  console.log(this[this.length -1])
}

Array.prototype.first = function () {
  console.log(this[0])
}

const numbers = [1, 2, 3, 80]
numbers.last()
numbers.first()
