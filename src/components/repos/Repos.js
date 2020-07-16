import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
	const githubContext = useContext(GithubContext);

	return (
		<div className="card">
			<h2>Últimos Repositórios</h2>
			{githubContext.repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
		</div>
	)
};

export default Repos;
