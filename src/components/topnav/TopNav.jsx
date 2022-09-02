import React from 'react';
import UserInfo from '../userInfo/UserInfo';
import './TopNav.scss';

function TopNav(props) {

    const openSidebar = () => {
        document.body.classList.add('sidebar-open');
    }

    return (
        <div className="top-nav">
            <UserInfo />
            <div className="sidebar-toggle" onClick={openSidebar}>
                <i className='bx bx-menu-alt-right'></i>
            </div>
        </div>
    );
}

export default TopNav;