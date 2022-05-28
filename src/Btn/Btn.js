import React from 'react';

import styles from './Btn.module.scss';

const {button, green, yellow} = styles;

const Btn = ({text, color, action}) => {
    const setColor = () => color === 'green' ? green : color === 'yellow' ? yellow : null;

    return (
        <button 
            className={button + ' ' + setColor()} 
            onClick={action}
        >
            {text}
        </button>
    );
};

export default Btn;