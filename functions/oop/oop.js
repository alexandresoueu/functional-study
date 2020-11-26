//constructor function
function Products (name, price, discount = 0.15) {
  this.name = name
  this.price = price
  this.discount = discount

  this.totalPrice = function () {
    return this.price * (1 - this.discount)
  }
}

const prodOne = new Products('Pencil', 0.90)
console.log('Product One === ', prodOne.name)
const prodTwo = new Products('keyboard', 29.90)

console.log('Price = ', prodOne.price)
console.log('Final Price = ', prodOne.totalPrice())