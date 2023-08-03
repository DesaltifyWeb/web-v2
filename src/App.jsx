import React from 'react'
import { Routes, Route } from "react-router-dom"
import Body from './components/Body'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam'
import ContactUs from './components/ContactUs/ContactUs'
import Donate from './components/Redirects/Donate'
import PageNotFound from './components/Redirects/PageNotFound'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Navbar /><Body /><Footer /></>}/>
        <Route path='/meet' element={<><Navbar /><MeetTheTeam /><Footer /></>}/>
        <Route path='/contact' element={<><Navbar /><ContactUs /><Footer /></>}/>
        <Route path='/donate' element={<Donate />}/>
        <Route path="*" element={<><Navbar /><PageNotFound /><Footer /></>} />
      </Routes>
    </div>
  )
}

export default App