const nums = [1, 2, 3, 4, 5]
const double = (num, index, a) => num * 2 + index + a.length

// const result = nums.map(element => double(element))

console.log(nums.map(double))
// console.log(result)

const names = ['Alex', 'Falcon', 'Michael', 'João']
const firstLetter = name => name[0]

const letters = names.map(firstLetter)
console.log(names, letters)
