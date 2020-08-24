import React from 'react';
import './App.css';
import Shoppage from './pages/Shoppage/Shoppage';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
