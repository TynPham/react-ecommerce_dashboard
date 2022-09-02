import React from 'react';
import './Box.scss';

function Box(props) {
    const classNames = {
        box: 'box',
        purple: props.purple && 'box-purple',
        fullheight: props.fullheight && 'box-fullheight',
    }

    return (
        <div className={Object.values(classNames).join(' ')}>
            {props.children}
        </div>
    );
}

export default Box;