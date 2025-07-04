import React from 'react'
import Main from './components/Main'
import { Route, Routes } from 'react-router'
import Spage from './components/Spage'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/spage/:id' element={<Spage/>}/>
    </Routes>  
      

  )
}

export default App