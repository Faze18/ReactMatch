import React, { Component } from 'react';
import './App.css';
import Holder from "./holder";

import image1 from './images/Austin1.jpg';
import image3 from './images/Austin3.jpg';
import image4 from './images/Austin4.jpg';
import image5 from './images/Austin5.jpg';
import image6 from './images/Austin6.jpg';
import image7 from './images/Austin7.jpg';
import image8 from './images/DrEvil.jpg';
import image9 from './images/DrEvil2.png';
import image10 from './images/Heather.jpg';
import image11 from './images/Kinsington.jpeg';
import image13 from './images/Number2.png';
import image14 from './images/Number2_2.png';
import logo from './images/logo.png';
import gif from './images/AustinGif.gif';




class App extends Component {
  state =
    {
      score: 0,
      highScore: 0,
      selected: [],
      images: [image1, image3, image4, image5, image6, image7, image8, image9, image10, image11, image13, image14],
    };

  gameOver = ( e ) => {
    this.setState( { score: 0 } );
    this.setState( { selected: [] } );

  };
  shuffle = () => {
    for ( let i = this.state.images.length - 1; i > 0; i-- ) {
      const j = Math.floor( Math.random() * ( i + 1 ) );
      ( [this.state.images[i], this.state.images[j]] = [this.state.images[j], this.state.images[i]] );
    }
    this.setState( { images: this.state.images } );
  };
  buttonTest = ( button ) => {
    console.log( button.target.src );
    if ( this.state.selected.includes( button.target.src ) ) {
      console.log( button.target.src );
      console.log( "match" );
      console.log( "gameOver" );
      this.shuffle();
      this.gameOver();
      return true;
    } else {
      console.log( "no match" );
      // array shuffle
      this.shuffle();
      this.state.selected.push( button.target.src );
      this.setState( { score: this.state.score + 1 } );
      if ( this.state.score >= this.state.highScore ) {
        this.setState( { highScore: this.state.score + 1 } );
      }
      console.log( this.state.score );
      return ( <div>gameOver</div> )
    }
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <br/>
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <h2>Match Game</h2>
        </header>
        <p className="App-intro"> </p>
        <h1>Score: {this.state.score}</h1>
        <h1>High Score: {this.state.highScore}</h1>
        <div className="container">
          <div className="row">
            {this.state.images.map( image => (
              <Holder
                src={image}
                buttonTest={this.buttonTest}
                shuffle={this.image}
              />
            ) )}

          </div>

        </div>
      </div>

    );
  }
}

export default App;
