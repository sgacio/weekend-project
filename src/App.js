import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <nav>
            <header className="nav-header">This is Albert's TV Show APP</header>
            <div className="home">
              <Link to="/">Home</Link>
              {/* <p>-click on any show you like-</p> */}
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/:result" component={Test}></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
