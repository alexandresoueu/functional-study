function morning() {
  console.log('Morning')
}

const evening = function() {
  console.log('Evening')
}

//Pass a function as param to other function
function something(fn) {
  console.log(typeof fn)
  if(typeof fn === 'function') {
    fn()
  }
}
something(3)
something(morning)
something(evening)

//Return a function from a other function

function power(base) {
  return function(expo) {
    return Math.pow(base, expo)
  }
}

const powerTwo = power(2)
console.log(powerTwo(8))

const power34 = power(3)(4)
console.log(power34)