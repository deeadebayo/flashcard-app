import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound';
import CardEdit from './CardEdit';
import CardNew from './CardNew';

const CardRoutes = () => {
	return (
		<Switch>
			<Route exact path='/decks/:deckId/cards/new'>
				<CardNew />
			</Route>
			<Route path='/decks/:deckId/cards/:cardId/edit'>
				<CardEdit />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default CardRoutes;
