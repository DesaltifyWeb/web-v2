import React from 'react'
import Button from './components/MainComps/MiniComps/Button'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <div className='flex justify-center items-center h-screen bg-oxford text-plat'>
          <div className='text-center'>
              <h1 className='font-mont font-bold text-5xl sm:text-7xl pb-8'>404 Not Found</h1>
              <p className='font-league font-regular text-lg lg:text-3xl'>
                  The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <a href="/" className='text-3xl text-center mt-8'>
                  <Button buttonText='Go Home'/>
              </a>
          </div>
      </div>
    </HashRouter>
  </React.StrictMode>,
)