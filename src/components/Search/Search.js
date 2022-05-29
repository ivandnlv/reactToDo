import React from 'react';
import searchIcon from './search-icon.svg';

import styles from './Search.module.scss';

const {search} = styles;

const Search = () => {
    return (
        <div className={search}>
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder='Найти...'/>
        </div>
    );
};

export default Search;