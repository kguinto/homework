import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {API_HOST} from './constants';
import UserListView from './Views/UserListView/UserListView'
import UserEntryView from './Views/UserEntryView/UserEntryView';

const VIEWS = Object.freeze({ USER_LIST: 0, USER_ENTRY: 1 });

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { users: [], currentUser: {}, view: VIEWS.USER_LIST };

    this.viewUser = this.viewUser.bind(this);
    this.viewUserList = this.viewUserList.bind(this);
  }

  componentDidMount() {
    fetch(`${API_HOST}/api/users/`)
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        this.setState({ users })
      });
  }

  viewUser(user) {
    console.log(user)
    this.setState({ view: VIEWS.USER_ENTRY, currentUser: user });
  }

  viewUserList () {
    this.setState({ view: VIEWS.USER_LIST, currentUser: {} });
  }

  render() {
    let view;

    switch (this.state.view) {
      case VIEWS.USER_LIST:
        view = <UserListView users={this.state.users} viewUser={this.viewUser}/>;
        break;
      case VIEWS.USER_ENTRY:
        view = <UserEntryView user={this.state.currentUser} viewUserList={this.viewUserList} />;
        break;
    }

    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;
