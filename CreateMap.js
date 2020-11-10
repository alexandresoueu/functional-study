Array.prototype.myOwnMap = function (fn) {
  const newArray = []
  for(let index = 0; index < this.length; index++) {
    const result = fn(this[index], index, this)
    newArray.push(result)
  }
  return newArray
}

const cellphone = ['screen', 'button', 'camera']

const result = cellphone.myOwnMap(item => item[0])

console.log(result)
