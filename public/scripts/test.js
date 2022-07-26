//import User, { printName, printAge } from '../../node_modules/@scottish-government/pattern-library/src/users.js'
import User, { printName, printAge } from '/src/users.js'

const user = new User('Bob', 11)
console.log(user)
printName(user)
