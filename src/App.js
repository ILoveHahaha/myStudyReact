import React from 'react';
import Demo1 from './components/Demo1/parent'
import Home from './components/Home'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={"/"} component={ Home } />
        <Route path={'/parent'} component={ Demo1 } />
      </Switch>
    </HashRouter>
  );
}

export default App;
