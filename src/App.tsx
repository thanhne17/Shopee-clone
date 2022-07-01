import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
