import React from 'react';
import LoadingLotti from './jsonLotti/LoadingLotti';

const Loading = () => {
    return (
        <div>
            {/* <progress className="progress w-100"></progress> */}
            <LoadingLotti></LoadingLotti>
        </div>
    );
};

export default Loading;