import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Menu from './Components/Menu'
import HomePage from './Components/HomePage'
import DriftPage from './Components/DriftPage'
import TimeAttackPage from './Components/TimeAttackPage'
import ForzaPage from './Components/ForzaPage'

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
