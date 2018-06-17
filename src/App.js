import React, { Component } from 'react';
import './App.css';
import num1 from './Images/one.png';
import num2 from './Images/two.png';
import num3 from './Images/three.png';
import num4 from './Images/four.png';
import num5 from './Images/five.png';
import num6 from './Images/six.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header" >
          <h1>Header Text</h1>
          <section className="my-widget" >A widget on the edge of the green </section>
        </div>
        <div className="body">
          <h1 className="title" >Playing with hover animations</h1>
          <section className="my-box" >Check me out!</section>
          <br />
          <h2>A title before some pictures</h2>
          <div className="pictures" >
            <section className="image1" >Image 1
            <img src={num1} alt='num1' className="imgnum1" />
            </section>
            <section className="image2" >Image 2
            <img src={num2} alt='num2' className="imgnum2" />
            </section>
            <section className="image3" >Image 3
            <img src={num3} alt='num3' className="imgnum3" />
            </section>
            <section className="image4" >Image 4
            <img src={num4} alt='num4' className="imgnum4" />
            </section>
            <section className="image5" >Image 5
            <img src={num5} alt='num5' className="imgnum5" />
            </section>
            <section className="image6" >Image 6
            <img src={num6} alt='num6' className="imgnum6" />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
