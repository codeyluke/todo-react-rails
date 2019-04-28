import React, { Component } from 'react';
import Home from './Home';
import ChoreList from './ChoreList';
import ChoreAdd from './ChoreAdd';
import ChoreInfo from './ChoreInfo';
import ChoreEdit from './ChoreEdit';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <Router>
                    <div className="container">
                        <Navigation />
                        <Main />
                    </div>
                </Router>
            </div>
        );
    }
}

const Navigation = () => (
    <nav className="navbar nav-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/chores" className="nav-link">Chores</NavLink>
                <NavLink exact to="/chores/new" className="nav-link">Add Chores</NavLink>
            </li>
        </ul>
    </nav>
)

const Main = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/chores" component={ ChoreList } />
        <Route exact path="/chores/new" component={ ChoreAdd } />
        <Route exact path="/chores/:id" component={ ChoreInfo } />
    </Switch>
)

export default App;