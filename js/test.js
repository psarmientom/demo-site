// alert("It's working")
console.log("This is a string")

console.log(4 + 7)
console.log(16 % 3)
console.log(+"a" + 8)

console.log(10>9)

const myVariable = "This is my first Variable"

const myNumber = 1 

console.log("4" +3)
console.log ("This is the number" + " " + "8")

var thisVar = 8
var thisVar = 10

let otherVar = 2
otherVar = 4

const lastVar = 7
const otheOne = 2

const firstOne = 1,
secondOne = 2,
thirdOne = 3

const year = 2022
console.log("This is the year " + year)
console.log(typeof year)

const sum = console.log(lastVar + otheOne)

function myFirstFunction(veggie1, veggie2, veggie3){
    console.log("I'm buying " + veggie1 + ", " + veggie2 + ", " + veggie3 + ".")
}

myFirstFunction("broccoli", "potato", "zuchinni")
// myFirstFunction("potato")

function mySecondFunction(arg) {
    return "something"
}
console.log(mySecondFunction())

const MyThirdFunction = function() {
    console.log("Function on a variable")
}
MyThirdFunction()

const myArrowFunction = (parameter) => {
    console.log("this is an arrow function")
}
myArrowFunction("argument")

const myArrowFunction1 = () => {
    console.log("this is an arrow function")
}
// const myArrowFunction1 = _ => {
//     console.log("this is an arrow function")
// }
// const myArrowFunction2 = (par1, par2) => par1 + par2 


const myCar = {
    'brand name'   : "Ferarri",
    color   : "yellow",
    year    : "2022"
}
const myCarBrand = myCar['brand name']
const myCarColor = myCar.color

console.log(myCarColor + " " + myCarBrand)

// Undefined 
let myEmptyVar 
console.log(myEmptyVar + " 'this is empty'")

// const selectId = document.querySelector("#bestIceCream")
const selectId = document.getElementById("bestIceCream")
console.log(selectId)

const selecClass = document.querySelector(".section2 .box")
// const selecClass = document.querySelector(".section2")
console.log(selecClass)

const selectTag = document.querySelector("p")
console.log(selectTag)

// const selectAttribute = document.querySelector[data-type=="fruityIceCream"]
// console.log(selectAttribute)

const selectAll = document.querySelectorAll("p")
console.log(selectAll)

const myArray = ["item1", "item2", "item3"]
console.log(myArray)

const myArrayLong = [
    "item1",
    "item2",
    "item3",
    "item4"
]
console.log(myArrayLong)

const arrayArrays = [
    [1, 2, 3],
    [1, 2, 3]
  ]
  console.log(arrayArrays)

  const shopphingList = ["eggs", "milk", "cheese", "apples", "grapes", "strawberries", "tomatoes", "bread"]

  const applePos = shopphingList.indexOf("bread")
  console.log(applePos)
  console.log(shopphingList.length)
  shopphingList.unshift("butter", "flour")
  shopphingList.push("lettuce", "broccoli")
  shopphingList.shift()
  shopphingList.pop()
  shopphingList.splice(4, 0, "beans", "peppers")
  shopphingList.splice(2, 3)

  console.log(shopphingList)