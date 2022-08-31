import React from 'react';
import './userInfo.scss';
import data from '../../constants/data';

function UserInfo(props) {
    return (
        <div className='user-info'>
            <div className="user-info_img">
                <img src={data.user.img} alt="" />
            </div>
            <div className="user-info_name">
                <span>{data.user.name}</span>
            </div>
        </div>
    );
}

export default UserInfo;