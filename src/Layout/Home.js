/** @jsxImportSource @emotion/react */
import React from 'react';
import DeckList from './Decks/DeckList';

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const deckListContainer = css`
	margin: 2em 5em;

	& > * {
		margin: 1.3em 0.75em;
	}
`;

const Home = () => (
	<div css={deckListContainer}>
		<Link to='./decks/new'>
			<button className='btn-success' title='make a new deck'>
				➕ Create Deck
			</button>
		</Link>
		<div className='child-borders'>
			<DeckList />
		</div>
	</div>
);

export default Home;
