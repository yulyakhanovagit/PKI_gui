import React from 'react';

const DropdownMenu = ({items, active, setActive}) => {
    return (
        <div>
            <div className="menu__content" >
                <ul>
                    {items.map(item =>
                        <li key={item.value}>
                            <a href={item.href}>{item.value}</a>
                            <i className="fa fa-angle-right"></i>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;