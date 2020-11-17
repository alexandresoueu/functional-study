const generateNumbersBetween = (min, max, time) => {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1)) + min 
      resolve(random)
    }, time)
  })
}

const generateRandomNumber = () => {
  return Promise.all([
    generateNumbersBetween(1, 8, 4000),
    generateNumbersBetween(10, 40, 2000),
    generateNumbersBetween(5, 7, 3000),
    generateNumbersBetween(1, 60, 1000),
  ])
}

console.time('Time Promise')
generateRandomNumber()
  .then(console.log)
  .then(() => {
    console.timeEnd('Time Promise')
  })