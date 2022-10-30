import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';
import { Home } from './pages/index';

function App() {
  const home = new Home({});
  return (
    <Router>
      <div className='app'>
      {home.render()}
    </div>
    </Router>
  );
}

export default App;
