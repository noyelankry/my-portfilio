import React from 'react'
import Css from '../assets/css.png'
import Cpp from '../assets/cpp.png'
import Html from '../assets/html.png'
import Js from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import ReactLogo from '../assets/react.png'
import Linux from '../assets/linux.png'
import NodeJS from '../assets/node.png'
import RasPi from '../assets/raspberrypi.png'

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center gap-8 w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-400'>Skills</p>
                    <p className='py-4'> These are the technologies I've worked with:</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Css} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Js} alt="JS icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="MONGO icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={NodeJS} alt="Node icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Cpp} alt="Cpp icon" />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Linux} alt="linux icon" />
                        <p className='my-4'>LINUX OS</p>
                    </div>
                    <div className='shadow-md shadow-[#192029] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={RasPi} alt="raspberry pi icon" />
                        <p className='my-4'>RASPBERRY PI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills