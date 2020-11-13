const cart = [
  { name: 'Pen', quantity: 10, price: 8.00 },
  { name: 'Print', quantity: 4, price: 2.00 },
  { name: 'Notebook', quantity: 7, price: 5.30 },
  { name: 'Pencil', quantity: 15, price: 1.09 },
  { name: 'backpack', quantity: 2, price: 10.00 }
]

const getTotal = item => item.quantity * item.price

const sum = (acc, element) => acc + element

const totalAmount = cart.map(getTotal).reduce(sum)

console.log(totalAmount)
