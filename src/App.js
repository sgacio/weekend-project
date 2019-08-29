import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <main>
        <nav>
          <header>This is Albert's TV Show APP</header>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
