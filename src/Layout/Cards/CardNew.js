import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';
import Form from '../Form';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const newCardPage = css`
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

const CardNew = () => {
	const [currentDeck, setCurrentDeck] = useState({});
	const { deckId } = useParams();
	const initialFormState = { front: '', back: '' };

	const handleCreateCard = (formData) => createCard(deckId, formData);

	useEffect(() => {
		readDeck(Number(deckId)).then(setCurrentDeck);
	}, [deckId]);

	return (
		<div css={newCardPage}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>Add Card</li>
			</ul>
			<h3>{currentDeck.name}: Add Card</h3>
			<Form
				handleCardAction={handleCreateCard}
				initialFormState={initialFormState}
				url='../'
			/>
		</div>
	);
};

export default CardNew;
