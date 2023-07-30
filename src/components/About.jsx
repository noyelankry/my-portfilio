import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-red-400'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Noy, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am a passionate Full-Stack Developer with a love for crafting websites that stand out.
                            I enjoy the art of bringing ideas to life through code and creating seamless user experiences.
                            If you're looking for a dedicated developer to build your next project,
                            let's connect and create something amazing together.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About