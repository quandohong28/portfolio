import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // cần import đúng từ FontAwesome

function Star({ value }) {
    return (
        <div className='flex items-center gap-1'>
            {[...Array(value)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className='text-yellow-400' />
            ))}
        </div>
    );
}

export default Star;
