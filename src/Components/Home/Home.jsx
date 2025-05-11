import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css'; 

export default class Home extends Component {
  render() {
    return (
        
      <div className="home-container">
        <h1>STATE EXAMPLESS IN REACT</h1>
        <Link to="/counterapp" className="nav-card">🧮 Counter App</Link>
        <Link to="/randomquote" className="nav-card">💬 Random Quote Generator</Link>
        <Link to="/randomcolor" className="nav-card">🎨 Random Colour Generator</Link>
        <Link to="/themechanger" className="nav-card">🌓 Theme Changer</Link>
        <Link to="/signup" className="nav-card">🔐 SignUp And Login</Link>
         <Link to="/flag" className="nav-card">Random Flag </Link>
      </div>
    );
  }
}
