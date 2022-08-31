import React from 'react';
import UserInfo from '../userInfo/UserInfo';
import './TopNav.scss';

function TopNav(props) {
    return (
        <div className="top-nav">
            <UserInfo />
            <div className="sidebar-toggle">
                <i className='bx bx-menu-alt-right'></i>
            </div>
        </div>
    );
}

export default TopNav;