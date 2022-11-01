import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div>
    </Router>

  );
}

export default App; 
