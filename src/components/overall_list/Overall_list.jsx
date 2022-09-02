import React from 'react';
import './Overall_list.scss';
import { data } from '../../constants';

function OverallList(props) {
    return (
        <ul className="overall-list">
            {data.overall.map((item , index) => (
                <li className="overall-list_item" key={index}>
                    <div className="overall-list_item_icon">{item.icon}</div>
                    <div className="overall-list_item_info">
                        <div className="title">
                            {item.value}
                        </div>
                        <span>
                            {item.title}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default OverallList;