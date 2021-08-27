import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardPage from '../Cards/CardPage';
import NotFound from '../NotFound';
import DeckEdit from './DeckEdit';

import DeckNew from './DeckNew';
import DeckPage from './DeckPage';
import DeckStudy from './DeckStudy';

const DeckRoutes = ({ decks, addDeck }) => {
	const deckLength = decks.length;
	return (
		<Switch>
			<Route path='/decks/new'>
				<DeckNew decks={decks} addDeck={addDeck} whatId={deckLength} />
			</Route>
			<Route exact path='/decks/:deckId'>
				<DeckPage />
			</Route>
			<Route path='/decks/:deckId/cards'>
				<CardPage />
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
