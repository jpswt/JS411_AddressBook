import React, { useState } from 'react';
import './UserCard.css';

const UserInfo = (props) => {
	const { picture, name, phone, email } = props;
	const [isHidden, setIsHidden] = useState(true);
	const [buttonText, setButtonText] = useState(true);

	const handleClick = () => {
		buttonText ? setButtonText(false) : setButtonText(true);
		isHidden ? setIsHidden(false) : setIsHidden(true);
	};

	const toggleButtonText = buttonText ? 'Show Details' : 'Hide Details';

	return (
		<li>
			<img src={picture.medium} alt="thumbnail of users" />
			<h5>
				{name.first} {name.last}
			</h5>
			{isHidden ? (
				<div></div>
			) : (
				<div>
					<p>{email}</p>
					<p>Phone: {phone}</p>
				</div>
			)}
			<button className="button" onClick={handleClick}>
				{toggleButtonText}
			</button>
		</li>
	);
};

export default UserInfo;
