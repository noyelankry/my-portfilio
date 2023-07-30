import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen  bg-gradient-to-r from-slate-700 to-slate-800'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
                <p className='text-red-400 text-1xl sm:text-2xl'>Hi, my name is</p>
                <h1 className='text-3xl font-bold sm:text-5xl '>Noy Elankry</h1>
                <h2 className='text-3xl font-bold sm:text-5xl'>I'm a Full Stack Developer.</h2>
                <p className='text-gray-300 py-4 max-w-[700px]'>I'm a full-stack developer speciialized in building (and occasionally
                    designing) exceptional digital experience. Currently, I'm focused on
                    building responsive full-stack web applications.</p>

                <div>
                    <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-red-400 hover:border-red-400'>
                        <Link to="work" smooth={true} duration={500} className='flex flex-row'>
                            View Work
                            <HiArrowNarrowRight className='ml-2 mt-1' />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home