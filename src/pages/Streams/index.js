import React, { Component } from 'react';
import { FaTwitch, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Nav, Container, Conteudo } from './styles';

export default class Streams extends Component {
	constructor() {
		super();
		this.state = {
			lives: undefined
		};
	}

	async componentDidMount() {
		const response = await api.get(`stream`);

		this.setState({
			lives: response.data.stream
		});
	}

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
					<ul>
						{this.state.lives &&
							this.state.lives.map((stream) => (
								<li key={stream._id}>
									<FaEye />
									<a className="fileInfo" href={`streams/${stream._id}`}>
										<strong>{stream.streamer}</strong>
									</a>
									<MdDelete
										className="lixeira"
										color="red"
										onClick={async () => {
											await api.delete(`stream/${stream._id}`);
										}}
									/>
								</li>
							))}
					</ul>
				</Conteudo>
			</Container>
		);
	}
}
