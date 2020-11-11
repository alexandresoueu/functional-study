const cart = [
  { name: 'Pen', quantity: 10, price: 8.00 },
  { name: 'Print', quantity: 4, price: 2.00 },
  { name: 'Notebook', quantity: 7, price: 5.30 },
  { name: 'Pencil', quantity: 15, price: 1.09 },
  { name: 'backpack', quantity: 2, price: 10.00 }
]

Array.prototype.myOwnReduce = function(fn, initial) {
  let acc = initial

  for (let index = 0; index < this.length; index++) {
    if(!acc && index === 0) {
      acc = this[index]
      continue
    }
    acc = fn(acc, this[index], index, this)
  }
  return acc
}

const getTotal = item => item.quantity * item.price

const sum = (acc, element) => acc + element

const totalAmount = cart.map(getTotal).myOwnReduce(sum)

console.log(totalAmount)
