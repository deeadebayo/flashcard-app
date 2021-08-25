import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

const DeckPage = () => {
	const { deckId } = useParams();
	return (
		<>
			<p>THis is the deck page for {deckId}</p>
			<Switch>
				<Route path='/decks/:deckId/edit'>Edit Deck</Route>
				<Route path='/decks/:deckId/cards/new'>Add Card to deck</Route>
				<Route path='/decks/:deckId/cards/:cardId/edit'>
					Edit card in deck
				</Route>
			</Switch>
		</>
	);
};

export default DeckPage;
