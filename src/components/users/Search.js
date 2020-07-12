import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: ''
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault()
		if (this.state.text === '') {
			this.props.setAlert('Por favor digite seu termo de busca', 'light')
		} else {
			this.props.searchUsers(this.state.text)
			this.setState({ text: '' })
		}
	};

	render() {
		const { showClear, clearUsers } = this.props;
		
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Buscar Usuários..."
						value={this.state.text}
						onChange={this.onChange}
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
};

export default Search;
