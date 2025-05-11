import React, { Component } from 'react';
import './Randomflag.css'; 

export default class FlagViewer extends Component {
  constructor() {
    super();
    this.state = {
      flags:    { country: 'India', image: 'https://flagcdn.com/w320/in.png' },
    };
  }

  viewFlag = () => {
    const flags = [
      { country: 'Afghanistan', image: 'https://flagcdn.com/w320/af.png' },
      { country: 'Albania', image: 'https://flagcdn.com/w320/al.png' },
      { country: 'Algeria', image: 'https://flagcdn.com/w320/dz.png' },
      { country: 'Andorra', image: 'https://flagcdn.com/w320/ad.png' },
      { country: 'Angola', image: 'https://flagcdn.com/w320/ao.png' },
      { country: 'Antigua and Barbuda', image: 'https://flagcdn.com/w320/ag.png' },
      { country: 'Argentina', image: 'https://flagcdn.com/w320/ar.png' },
      { country: 'Armenia', image: 'https://flagcdn.com/w320/am.png' },
      { country: 'Australia', image: 'https://flagcdn.com/w320/au.png' },
      { country: 'Austria', image: 'https://flagcdn.com/w320/at.png' },
      { country: 'Azerbaijan', image: 'https://flagcdn.com/w320/az.png' },
    ];

    let randomFlag = Math.floor(Math.random() * flags.length);
    let flagIndex = flags[randomFlag];

    this.setState({ flags: flagIndex });
  };

  render() {
    return (
      <div>
        <h2>{this.state.flags.country}</h2>
        <img src={this.state.flags.image} alt="Flag" width="320" height="200" />
        <button onClick={this.viewFlag}>View Flag</button>
      </div>
    );
  }
}
