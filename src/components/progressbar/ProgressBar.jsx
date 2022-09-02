import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './ProgressBar.scss';

function ProgressBar({value}) {

    const progressBarWidth = useRef();
    
    useEffect(() => {
        progressBarWidth.current.style.width = `${value}%`;
    } , [value]);

    return (
        <div className='progress-bar'>
            <div ref={progressBarWidth} className="progress-bar_inner"></div>
        </div>
    );
}

export default ProgressBar;