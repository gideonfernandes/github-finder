import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState('')

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault()
		if (text === '') {
			setAlert('Por favor digite seu termo de busca', 'light')
		} else {
			githubContext.searchUsers(text)
			setText('')
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Buscar Usuários..."
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Pesquisar"
					className="btn btn-block btn-dark"
				/>
			</form>

			{githubContext.users.length > 0 && (
				<button
				className="btn btn-block btn-light"
				onClick={githubContext.clearUsers}>
				Limpar Resultados
				</button>
			)}
		</div>
	)
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default Search;
