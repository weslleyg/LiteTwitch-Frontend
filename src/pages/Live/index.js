import React, { Component } from 'react';
import { FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Nav, Container, Conteudo } from './styles';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

export default class Live extends Component {
	constructor() {
		super();
		this.state = {
			live: {}
		};
	}

	async componentDidMount() {
		const stream = this.props.match.params;
		const response = await api.get(`stream/${stream.id}`);

		console.log(stream.id);
		console.log(response.data);

		this.setState({
			live: response.data
		});

		var embed;
		const script = document.createElement('script');
		script.setAttribute('src', EMBED_URL);
		script.addEventListener('load', () => {
			embed = new window.Twitch.Embed('twitch-embed', {
				channel: response.data.streamer,
				theme: response.data.theme,
				...this.props
			});
		});
		document.body.appendChild(script);
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
					<div id="twitch-embed" />
				</Conteudo>
			</Container>
		);
	}
}

Live.defaultProps = {
	width: '1360',
	height: '780'
};
