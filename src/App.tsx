import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoremIpsum from './LoremIpsum';
import NotFound from './NotFound';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={LoremIpsum} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
