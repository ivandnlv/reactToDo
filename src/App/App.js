import Content from "../Content/Content";
import Header from "../Header/Header";

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
