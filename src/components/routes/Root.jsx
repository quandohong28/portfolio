import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../partials/Sidebar'


export default function Root() {
    return (
        <>
            <div className='my-12 mx-8 font-light'>
                <div className="grid grid-cols-12">
                    <div className='col-span-12 lg:col-span-4 px-auto'>
                        <Sidebar />
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className='m-0 lg:m-12'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

