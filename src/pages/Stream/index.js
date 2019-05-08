import React, { Component } from 'react';
import { FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Nav, Container, Conteudo, Form } from './styles';

export default class Stream extends Component {
	constructor() {
		super();
		this.state = {
			newStream: '',
			theme: undefined,
			error: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleStreamer = this.handleStreamer.bind(this);
		this.handleTheme = this.handleTheme.bind(this);
	}

	handleStreamer(e) {
		this.setState({
			newStream: e.target.value
		});
	}

	handleTheme(e) {
		this.setState({
			theme: e.target.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const dataToSend = {
			streamer: this.state.newStream,
			theme: this.state.theme
		};
		if (!this.state.newStream) {
			this.setState({ error: 'Nome do streamer obrigatório!' });
		} else {
			try {
				const response = await api.post('/stream', dataToSend);
				console.log(response.data);
				this.props.history.push(`/streams/${response.data.stream._id}`);
			} catch (err) {
				console.log(err);
				this.setState({ error: 'Ocorreu um erro ao adicionar a stream. T.T' });
			}
		}
	};

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
					<Form onSubmit={this.handleSubmit}>
						<Link to="/">
							<FaTwitch className="FaTwitch" />
						</Link>
						{this.state.error && <p>{this.state.error}</p>}
						<input
							value={this.state.streamer}
							onChange={this.handleStreamer}
							placeholder="Noma do streamer"
						/>
						<input value={this.state.theme} onChange={this.handleTheme} placeholder="Tema dark ou light" />
						<button type="submit">Adicionar</button>
					</Form>
				</Conteudo>
			</Container>
		);
	}
}
