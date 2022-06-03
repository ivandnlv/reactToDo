import React from 'react';

import styles from './Btn.module.scss';

const {button, green, yellow, blue} = styles;

const Btn = ({text, color, action, needImage = false, image, alt}) => {
    const setColor = () => color === 'green' ? green : color === 'yellow' ? yellow : color === 'blue' ? blue : null;
    

    return (
        <button 
            className={button + ' ' + setColor()} 
            onClick={action}
        >
            {needImage ? <img src={image} alt={alt} /> : null}
            {text}
        </button>
    );
};

export default Btn;