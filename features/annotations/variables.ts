// annotations as they relate to variables
// covers content from section 2 to section 4 of the TypeScript: The Complete Developer's Guide course on Udemy
const apples: number = 5
// the : and the word after it is the annotation - `: number`
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null
// nothingMuch is special - it has a type that matches its value
// there are a couple of other types that do this in TS - undefined, null, and void
let nothing: undefined = undefined

// arrays
let colors: string[] = ['red', 'green', 'blue']
// the square brackets after the variable name indicate that it is an array of strings
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false, true]

// classes
class Car {
  
  }
let car: Car = new Car()
// car is an instance of the Car class

// object literal
// this syntax always throws me off a little
// the separator between the key and the value is a colon
let point: { x: number; y: number } = {
  x: 10, 
  y: 20
}

// functions
// const logNumber = (i: number) => {
//   console.log(i)
// }
// how do we add annnotations to this function?
// what properties do we care about with a function?
//* what arguments does it take in 
//* what values is it expected to return
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}
// the : and the set of parentheses after the variable name annotates the arguments that the function takes in
// the arrow after the parentheses annotates the return value of the function
// the full annotation is: `(i: number) => void`
// the void annotation means that the function does not return anything


// A note on type inference
// TS can figure out what type of value a variable refers to - and it could do that for most of the variables in this file
// TS will figure out the type of value a variable refers to based on the initial value we assign to it
// TS will not figure out the type of value a variable refers to if we declare it on one line and initialize it later

// so when are we supposed to use annotations?

// 1) when a function returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}'
/** const coordinates = JSON.parse(json) */
// if we hover over coordinates, we see that it is of type any
// TS doesn't know what the return value of JSON.parse is going to be - it could be anything
/** coordinates.whateverIWant */
// this doesn't throw an error because TS doesn't know what the return value of JSON.parse is going to be, so it allows us to access any property on it
// to fix this we need to add a type annotation for an object with x and y properties
const coordinates: { x: number; y: number } = JSON.parse(json)

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}
// foundWord is of type any because TS doesn't know what the value of foundWord is going to be until we add `: boolean` to the declaration

// 3) when we want a variable to have a type that can't be inferred
// a rare example
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
// type inference immediately assigns numberAboveZero a type of boolean
// but we want it to be a number (for whatever reason, to be sure this is bad code) 
// so we will use the | operator to tell TS that it can be a boolean or a number

// and when are we supposed to use type inference?
// pretty much everywhere else
// we will rely on type inference as much as possible

