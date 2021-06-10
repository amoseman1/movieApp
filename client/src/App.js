import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Homepage} />
      </div>
    </Router>
  );
}


export default App;
