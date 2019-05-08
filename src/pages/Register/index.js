import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { FaTwitch } from 'react-icons/fa';

import { Form, Container } from './styles';

export default class Registro extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			error: ''
		};
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleUser = this.handleUser.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	handleSignUp = async (e) => {
		e.preventDefault();
		const dataToSend = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		};
		if (!this.state.username || !this.state.email || !this.state.password) {
			this.setState({ error: 'Preencha todos os dados para se cadastrar' });
		} else {
			try {
				await api.post('/register', dataToSend);
				this.props.history.push('/streams');
			} catch (err) {
				console.log(err);
				this.setState({ error: 'Ocorreu um erro ao registrar sua conta. T.T' });
			}
		}
	};

	handleUser = (e) => {
		this.setState({
			username: e.target.value
		});
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
				<Form onSubmit={this.handleSignUp}>
					<Link to="/">
						<FaTwitch className="FaTwitch" />
					</Link>
					{this.state.error && <p>{this.state.error}</p>}

					<input type="text" placeholder="Nome de usuário" onChange={this.handleUser} />

					<input type="email" placeholder="Endereço de e-mail" onChange={this.handleEmail} />

					<input type="password" placeholder="Senha" onChange={this.handlePassword} />
					<button type="submit">Cadastrar</button>
					<hr />
					<Link to="/login">Fazer login</Link>
				</Form>
			</Container>
		);
	}
}
