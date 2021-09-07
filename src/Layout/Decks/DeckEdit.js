import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import DeckForm from './DeckForm';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { readDeck, updateDeck } from '../../utils/api';
const newDeckPage = css`
	ul li > * {
		margin-right: 0.75em;
	}
	padding-bottom: 3em;

	button {
		margin-right: 2em;
	}
	form > * {
		margin-bottom: 1em;
	}
`;

const DeckEdit = () => {
	const history = useHistory();
	const { deckId } = useParams();

	const [deckData, setDeckData] = useState({});

	useEffect(() => {
		readDeck(deckId).then(setDeckData);
	}, [deckId]);

	const handleDeckEdit = (formData) => {
		updateDeck(formData).then(() => history.push('./'));
	};

	return (
		<div css={newDeckPage}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>Editing Deck {deckId}</li>
			</ul>
			<h2>Edit Deck</h2>
			<DeckForm
				handleDeckAction={handleDeckEdit}
				initialFormState={deckData}
			/>
		</div>
	);
};

export default DeckEdit;
