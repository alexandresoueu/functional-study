class Product {
  constructor(name, price, discount) {
    this._name = name
    this.price = price
    this.discount = discount
  }

  get name() {
    return `Method Product: ${this._name}`
  }
  
  set name(newName) {
    this._name = newName.toUpperCase()
  }

  get price() {
    return this._price
  }

  set price(newPrice) {
    if(newPrice >= 0) {
      this._price = newPrice
    }
  }

  get priceTotal() {
    return this.price * (1 - this.discount)
  }
}

const productOne = new Product('Cellphone', 3000.99)
productOne.name = 'notebook'
console.log('Product one ==> ', productOne.name)

const productTwo = new Product('mouse ===> ', 200.99, 0.5)

console.log(productTwo.price)
productTwo.price = - 30
console.log(productTwo.priceTotal)