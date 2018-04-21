import React, { Component } from 'react';
import './App.css';

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
            <section className="image1" >Image 1</section>
            <section className="image2" >Image 2</section>
            <section className="image3" >Image 3</section>
            <section className="image4" >Image 4</section>
            <section className="image5" >Image 5</section>
            <section className="image6" >Image 6</section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
