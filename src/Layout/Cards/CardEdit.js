import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { readCard, readDeck, updateCard } from '../../utils/api';
import Form from '../Form';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const editCardPage = css`
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

const CardEdit = () => {
	const { cardId, deckId } = useParams();
	const history = useHistory();
	const initialFormState = { front: '', back: '' };
	const [currentDeck, setCurrentDeck] = useState({});
	const [cardData, setCardData] = useState({ ...initialFormState });

	const handleCardEdit = (formData) =>
		updateCard(formData).then(() => history.push('../..'));

	useEffect(() => {
		readDeck(Number(deckId)).then(setCurrentDeck);
	}, [deckId]);

	useEffect(() => {
		readCard(Number(cardId)).then(setCardData);
	}, [cardId]);

	return (
		<div css={editCardPage}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>
					<Link
						to={`/decks/${deckId}`}
						style={{ marginRight: '0.75em' }}
					>
						Deck: {currentDeck.name}
					</Link>
				</li>
				<li>Edit Card {cardId}</li>
			</ul>
			<h3>Edit Card</h3>
			<Form
				handleCardAction={handleCardEdit}
				initialFormState={cardData}
				isNew={true}
				url='../../'
			/>
		</div>
	);
};

export default CardEdit;
