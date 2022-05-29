import React from 'react';
import emptyImg from './empty-img.png';

import styles from './Empty.module.scss';

const {empty} = styles;
const Empty = ({text}) => {
    return (
        <div className={empty}>
            <img src={emptyImg} alt="Пусто" />
            <h2>Тут пусто</h2>
            <p>{text}</p>
        </div>
    );
};

export default Empty;