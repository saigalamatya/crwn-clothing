import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Shoppage from './pages/Shoppage/Shoppage';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
