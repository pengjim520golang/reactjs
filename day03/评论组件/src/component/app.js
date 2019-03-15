import React, { Component } from 'react';
import List from './list'
import Details from './details'
import Add from './add'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/details/:id/" component={Details} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
