// type inference only works for the return value of a function
// but we lose the benefit of catching mistakes when we don't annotate the return value of a function

/** different ways to annotate fn declarations */
const add = (a: number, b: number): number => {
  return a + b
}

function divide (a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

// a function that doesn't return anything
// can still return null or undefined
const logger = (message: string): void => {
  console.log(message)
}

// we'll never reach the end of this function 
// we'll always throw an error
const throwError = (message: string): never => {
  throw new Error(message)
}

// destructuring with annotations
const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast : { date: Date, weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}
// ES2015 destructuring syntax with typescript annotations
const todaysWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)


