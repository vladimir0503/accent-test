import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Cart from '../Pages/Cart/Cart'
import Header from '../components/Header/Header';
import Modal from '../features/Modal/Modal';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Modal />
      <div className="App">
        <div className='App__content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
