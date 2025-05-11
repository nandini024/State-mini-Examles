import React, { Component } from 'react';

export default class State_example3 extends Component {
  constructor() {
    super();
    this.state = {
      quote: 'Hlo Guys! Let’s see Random Funny Quotes 😎😄'
    };
  }

  Quotes = () => {
    const funnyQuotes = [
      "I'm not arguing, I'm just explaining why I'm right. 🤷‍♂️",
      "If I had a dollar for every time I thought about you, I’d be broke. 😂💸",
      "I’m on a seafood diet. I see food and I eat it. 🍔🍕",
      "I can’t adult today. Please don’t make me. 😩",
      "I don’t need an inspirational quote, I need coffee. ☕️",
      "I'm not lazy, I'm just on energy-saving mode. 🔋",
      "You never realize how boring your life is until someone asks what you like to do for fun. 🥱",
      "I’m not short, I’m concentrated awesome. 😎",
      "I may be a handful, but that’s why you have two hands. ✋✋",
      "I’m great at multitasking. I can waste time, be unproductive, and procrastinate all at once. 😅",
      "Why do they call it fast food when it takes forever to get to your table? ⏳🍔",
      "I used to think I was indecisive, but now I’m not too sure. 🤔",
      "I'm not weird, I'm a limited edition. 😜",
      "If you can’t convince them, confuse them. 🤡",
      "I’m not clumsy, I’m just accident-prone in a fun way. 😆",
      "I didn’t choose the thug life, the thug life chose me. 🕶️💀",
      "Sometimes I wonder if I’m the only one with a filter… then I remember I don’t have one. 😜",
      "I don’t suffer from insanity—I enjoy every minute of it! 😈",
      "I'm writing a book. I've got the page numbers done. 📚",
      "I don’t have a bucket list, but my fucket list is a mile long. 😎",
      "I may not be perfect, but at least I’m not you. 😂"
    ];
    
    const randomIndex = Math.floor(Math.random() * funnyQuotes.length);
    const randomQuote = funnyQuotes[randomIndex];

    this.setState({ quote: randomQuote });
  };

  render() {
    return (
      <div style={{ 
        textAlign: 'center', 
        marginTop: '50px', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        <h1 style={{ color: '#ff1493' }}>😂 Random Quote Generator</h1>

        <p style={{
          margin: '30px auto',
          padding: '20px',
          width: '60%',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          color: '#333',
          fontSize: '18px'
        }}>
          {this.state.quote}
        </p>

        <button 
          onClick={this.Quotes} 
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ff1493',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          View Random Quote
        </button>
      </div>
    );
  }
}
