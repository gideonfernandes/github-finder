import React, { Component } from 'react';

class UserItem extends Component {
	state = {
		id: 'id',
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
		html_url: 'https://github.com/mojombo'
	};

	render() {
		const { id, login, avatar_url, html_url } = this.state;

		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt={login}
					className='round-image'
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
};

export default UserItem;
