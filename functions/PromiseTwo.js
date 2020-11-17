// setTimeout(() => {
//   console.log('nanannanana nana') 
//   setTimeout(() => {
//     console.log('au au au au')
//     setTimeout(() => {
//       console.log('biro biro')
//     }, 2000)
//   }, 2000)
// }, 2000)

console.log('====================')

const waitingFor = (time = 2000) => {
  return new Promise( resolve => {
    setTimeout(() => {
      console.log('Resolving the promise...')
      resolve('WOOOOOOOW')
    }, time)
  })
}

const name = waitingFor()
  .then(() => waitingFor())
  .then(waitingFor())

console.log(name)