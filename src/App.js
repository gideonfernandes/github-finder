import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
    user: {},
		loading: false,
    alert: null
	};

	/*
  async componentDidMount() {
		this.setState({ loading: true })

		const response = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

		this.setState({ users: response.data, loading: false })
	};
  */

  searchUsers = async text => {
    this.setState({ loading: true })

    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: response.data.items, loading: false })
  };

  getSingleUser = async username => {
    this.setState({ loading: true })

    const response = await axios.get(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ user: response.data, loading: false })
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })
    setTimeout(() => this.setState({ alert: null }), 4000)
  };

  render() {
    const { users, user, loading } = this.state;
    
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <main className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false }
                    setAlert={this.setAlert}
                  />
                  <Users
                    loading={loading}
                    users={users}
                  />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:username" render={props => (
                <User
                  { ...props }
                  getUser={this.getSingleUser}
                  user={user}
                  loading={loading}
                />
              )} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
};

export default App;
