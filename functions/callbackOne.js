const exec = (func, valueOne, valueTwo) => {
  return func(valueOne, valueTwo)
}

const sum = (a, b) => console.log(a + b)
const sub = (a, b) => console.log(a - b)
exec(sum, 10, 20)
exec(sub, 30, 15)

const subtrair = (a, b) => a - b

const result = exec(subtrair, 20, 10)

console.log('RESULT ::: ', result)

const cowBack = () => console.log('IRRAAA COWBACK')

setInterval(cowBack, 5000)

setInterval(() => console.log('Nemo swimming'), 2498)
