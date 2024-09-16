import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id='error-page' className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl mb-4'>Oops!</h1>
            <p className='mb-4'>Sorry, an unexpected error has occurred.</p>
            <p className='text-xl italic font-semibold mb-2'>{error.statusText || error.message}</p>
            <Link to={`home`} className='text-orange-400'>
                <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                Back to Home</Link>
        </div>
    )
}
