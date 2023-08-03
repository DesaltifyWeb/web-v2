import facebook from '../../../assets/icons/facebook.svg'
import threads from '../../../assets/icons/threads.svg'
import instagram from '../../../assets/icons/instagram.svg'
import React, { useState } from 'react';

const Icons = () => {
    const [hovered, setHovered] = useState(null);
  return (
    <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4 h-80 w-80 pt-24">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                            src={instagram}
                            alt="Instagram Icon"
                            className="transition-all duration-300 w-full h-auto"
                            style={{ filter: hovered && hovered !== 1 ? 'blur(3px)' : 'none' }}
                            onMouseEnter={() => setHovered(1)}
                            onMouseLeave={() => setHovered(null)}
                            />
                        </a>
                        <a href="https://www.threads.com" target="_blank" rel="noopener noreferrer">
                            <img
                            src={threads}
                            alt="Threads Icon"
                            className="transition-all duration-300 w-full h-auto"
                            style={{ filter: hovered && hovered !== 2 ? 'blur(3px)' : 'none' }}
                            onMouseEnter={() => setHovered(2)}
                            onMouseLeave={() => setHovered(null)}
                            />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img
                            src={facebook}
                            alt="Facebook Icon"
                            className="transition-all duration-300 w-full h-auto"
                            style={{ filter: hovered && hovered !== 3 ? 'blur(3px)' : 'none' }}
                            onMouseEnter={() => setHovered(3)}
                            onMouseLeave={() => setHovered(null)}
                            />
                        </a>
                    </div>
                </div>
  )
}

export default Icons