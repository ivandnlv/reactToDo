import { Router } from "react-router-dom";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";

import styles from './App.module.scss';

const {wrapper} = styles;

function App() {
  return (
      <div className={wrapper}>
        <Header />
        <Content />
      </div>
  );
}

export default App;
