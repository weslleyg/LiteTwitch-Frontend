import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Nav = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 6vh;
	border-bottom: 1px solid #3335;
	background: #222;
	.twitch {
		margin: 0 20px;
		color: #7159c1;
		font-size: 36px;
		cursor: pointer;
	}
	.link {
		text-decoration: none;
		color: #eee;
		font-size: 18px;
		margin: 0 12px;
		:hover {
			opacity: 0.8;
		}
	}
	a {
		text-decoration: none;
		color: #eee;
	}
	a:hover {
		opacity: 0.8;
	}
`;

export const Conteudo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 94vh;
`;

export const Form = styled.form`
	width: 400px;
	background: #4445;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #444;
	.FaTwitch {
		width: 100px;
		margin: 10px 0 40px;
		font-size: 60px;
		color: #7159c1;
	}
	p {
		color: #ff3333;
		margin-bottom: 15px;
		border: 1px solid #ff3333;
		padding: 10px;
		width: 100%;
		text-align: center;
	}
	input {
		flex: 1;
		height: 46px;
		margin-bottom: 15px;
		padding: 20px;
		color: #eee;
		font-size: 15px;
		background: #333;
		border: none;
		width: 100%;
		border-bottom: 1px solid #cdcdcd;
		&::placeholder {
			color: #eee;
		}
	}
	button {
		color: #fff;
		font-size: 16px;
		background: #7159c1;
		height: 56px;
		border: 0;
		border-radius: 5px;
		margin: 10px;
		width: 100%;
		cursor: pointer;
		:hover {
			opacity: 0.8;
		}
	}
	hr {
		margin: 20px 0;
		border: none;
		border-bottom: 1px solid #cdcdcd;
		width: 100%;
	}
	a {
		font-size: 16;
		font-weight: bold;
		color: #eee;
		text-decoration: none;
		:hover {
			opacity: 0.8;
		}
	}
`;
