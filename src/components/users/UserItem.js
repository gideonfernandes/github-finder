import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt={login}
				className='round-img'
				style={{ width: '60px' }}
			/>

			<h3>{login}</h3>

			<a
				href={html_url}
				className='btn btn-sm btn-dark my-1'>Mais Informações
			</a>
		</div>
	)
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
