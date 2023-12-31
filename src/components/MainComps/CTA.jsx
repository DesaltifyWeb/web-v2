import Icons from './MiniComps/Icons';

const CTA = () => {
  return (
    <div className='bg-plat text-black flex justify-center lg:px-18 sm:px-12 px-6 pt-24 text-center'>
        <div className='lg:w-[72rem]'>
            <div>
                <div className='font-mont font-bold text-4xl sm:text-7xl pb-8 sm:pb-16 pt-8 sm:text-center text-left'>
                    <h1>Get Involved Today!</h1>
                </div>
                <div className='font-league font-regular text-xl lg:text-3xl sm:text-center text-left'>
                    <p>Empowered with knowledge, you're now the key to a greener world. Your contribution today, no matter the size, is a lifeline for our environment, the creatures that call it home, and the clear waters we all cherish. Become a catalyst for change - because every donation is a step on the road to a safer, more sustainable tomorrow.</p>
                </div>
                <div className='pt-14 pb-24 sm:text-4xl text-2xl text-center'>
                    <a href="https://www.gofundme.com/f/desaltify/donate" target="_blank" rel="noopener noreferrer"> 
                        <button className='bg-oxford hover:bg-silver text-plat font-mont font-medium rounded py-4 px-8 transform hover:scale-110 hover:rotate-2 ease-in duration-150'>
                            Donate
                        </button>
                    </a>   
                </div>

            </div>
            <div className="flex flex-col items-center">
                <div className="border-t-4 border-black w-2/3"></div>
                <div className="border-t-2 border-black w-2/3"></div>
            </div>
            <div className="sm:scale-90 scale-75 flex flex-col md:flex-row items-center justify-center text-center">
                <div className="font-mont font-bold  text-5xl md:text-6xl pt-16 md:pt-0 pb-11 sm:pb-6">
                    Connect with Us:
                </div>
                <div className="md:pl-20 -mt-20 md:mt-0">
                    <Icons />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA