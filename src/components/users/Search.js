import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
	const [text, setText] = useState('')

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault()
		if (text === '') {
			setAlert('Por favor digite seu termo de busca', 'light')
		} else {
			searchUsers(text)
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

			{showClear && (
				<button
				className="btn btn-block btn-light"
				onClick={clearUsers}>
				Limpar Resultados
				</button>
			)}
		</div>
	)
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
