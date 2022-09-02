import React from 'react';
import './Dashboard_wrapper.scss';

function DashboardWrapper(props) {
    return (
        <div className='dashboard-wrapper'>
            {props.children}
        </div>
    );
}

export default DashboardWrapper;

export function DashboardWrapperMain(props) {
    return (
        <div className='dashboard-wrapper_main'>
            {props.children}
        </div>
    );
}

export function DashboardWrapperRight(props) {
    return (
        <div className='dashboard-wrapper_right'>
            {props.children}
        </div>
    );
}