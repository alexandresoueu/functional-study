const waitFor = (time = 2000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('executing promise...')
      resolve()
    }, time)
  })
}

const returnValue = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 3000)
  })
}

async function execute() {
  let value = await returnValue()
  await waitFor(2000)
  console.log(`gooooooooo -- ${value}`)
  await waitFor(4000)
  console.log(`went -- ${value + 10}`)
  await waitFor(1000)
  console.log(`goneeee -- ${value + 20}`)

  return value + 5 // working with then
}
//execute().then(console.log)

async function realExecute() {
  const showValue = await execute()
  console.log(showValue)
}

realExecute()