import React from 'react';
import HomeDeckList from './HomeDeckList';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const deckListContainer = css`
	margin: 2em 5em;

	& > * {
		margin: 1.3em 0.75em;
	}
`;

const HomePage = ({ decks, handleDeleteDeck }) => (
	<div css={deckListContainer}>
		<Link to='./decks/new'>
			<button className='btn-success' title='make a new deck'>
				➕ Create Deck
			</button>
		</Link>
		<div className='child-borders'>
			<HomeDeckList decks={decks} handleDeleteDeck={handleDeleteDeck} />
		</div>
	</div>
);

export default HomePage;
