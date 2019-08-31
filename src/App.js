import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <main>
        <nav>

          <header>This is Albert's TV Show APP</header>
        </nav>
        <Router>
          <nav>
            <li>
              <Link to="/">Home</Link>
              <Link to="/Test">Test Page</Link>
            </li>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/Test" component={Test}></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
