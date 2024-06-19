//React import
import React from 'react';

//Style import
import './App.css';


//Component import
import { Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT4 } from './containers';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
          <Brand />
          <WhatGPT4 />
          <Features />
          <Possibility />
          <Cta />
          <Blog />
          <Footer />
    </div>
  )
}

export default App