import React, { Component } from 'react';
import { FaMoon } from "react-icons/fa";
import { ImBrightnessContrast } from "react-icons/im";

export default class State_example4 extends Component {
  constructor() {
    super();
    this.state = {
      isDark: false
    };
  }

  dark = () => {
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    return (
      <div style={{ 
        backgroundColor: this.state.isDark ? "black" : "white", 
        color: this.state.isDark ? "white" : "black", 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        transition: 'all 0.5s ease' 
      }}>
        <h1>Toggle Dark Mode</h1>
        
        <button 
          onClick={this.dark} 
          style={{
            padding: '10px 20px', 
            fontSize: '18px', 
            cursor: 'pointer', 
            backgroundColor: this.state.isDark ? '#555' : '#ddd',
            border: 'none', 
            borderRadius: '5px', 
            color: this.state.isDark ? 'white' : 'black',
          }}
        >
          {this.state.isDark ? <ImBrightnessContrast /> : <FaMoon />}
        </button>
      </div>
    );
  }
}
