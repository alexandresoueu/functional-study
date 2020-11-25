const generateNumbersBetween = (min, max, blockNumbers) => {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1)) + min
      if (blockNumbers.includes(random)) {
        reject('duplicated number!')
      } else {
        resolve(random)
      }
    })
  })
}

async function generateMegaSena(quantityNumbers, trying = 1) {
  try {
    const numbers = []

    for (let _ of Array(quantityNumbers).fill()) {
      numbers.push(await generateNumbersBetween(1, 60, numbers))
    }
    return numbers
  } catch (e) {
    if(trying > 10) {
      throw 'Errorrrrrr.......'
    } else {
      return generateMegaSena(quantityNumbers, trying + 1)
    }
  }

}

// generateNumbersBetween(1, 5, [1, 2, 4])
//   .then(console.log)
//   .catch(console.log)


generateMegaSena(20)
  .then(console.log)
  .catch(console.log)