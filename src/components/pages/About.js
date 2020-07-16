import React, { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<h1 className="my-1">Sobre o App</h1>
			<p>
				Este projeto é um React App que, através da entrada proposta, faz
				solicitações à API do Github pesquisando perfis no github e retornando
				informações e dados, como imagem de perfil, biografia, repositórios mais recentes, etc.
			</p>
			<p>Versão: 1.0.0</p>
		</Fragment>
	)
};

export default About;
