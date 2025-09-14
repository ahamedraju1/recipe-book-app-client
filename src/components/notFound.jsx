import React from 'react';
import not_found from '../assets/404_img (2).jpg'

const notFound = () => {

    return (
        <div>
            <img className='my-24' src={not_found}  alt="404/not-found" />
        </div>
    );
};

export default notFound;