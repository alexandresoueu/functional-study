let aba = 1
console.log(aba)

let promise = new Promise((deliveryPromise) => {
  deliveryPromise(['ale', 'alezinho', 'alezaum'])//value, obj, array
})

const firstElement = array => {
  return array[0]
}

const firstWord = word => {
  return word[0]
}

const toUpperCaseLetter = letter => {
  return letter.toUpperCase()
}
promise
  .then(firstElement)
  .then(firstWord)
  .then(toUpperCaseLetter)
  .then(console.log)
