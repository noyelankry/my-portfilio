import React from 'react'
import ToDoList from '../assets/todolist.png'
import fetchMusic from '../assets/fetchMusic.png'
import NbdArticle from '../assets/nbd_article.png'

const Work = () => {
    return (
        <div name="work" className='w-full md:h-screen bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-400'>Work</p>
                    <p className='py-6'>Check out some of my recent work:</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${ToDoList})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span>
                            </span>
                            <div>
                                <a href="https://github.com/noyelankry/to-do-list" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${fetchMusic})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span>
                            </span>
                            <div>
                                <a href="https://github.com/noyelankry/fetch-music-modules" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                <a href="https://noyelankry.github.io/fetch-music-modules/" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${NbdArticle})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span>
                            </span>
                            <div>
                                <a href="https://dev.to/noyelankry/understanding-nbd-linux-network-block-device-protocol-406k" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Read article</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work