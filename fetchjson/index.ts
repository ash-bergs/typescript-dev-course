// to run this file without creating a compiled file, use the command: ts-node index.ts
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// inside an interface we are defining the structure of an object
// inside an interface or type we are free to ignore the properties that we don't need
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
  const todo = response.data as Todo
  console.log(`
  The title is "${todo.title}" and the id is ${todo.id} and the completed status is ${todo.completed}
  `)
})