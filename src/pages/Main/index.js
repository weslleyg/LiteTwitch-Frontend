import React, { Component } from 'react';
import { FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav, Container, Conteudo } from './styles';

export default class Main extends Component {
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
					<h1>Twitch Lite</h1>
					<p>Assista suas streams com uma melhor performance em um site muito mais leve...</p>
					<p>
						<Link to="/register">Crie uma conta</Link>, ou acesse a lista de streams adicionadas pelos
						usuários!
					</p>
				</Conteudo>
			</Container>
		);
	}
}
