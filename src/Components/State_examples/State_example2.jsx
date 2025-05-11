import React, { Component } from 'react';

export default class State_example2 extends Component {
  constructor() {
    super();
    this.state = {
      color: '#ffffff' // default background color
    };
  }

  changeColor = () => {
    let char = 'abcdef123456789';
    let colorr = '#';
    for (let i = 0; i < 6; i++) {
      let randomcolor = Math.floor(Math.random() * char.length);
      colorr += char[randomcolor];
    }
    this.setState({ color: colorr });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
          transition: 'background-color 0.5s ease-in-out',
          fontFamily: 'Segoe UI, sans-serif',
          color: '#333'
        }}
      >
        <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>
          🎨 Random Color Generator
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Current Color: <strong>{this.state.color}</strong>
        </p>

        <button
          onClick={this.changeColor}
          style={{
            padding: '12px 24px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
        >
          Change Color
        </button>
      </div>
    );
  }
}
