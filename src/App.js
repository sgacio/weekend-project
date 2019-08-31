import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Test from './components/Test'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Router>
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
