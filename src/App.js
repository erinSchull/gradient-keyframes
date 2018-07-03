import React, { Component } from 'react';
import './App.css';
import num1 from './Images/one.png';
import num2 from './Images/two.png';
import num3 from './Images/three.png';
import num4 from './Images/four.png';
import num5 from './Images/five.png';
import num6 from './Images/six.png';

class App extends Component {
  constructor(){
    super()

    this.state= {
      number: 0
    }
    this.updateNumState = this.updateNumState.bind(this);
  }
  updateNumState(e){
    this.setState({
      number: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header" >
          <h1>Header Text</h1>
          <section className="my-widget" >A widget on the edge of the blue </section>
        </div>
        <div className="body">
          <h1 className="title" >Playing with hover animations</h1>
          <section className="my-box" >Check me out!</section>
          <br />
          <h2 className="pick-title" >Pick a number any number</h2>
          <div className="pictures" >
            <section className="image1" >
            <input type="image" src={num1} alt='num1' className="imgnum1" value= "1" onClick={this.updateNumState} />
            </section>
            <section className="image2" >
            <input type="image" src={num2} alt='num2' className="imgnum2" value= "2" onClick={this.updateNumState} />
            </section>
            <section className="image3" >
            <input type="image" src={num3} alt='num3' className="imgnum3" value= "3" onClick={this.updateNumState} />
            </section>
            <section className="image4" >
            <input type="image" src={num4} alt='num4' className="imgnum4" value= "4" onClick={this.updateNumState} />
            </section>
            <section className="image5" >
            <input type="image" src={num5} alt='num5' className="imgnum5" value= "5" onClick={this.updateNumState} />
            </section>
            <section className="image6" >
            <input type="image" src={num6} alt='num6' className="imgnum6" value= "6" onClick={this.updateNumState} />
            </section>
          </div>
          < br />
          <section className="checking-state-num" >
            <h3>This is the value of state.number now:</h3>
            <p className="state-num" >{this.state.number}</p>
          </section>
          <div>Icons made by <a href="https://www.flaticon.com/authors/alessio-atzeni" title="Alessio Atzeni">Alessio Atzeni</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer" >CC 3.0 BY</a></div>
        </div>
      </div>
    );
  }
}

export default App;
