import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardRoutes from '../Cards/CardRoutes';
import NotFound from '../NotFound';
import DeckEdit from './DeckEdit';

import DeckNew from './DeckNew';
import DeckPage from './DeckPage';
import DeckStudy from './DeckStudy';

const DeckRoutes = ({ addDeck }) => {
	return (
		<Switch>
			<Route path='/decks/new'>
				<DeckNew addDeck={addDeck} />
			</Route>
			<Route exact path='/decks/:deckId'>
				<DeckPage />
			</Route>
			<Route path='/decks/:deckId/cards'>
				<CardRoutes />
			</Route>
			<Route path='/decks/:deckId/study'>
				<DeckStudy />
			</Route>
			<Route path='/decks/:deckId/edit'>
				<DeckEdit />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default DeckRoutes;
