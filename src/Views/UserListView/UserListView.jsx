import React, { Component } from 'react';
import {API_HOST} from './../../constants';
import UserList from './UserList';
import SearchBar from './SearchBar';
import PageSelect from './PageSelect';
import Header from '../../sharedComponents/Header';

class UserListView extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [], searchText: '', query: '', page: 1 };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.viewNextPage = this.viewNextPage.bind(this);
    this.viewPrevPage = this.viewPrevPage.bind(this);
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
      this.setState({ query: '', page: 1 }, this.fetchUsers);
    }
  }

  viewNextPage() {
    this.setState({ page: this.state.page + 1 }, this.fetchUsers);
  }

  viewPrevPage() {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, this.fetchUsers);
    }
  }

  render() {
    return (
      <div className='view user-list-view'>
        <Header title='Users' />
        <SearchBar handleSearchChange={this.handleSearchChange}/>
        <UserList users={this.state.users} viewUser={this.props.viewUser} />
        <PageSelect viewNextPage={this.viewNextPage} viewPrevPage={this.viewPrevPage} currentPage={this.state.page}/>
      </div>
    );
  }
}


export default UserListView;