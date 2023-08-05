import React from 'react'
import { Routes, Route } from "react-router-dom"
import Body from './components/Body'
import Navbar from './components/Navbar'
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam'
import ContactUs from './components/ContactUs/ContactUs'
import Donate from './components/Redirects/Donate'
import PageNotFound from './components/Redirects/PageNotFound'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Navbar /><Body /></>}/>
        <Route path='/meet' element={<><Navbar /><MeetTheTeam /></>}/>
        <Route path='/contact' element={<><Navbar /><ContactUs /></>}/>
        <Route path='/donate' element={<Donate />}/>
      </Routes>
    </div>
  )
}

export default App