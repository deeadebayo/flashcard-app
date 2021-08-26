import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound';

const CardPage = () => {
	return (
		<Switch>
			<Route exact path='/decks/:deckId/cards/new'>
				New Card
			</Route>
			<Route path='/decks/:deckId/cards/:cardId/edit'>Edit card</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default CardPage;
