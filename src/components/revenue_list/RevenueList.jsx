import React from 'react';
import './RevenueList.scss';
import { data } from '../../constants';
import ProgressBar from '../progressbar/ProgressBar';

function RevenueList(props) {
    return (
        <ul className='revenue-list'>
            {data.revenueByChannel.map((item , index) => (
                <li className="revenue-list_item" key={index}>
                    <div className="revenue-list_item_title">
                        {item.title}
                        <span className={`${item.value < 50 ? 'txt-success' : 'txt-danger'}`}>{item.value}%</span>
                    </div>
                    <div>
                        <ProgressBar value={item.value} />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default RevenueList;