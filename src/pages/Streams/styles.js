import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Nav = styled.div`
	width: 100%;
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
		:hover {
			opacity: 0.8;
		}
	}
`;

export const Conteudo = styled.div`
	display: flex;
	justify-content: center;
	max-width: 600px;
	margin: auto;
	height: 94vh;
	h1 {
		margin-bottom: 12px;
		font-size: 48px;
		color: #7159c1;
	}
	p {
		text-align: center;
		font-size: 20px;
		margin: 6px;
	}
	a {
		text-decoration: none;
		color: #7159c1;
		:hover {
			opacity: 0.8;
		}
	}

	ul {
		margin: 80px 0;
		list-style: none;
	}

	ul li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vh;
	}

	ul li + li {
		padding-top: 20px;
		margin-top: 20px;
		border-top: 1px solid #eee;
	}

	ul li .lixeira {
		cursor: pointer;
		:hover {
			opacity: 0.8;
		}
	}
`;
