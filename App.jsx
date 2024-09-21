import { useState } from 'react'
import TODO from './component/TODO'
import TodoList from './component/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TODO/>
     <TodoList/>
  
    </>
  )
}

export default App
