import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import './index.scss'

const App = () => {
  return (
    <>
      <Search />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
