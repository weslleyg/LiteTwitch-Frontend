import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';

import { FaTwitch } from 'react-icons/fa';

import { Form, Container } from './styles';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: ''
		};
		this.handleSignIn = this.handleSignIn.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	handleSignIn = async (e) => {
		e.preventDefault();
		const dataToSend = {
			email: this.state.email,
			password: this.state.password
		};
		if (!this.state.email || !this.state.password) {
			this.setState({ error: 'Preencha e-mail e senha para continuar!' });
		} else {
			try {
				const response = await api.post('/login', dataToSend);
				login(response.data.token);
				this.props.history.push('/streams');
			} catch (err) {
				this.setState({
					error: 'Houve um problema com o login, verifique suas credenciais. T.T'
				});
			}
		}
	};

	handleEmail = (e) => {
		this.setState({
			email: e.target.value
		});
	};

	handlePassword = (e) => {
		this.setState({
			password: e.target.value
		});
	};

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleSignIn}>
					<Link to="/">
						<FaTwitch className="FaTwitch" />
					</Link>
					{this.state.error && <p>{this.state.error}</p>}
					<input type="email" placeholder="Endereço de e-mail" onChange={this.handleEmail} />
					<input type="password" placeholder="Senha" onChange={this.handlePassword} />
					<button type="submit">Entrar</button>
					<hr />
					<Link to="/register">Criar conta grátis</Link>
				</Form>
			</Container>
		);
	}
}
