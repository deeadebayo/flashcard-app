import React, { useState, useEffect } from 'react';
import Header from './Header';
import HomePage from './Home/HomePage';
import NotFound from './NotFound';
import { Switch, Route, useHistory } from 'react-router-dom';

import '../../node_modules/papercss/dist/paper.min.css';
import { deleteDeck, listDecks, createDeck } from '../utils/api';
import DeckRoutes from './Decks/DeckRoutes';

function Layout() {
	const [decks, setDecks] = useState([]);
	const history = useHistory();

	const handleDeleteDeck = (deckToDelete) => {
		if (window.confirm(`You really want to delete this deck?`))
			deleteDeck(deckToDelete).then(() => history.go(0));
	};

	const handleAddDeck = (deckToAdd) => {
		createDeck(deckToAdd).then((res) => history.push(`/decks/${res.id}`));
	};

	useEffect(() => {
		listDecks().then(setDecks);
	}, []);

	return (
		<>
			<Header />
			<div className='container'>
				<Switch>
					<Route exact path='/'>
						<HomePage
							decks={decks}
							handleDeleteDeck={handleDeleteDeck}
						/>
					</Route>
					<Route path='/decks'>
						<DeckRoutes decks={decks} addDeck={handleAddDeck} />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default Layout;
