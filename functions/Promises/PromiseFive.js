const workingOrNot = (value, errorChance) => {
  return new Promise((resolve, reject) => {
    try {
      con.log(nemo)
      if(Math.random() < errorChance) {
        reject('There is a error!')
      } else {
        resolve(value)
      }
     }catch(e) {
       resolve(e)
     }
  })
}

workingOrNot('Testing...', 0.5)
  .then(item => console.log(`Value: ${item}`))
  .then(
    values => consol.log(`Show this::: ${values}`),
    err => console(`FAIL :::: ${err}`)
  )
  .then(() => console.log('NEMO'))
  .catch(err => console.log(`Error: ${err} `))
  .then(() => console.log('DORI'))
