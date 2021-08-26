import React, { useState, useEffect } from 'react';
import Header from './Header';
import HomePage from './Home/HomePage';
import DecksPage from './Decks/DecksPage';
import NotFound from './NotFound';
import { Switch, Route, useHistory } from 'react-router-dom';

import '../../node_modules/papercss/dist/paper.min.css';
import { deleteDeck, listDecks } from '../utils/api';

function Layout() {
	const [decks, setDecks] = useState([]);
	const history = useHistory();
	const handleDeleteDeck = (deckToDelete) => {
		if (window.confirm(`You really want to delete this deck?`))
			deleteDeck(deckToDelete).then(setDecks);
		history.push('/');
	};
	useEffect(() => {
		setDecks([]);
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
						<DecksPage decks={decks} />
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
