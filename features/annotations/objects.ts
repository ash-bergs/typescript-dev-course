const profile = {
  name: "Marty", 
  age: 30,
  coords: {
    lat: 0,
    lng: 15
  },
  // method to update age
  // ES2015 syntax
  setAge(age: number): void {
    this.age = age
  }
}

// destructuring with annotations
const { age } = profile
// if we want to put a type annotation on this 
// to do this we use a : after the bracket
// and then give the structure of the object we want to destructure
const { age }: { age: number } = profile

const { coords : { lat, lng } } = profile
const { coords: { lat, lng} } : { coords: { lat: number, lng: number } } = profile



