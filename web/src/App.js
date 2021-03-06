import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as math from 'mathjs'
import {Tex} from 'react-tex';

var axios = require('axios');

var firebase = require('firebase');


class App extends Component {
  constructor(props) {
    super(props); 

    var app = firebase.initializeApp({
      apiKey: "AIzaSyB6lBJlsRrXf_JCoe0MA3a955_TQII5PHU",
      authDomain: "engcalc-f321c.firebaseapp.com",
      databaseURL: "https://engcalc-f321c.firebaseio.com",
      projectId: "engcalc-f321c",
      storageBucket: "engcalc-f321c.appspot.com",
      messagingSenderId: "875353035427"
    });
    
    this.equation = "";
    this.answerEquation = "";
    this.eState = true;
    this.answer = "";

    this.url = process.env.PUBLIC_URL + '/song.mp3';
    this.audio = new Audio(this.url);
    this.audioState = true;
  }

  componentDidMount() {
    this.play();
    document.addEventListener("keydown", this._handleKeyDown);
  }

  play = () => {
    this.audio.play();
  }
  
  pause = () => {
    this.audio.pause();
  }
  

  click(operation) {
    this.equation += operation;
    this.eState = true;
    this.setState({ state: this.state });
  }

  clear() {
    this.equation = "";
    this.eState = true;
    this.setState({ state: this.state });
  }

  backspace() {
    this.equation = this.equation.slice(0, this.equation.length - 1);
    this.eState = true;
    this.setState({ state: this.state });
  }


  _handleKeyDown = (event) => {
    if (/^[0-9()+-/*coslogsin%tan^]$/.test(event.key)) {
      this.click(event.key);
    }
    if (/^Backspace$/.test(event.key)) {
      this.backspace(event.key);
    }
    if (/^Enter$/.test(event.key)) {
      this.evaluate(event.key);
    }
  }


  evaluate() {
    var toEval = this.equation;
    toEval = toEval.replace("x", "*")
    var lnm = toEval.match(/ln\((.+)\)/);
    var logm = toEval.match(/log\((.+)\)/);
    if (lnm) {
      toEval = toEval.replace(/ln\((.+)\)/, "log(" + lnm[1] + ", e)")
    }
    if (logm) {
      toEval = toEval.replace(/log\((.+)\)/, "log(" + logm[1] + ", 10)")
    }
    try {
      this.answer = math.eval(toEval);
      axios.get('http://159.203.3.149:5000/evaluate?value=' + this.answer)
      .then((response) => {
        this.answerEquation = response.data; 
        this.equation = "";
        this.eState = false;
        console.log(this.answerEquation);
        this.setState({ state: this.state });
      })
      .catch(function (error) {
        alert("We made an OOPSIE")
      });
    } catch {
      alert("You made an OOPSIE");
    }
  }

  music() {
    if (this.audioState) {
      this.audio.pause();
      this.audioState = false; 
    } else {
      this.audio.play();
      this.audioState = true;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="toprow">
          {this.eState &&
            <div className="equation"> 
              {this.equation}
            </div>
          }
          {!this.eState &&
            <div className="equation"> 
               <Tex texContent={this.answerEquation}/>
            </div>
          }
        </div>
        <div className="row"> 
          <img src={process.env.PUBLIC_URL + '/images/1title.gif'}/>
          <img src={process.env.PUBLIC_URL + '/images/2factorial.gif'} onClick={() => this.click("!")}/>
          <img src={process.env.PUBLIC_URL + '/images/3openbracket.gif'} onClick={() => this.click("(")}/>
          <img src={process.env.PUBLIC_URL + '/images/4closingbracket.gif'} onClick={() => this.click(")")}/>
          <img src={process.env.PUBLIC_URL + '/images/5modulo.gif'} onClick={() => this.click("%")}/>
          <img src={process.env.PUBLIC_URL + '/images/6AC.gif' } onClick={() => this.clear()}/>
        </div>
        <div className="row"> 
          <img src={process.env.PUBLIC_URL + '/images/7music.png'} onClick={() => this.music()}/>
          <img src={process.env.PUBLIC_URL + '/images/8sin.gif'} onClick={() => this.click("sin(")}/>
          <img src={process.env.PUBLIC_URL + '/images/9ln.gif'} onClick={() => this.click("ln(")}/>
          <img src={process.env.PUBLIC_URL + '/images/101.gif'} onClick={() => this.click("1")}/>
          <img src={process.env.PUBLIC_URL + '/images/113.gif'} onClick={() => this.click("3")}/>
          <img src={process.env.PUBLIC_URL + '/images/125.gif'} onClick={() => this.click("5")}/>
          <img src={process.env.PUBLIC_URL + '/images/13:.gif.gif'} onClick={() => this.click("/")}/>
        </div>
        <div className="row"> 
          <img src={process.env.PUBLIC_URL + '/images/14pi.gif'} onClick={() => this.click("pi")}/>
          <img src={process.env.PUBLIC_URL + '/images/15cos.gif'} onClick={() => this.click("cos(")}/>
          <img src={process.env.PUBLIC_URL + '/images/16log.gif'} onClick={() => this.click("log(")}/>
          <img src={process.env.PUBLIC_URL + '/images/177.gif'} onClick={() => this.click("7")}/>
          <img src={process.env.PUBLIC_URL + '/images/189.gif'} onClick={() => this.click("9")}/>
          <img src={process.env.PUBLIC_URL + '/images/190.gif'} onClick={() => this.click("0")}/>
          <img src={process.env.PUBLIC_URL + '/images/20x.gif'} onClick={() => this.click("x")}/>
        </div>
        <div className="row"> 
          <img src={process.env.PUBLIC_URL + '/images/21e.gif'} onClick={() => this.click("e")}/>
          <img src={process.env.PUBLIC_URL + '/images/22tan.gif'} onClick={() => this.click("tan(")}/>
          <img src={process.env.PUBLIC_URL + '/images/23sqrt.gif'} onClick={() => this.click("sqrt(")}/>
          <img src={process.env.PUBLIC_URL + '/images/242.gif'} onClick={() => this.click("2")}/>
          <img src={process.env.PUBLIC_URL + '/images/254.gif'} onClick={() => this.click("4")}/>
          <img src={process.env.PUBLIC_URL + '/images/266.gif'} onClick={() => this.click("6")}/>
          <img src={process.env.PUBLIC_URL + '/images/27-.gif'} onClick={() => this.click("-")}/>
        </div>
        <div className="row"> 
          <img src={process.env.PUBLIC_URL + '/images/28ans.gif'} onClick={() => this.click(this.answer)}/>
          <img src={process.env.PUBLIC_URL + '/images/29exp.png'} onClick={() => this.click("*10^")}/>
          <img src={process.env.PUBLIC_URL + '/images/30^.gif'} onClick={() => this.click("^")}/>
          <img src={process.env.PUBLIC_URL + '/images/318.gif'} onClick={() => this.click("8")}/>
          <img src={process.env.PUBLIC_URL + '/images/32..gif'} onClick={() => this.click(".")}/>
          <img src={process.env.PUBLIC_URL + '/images/33=.png'} onClick={() => this.evaluate()}/>
          <img src={process.env.PUBLIC_URL + '/images/34+.gif'} onClick={() => this.click("+")}/>
        </div>
      </div>
    );
  }
}

export default App;
