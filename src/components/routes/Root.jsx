import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../partials/Sidebar'


export default function Root() {
    return (
        <>
            <div className='my-12 mx-24 font-light'>
                <div className="grid grid-cols-12">
                    <div className='col-span-4'>
                        <Sidebar />
                    </div>
                    <div className="col-span-8">
                        <div className='m-12'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

