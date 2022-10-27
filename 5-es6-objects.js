//object property shorthand

const name = 'Ritik'
const userAge = 20

const user = {
    name: name,
    age: userAge,
    location: 'Nashik'
}

// object destructuring

const product = {
    label: 'Red Notebook',
    stock: 201,
    price: 3,
    salePrice: undefined
}

const {label, stock, price, salePrice} = product

console.log(label, price, stock, salePrice)

const fun = (price, {label, stock}) => {
console.log(label,stock)
}

fun(27, product)
 