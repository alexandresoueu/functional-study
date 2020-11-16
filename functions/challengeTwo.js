const cart = [
  { name: 'Pen', quantity: 10, price: 8.00, fragil: true },
  { name: 'Print', quantity: 4, price: 2.00, fragil: false },
  { name: 'Notebook', quantity: 7, price: 5.00, fragil: true },
  { name: 'Pencil', quantity: 15, price: 1.00, fragil: true },
  { name: 'backpack', quantity: 2, price: 10.0, fragil: false }
]

/**
 * 1. fragil equal true
 * 2. quantity  and price = total
 * 3. total amount
 */

 const amount = cart
  .filter(item => item.fragil)
  .map(item => item.quantity * item.price)
  .reduce((acc, element) => {
    const newQuantity = acc.quantity + 1
    const newTotal = acc.total + element
    console.log('reduce ::: ', acc, element)
    return {
      quantity: newQuantity,
      total: newTotal,
      media: newTotal / newQuantity
    }
  }, { quantity: 0, total: 0, media: 0 })
  //.media


 console.log(amount)
