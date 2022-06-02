import React from 'react';
import Search from '../Search/Search';
import logoIcon from './Logo.svg';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const {header, logo} = styles;

const Header = ({getSearchValue}) => {
    return (
        <header className={header}>
            <Link to="/">
                <div className={logo}>
                    <img src={logoIcon} alt="Logotype" />
                    <div>
                        <h1>toDoList</h1>
                        <p>Запиши, чтобы не забыть!</p>
                    </div>
                </div>
            </Link>
            <Search onChange={getSearchValue}/>
        </header>
    );
};

export default Header;