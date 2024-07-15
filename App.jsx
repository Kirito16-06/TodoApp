import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-slate-700 font-serif w-auto text-yellow-50'>Todo App</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
