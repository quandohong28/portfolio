import React from 'react'
import avatar from '../../assets/quandohong28.jpeg';

function Home() {

    return (
        <>
            <div className="flex items-center justify-center gap-24 h-[500px]">
                <div>
                    <div className='relative flex items-center justify-center'>
                        <div className='h-60 w-64 bg-orange-300 absolute'></div>
                        <img className='z-10 border-2 border-black p-4 w-64' src={avatar} alt="avatar" />

                    </div>
                </div>
                <div>
                    <p className='uppercase font-bold text-5xl mb-6'>Full stack <br /> web <br /> developer</p>
                    <div className='h-200 h-1 bg-black mb-6'></div>
                    <p className='mb-12'>Professional UI/UX designer
                        and PHP - Javascript developer</p>
                    <p className='my-soul-regular text-4xl'>Do Hong Quan</p>
                </div>
            </div>
        </>
    )
}

export default Home