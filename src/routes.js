import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Registro from './pages/Register';
import Main from './pages/Main';
import Live from './pages/Live';
import NotFound from './pages/NotFound';
import Streams from './pages/Streams';
import Stream from './pages/Stream';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Registro} />
			<PrivateRoute path="/streams/:id" component={Live} />
			<PrivateRoute path="/streams" component={Streams} />
			<PrivateRoute path="/stream" component={Stream} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
