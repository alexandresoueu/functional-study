const generateNumbersBetween = (min, max) => {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    const random = parseInt(Math.random() * (max - min + 1)) + min 
    resolve(random)
  })
}

const getNumber = generateNumbersBetween(1, 60)
  .then(num => num * 10)
  .then(num100 => `the number is ${num100}`)
  .then(console.log)
