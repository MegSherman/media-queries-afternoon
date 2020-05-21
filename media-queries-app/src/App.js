import React, {Component} from 'react';
import "./App.css";
import Header from "./components/Header.js"

export default class App extends Component {
  constructor () {
    super ()
    
    this.state = {
      mobileMenuOpen: false
    }
  }
  render() {
    return (
    <div className="topBox">
      <div>
        <Header/>
      </div>
      <div className="greetingBox">
        <div class="welcome">Welcome To Our Studio!</div>
        <div class="niceMeet">IT'S NICE TO MEET YOU</div>
        <button class="tellMe">TELL ME MORE</button>
      </div>
    </div>
    )
  }
}
