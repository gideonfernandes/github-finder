import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { getSingleUser, getSingleUserRepos, loading, user } = githubContext;

	useEffect(() => {
		getSingleUser(match.params.username)
		getSingleUserRepos(match.params.username)
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		company,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	if (loading) return <Spinner />

	return (
		<Fragment>
			<Link to="/" className="btn btn-light">
				<i className="fas fa-arrow-left"></i> Voltar para a página de busca
			</Link>
			Contratável:{' '}
			{hireable ? (
				<i className="fas fa-check text-success"></i>
			) : (
				<i className="fas fa-times-circle text-danger"></i>
			)}

			<section className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						alt={name}
						className="round-img"
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Localização: {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Resumo Descritivo</h3>
							<p>{bio}</p>
						</Fragment>
					)}

					<a href={html_url} className="btn btn-dark my-1">Visitar Perfil no Github</a>

					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Nome de Usuário:</strong> {login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Empresa:</strong> {company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website:</strong> {blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</section>

			<section className="card text-center">
				<span className="badge badge-primary">Seguidores: {followers}</span>
				<span className="badge badge-success">Seguindo: {following}</span>
				<span className="badge badge-light">Repositórios Publicos: {public_repos}</span>
				<span className="badge badge-dark">Gists Públicos: {public_gists}</span>
			</section>

			<Repos />
		</Fragment>
	)
};

export default User;
