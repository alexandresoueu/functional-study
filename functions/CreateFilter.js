const cart = [
  { name: 'Pen', quantity: 10, price: 8.00 },
  { name: 'Print', quantity: 4, price: 2.00 },
  { name: 'Notebook', quantity: 7, price: 5.00 },
  { name: 'Pencil', quantity: 15, price: 1.00 },
  { name: 'backpack', quantity: 2, price: 10.00 }
]

Array.prototype.myOwnFilter = function(fn) {
  const newArray = []

  for (let index = 0; index < this.length; index++) {
    if(fn(this[index], index, this)) {
      newArray.push(this[index])
    }
  }
  return newArray
}

const moreThanFive = item => item.quantity > 5
const validItem = cart.myOwnFilter(moreThanFive)

console.log(validItem)
