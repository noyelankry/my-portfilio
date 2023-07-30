import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-r from-slate-700 to-slate-800 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <form method='POST' action="https://getform.io/f/1740ffc0-6829-41c7-b273-c17e574505e3" className="flex flex-col w-full max-w-[600px]">
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-red-400'>Contact</p>
                        <p className='py-6'>Submit the form below or send me an email - noy.elankry@gmail.com</p>
                    </div>
                    <input className='my-4 p-2 bg-blue-100 text-gray-700' type="text" placeholder='Name' name="name" />
                    <input className='my-4 p-2 bg-blue-100 text-gray-700' type="text" placeholder='Email' name="email" />
                    <textarea className='my-4 p-2 bg-blue-100 text-gray-700' placeholder="Message" name="message" cols="30" rows="10"></textarea>
                    <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-red-400 hover:border-red-400 mx-auto'>Let's Collaborate</button>
                </form>

            </div>
        </div>
    )
}

export default Contact