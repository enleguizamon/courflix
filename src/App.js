import React from 'react';
import './App.css';
import '../src/assets/reset.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero />
        <Carousel />
      </div>
    );
  }
}

export default App;
