import './App.css'
import Main from './components/Main/Main'
import Login from './components/Login/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/admin' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
