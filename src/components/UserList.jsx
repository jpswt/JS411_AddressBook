import React from 'react';
import UserInfo from './UserCard';
import '../App.css';
import './UserList.css';

const UserList = (props) => {
	return (
		<div className="App-header">
			<ol>
				{props.users.map((user, index) => (
					<UserInfo
						key={index}
						name={user.name}
						picture={user.picture}
						phone={user.phone}
						email={user.email}
					/>
				))}
			</ol>
		</div>
	);
};

export default UserList;
