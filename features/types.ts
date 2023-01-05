// type: a shortcut to refer to the different properties and functions a value has
// interface: a custom type we define to tell TypeScript what a value should look like
// everything that can be assigned to a variable has a type
const today = new Date()
// today is a Date object, which has a bunch of properties and methods
// because TS has an internal definition of what a Date object looks like, we can use it to check if we're using the right properties and methods
// and get autocomplete suggestions by typing today. and pressing ctrl + space

const person = {
  age: 20
}

class Color {

}
// use this Class to make a new instance of a Color object
const red = new Color()
// hovering over red shows that it is a Color object thanks to the definition of what a Color object looks like
 