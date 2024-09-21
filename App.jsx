import { useState } from 'react'
//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
// import './App.css'
//  import Signup from './component/Signup'
//  import MentorContactInfoForm from './component/MentorContactInfoForm'
//  import CandidateContactInfoForm from './component/StudentContactInfoForm'
// import Test from './component/Test'
import TODO from './component/TODO'
import TodoList from './component/TodoList'
import MyComponent from './component/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TODO/>
     <TodoList/>
     <MyComponent/>
  
    </>
  )
}

export default App
