import React, { useState } from 'react'
import desaltifyLogo from '../assets/desaltifyLogo.svg'
import Button from './MainComps/MiniComps/Button'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-night max-w-full fixed top-0 z-50 w-full">
            <div className='py-1 sm:py-2 px-2 sm:px-8'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={desaltifyLogo} alt="Desaltify Logo" className='pr-3 h-16 sm:h-32 w-16 sm:w-32' />
                        <div className='font-mont font-medium text-plat text-2xl sm:text-4xl mt-3'>
                            <h1>Desaltify</h1>
                        </div>
                    </div>
                    {isMobile ? (
                        <button onClick={() => setIsOpen(!isOpen)} className="text-plat">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                    ) : (
                        <div className="flex items-center space-x-8 sm:space-x-12 font-mont text-2xl text-plat">
                            <Link to='/' className='hover:text-silver'>Home</Link>
                            <Link to='/meet' className='hover:text-silver'>Meet The Team</Link>
                            <Link to='/contact' className='hover:text-silver'>Contact Us</Link>
                            <div className='font-night font-semibold'>
                                <a href="https://gofund.me/063d7868"><Button buttonText='Donate'/></a>
                            </div>
                        </div>
                    )}
                </div>
                {isOpen && (
                    <div className="mobile-menu mt-4 bg-night text-plat text-lg">
                        <Link to='/' className='block py-2 px-4 hover:text-silver' onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to='/meet' className='block py-2 px-4 hover:text-silver' onClick={() => setIsOpen(false)}>Meet The Team</Link>
                        <Link to='/contact' className='block py-2 px-4 hover:text-silver' onClick={() => setIsOpen(false)}>Contact Us</Link>
                        <Link to='/donate' className='block py-2 px-4 hover:text-silver' onClick={() => setIsOpen(false)}>Donate!</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
