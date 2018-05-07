import React, { Component } from 'react';
import {API_HOST} from './../../constants';
import PropTypes from 'prop-types';
import UserList from './UserList';
import SearchBar from './SearchBar';
import PageSelect from './PageSelect';

class UserListView extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [], searchText: '', query: '', page: 1 };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }


  fetchUsers() {
    let urlParams = [];
 
    if (this.state.query) {
      urlParams.push(`query=${this.state.query}`);
    }

    if (this.state.page > 1) {
      urlParams.push(`page=${this.state.page}`);
    }

    urlParams = (urlParams.length) ? `?${urlParams.join('&')}` : '/';

    fetch(`${API_HOST}/api/users${urlParams}`)
    .then((res) => res.json())
    .then(({ data, message }) => {
      this.setState({ users: data || [] });
    });
  }

  handleSearchChange (event) {
    if (event.keyCode === 13 && event.target.value.trim()) {
      this.setState({query: event.target.value.trim()}, this.fetchUsers);
    } else if (event.keyCode === 13) {
      this.setState({ query: '' }, this.fetchUsers);
    }
  }

  render() {
    return (
      <div className='view user-list-view'>
        <header className="App-header">
          Users
        </header>
        <SearchBar handleSearchChange={this.handleSearchChange}/>
        <UserList users={this.state.users} viewUser={this.props.viewUser} />
        <PageSelect />
      </div>
    );
  }
}


export default UserListView;