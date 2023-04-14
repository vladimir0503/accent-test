import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Cart from '../Pages/Cart/Cart'
import Header from '../components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App__content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      {/* <div className='App__content'>
        <Home />
      </div> */}
    </div>
  );
}

export default App;
