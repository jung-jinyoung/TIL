import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Events from './components/Events';
import Goods from './components/Goods';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <Events />
      <Goods />
    </div>
  );
}

export default App;