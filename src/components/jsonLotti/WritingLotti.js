import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './writing-assistant.json'

const WritingLotti = () => {

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

export default WritingLotti;