const cart = [
  { name: 'Pen', quantity: 10, price: 8.00 },
  { name: 'Print', quantity: 4, price: 2.00 },
  { name: 'Notebook', quantity: 7, price: 5.00 },
  { name: 'Pencil', quantity: 15, price: 1.00 },
  { name: 'backpack', quantity: 2, price: 10.00 }
]

const getName = item => item.name
const quantityMoreThanFive = item => item.quantity > 5
const quantityMoreThanZero = item => item.quantity >= 0 // all items
const quantityTheMost = item => item.quantity >= 100 // none items

const validItem = cart.filter(quantityMoreThanFive).map(getName)
console.log(validItem)
