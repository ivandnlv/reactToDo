import React from 'react';
import searchIcon from './search-icon.svg';

import styles from './Search.module.scss';

const {search} = styles;

const Search = ({onChange}) => {
    return (
        <div className={search}>
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder='Найти...' onChange={onChange}/>
        </div>
    );
};

export default Search;