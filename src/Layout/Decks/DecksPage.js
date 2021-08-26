import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardPage from '../Cards/CardPage';
import NotFound from '../NotFound';

import DeckNew from './DeckNew';
import DeckPageInfo from './DeckPageInfo';
import DeckStudy from './DeckStudy';

const DeckPage = ({ decks }) => {
	return (
		<Switch>
			<Route path='/decks/new'>
				<DeckNew />
			</Route>
			<Route exact path='/decks/:deckId'>
				<DeckPageInfo />
			</Route>
			<Route path='/decks/:deckId/cards'>
				<CardPage />
			</Route>
			<Route path='/decks/:deckId/study'>
				<DeckStudy />
			</Route>
			<Route path='/decks/:deckId/edit'>Edit Deck</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default DeckPage;
