import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		axios.get('https://randomuser.me/api?results=30').then((res) => {
			const users = res.data.results;
			console.log(users);
			this.setState({ users });
		});
	}

	render() {
		return (
			<div>
				<UserList users={this.state.users} />
			</div>
		);
	}
}

export default App;
