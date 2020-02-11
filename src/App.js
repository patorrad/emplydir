import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route component={Directory} />
        </Wrapper>
      </div>

    </Router>
  );
}

export default App;
