import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './loading.json'

const LoadingLotti = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Lottie options={defaultOptions}
                height={400}
                width={300}
            />
        </div>
    );
};

export default LoadingLotti;