import React, { Component } from 'react';
import Navbar from './components/Navbar'
import SplashImage from './components/SplashImage'
import Description from './components/Description';
import Menu from './components/Menu'
import Location from './components/Location'
class App extends Component {
  render() {
    return (
      <div className="App">
       
      <Navbar/>
      <SplashImage/>
      <Description/>
      <Menu/>
      <Location/>
      </div>

    );
  }
}

export default App;
