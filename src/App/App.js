import { useState } from "react";
import { Router } from "react-router-dom";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import SearchContext from "../components/Context";

import styles from './App.module.scss';

const {wrapper} = styles;

function App() {
  const [searchValue, setSearchValue] = useState('');

  const getSearchValue = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  }

  const sortAndFilterArray = (arr) => {
    return arr.sort((a, b) => 
      parseFloat(a.id) - parseFloat(b.id)
      )
    .filter(item => 
      item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

  return (
      <div className={wrapper}>
        <SearchContext.Provider value={{ sortAndFilterArray }}>
          <Header getSearchValue={getSearchValue}/>
          <Content searchValue={searchValue}/>
        </SearchContext.Provider>
      </div>
  );
}

export default App;
