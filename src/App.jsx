import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import State_example1 from './Components/State_examples/State_example1';
import State_example2 from './Components/State_examples/State_example2';
import State_example3 from './Components/State_examples/State_example3';
import State_example4 from './Components/State_examples/State_example4';
import Login_signup from './Components/Login_Signup/Login_signup';

import Home from './Components/Home/Home';
import Randomflag from './Components/Random_Flag/Randomflag.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
       
          <Route path='/counterapp' element={<State_example1 />} />
          <Route path='/randomcolor' element={<State_example2 />} />
          <Route path='/randomquote' element={<State_example3 />} />
          <Route path='/themechanger' element={<State_example4 />} />
          <Route path='/signup' element={<Login_signup />} />
          <Route path='/flag' element={<Randomflag/>} />
          
        </Routes>
      </div>
    );
  }
}
