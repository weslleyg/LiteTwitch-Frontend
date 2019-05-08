import React, { Component } from 'react';
import { FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav, Container, Conteudo } from './styles';

export default class NotFound extends Component {
	render() {
		return (
			<Container>
				<Nav>
					<Link to="/">
						<FaTwitch className="twitch" />
					</Link>
					<div>
						<Link className="link" to="/login">
							Entrar
						</Link>
						<Link className="link" to="/register">
							Criar conta
						</Link>
						<Link className="link" to="/stream">
							Add Stream
						</Link>
						<Link className="link" to="/streams">
							Streams
						</Link>
					</div>
				</Nav>
				<Conteudo>
					<h1>Página não encontrada!</h1>
					<p>
						<Link to="/">Clique aqui </Link>
						para voltar para a página inicial...
					</p>
				</Conteudo>
			</Container>
		);
	}
}
