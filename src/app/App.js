import React from 'react';
import Home from '../Pages/Home/Home';
import Header from '../components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App__content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
