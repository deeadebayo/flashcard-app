import React from 'react';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';

import '../../node_modules/papercss/dist/paper.min.css';
import DeckNew from './Decks/DeckNew';
import StudyPage from './Study/StudyPage';
import DeckPage from './Decks/DeckPage';

function Layout() {
	return (
		<>
			<Header />

			<div className='container'>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/decks/:deckId/study'>
						<StudyPage />
					</Route>
					<Route path='/decks/new'>
						<DeckNew />
					</Route>
					<Route path='/decks/:deckId'>
						<DeckPage />
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
