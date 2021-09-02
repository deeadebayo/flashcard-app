import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { readCard, readDeck, updateCard } from '../../utils/api';

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
	const [formData, setFormData] = useState({ ...initialFormState });

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		updateCard(formData).then(() => history.push('../..'));
	};

	useEffect(() => {
		readDeck(Number(deckId)).then(setCurrentDeck);
	}, [deckId]);

	useEffect(() => {
		readCard(Number(cardId)).then(setFormData);
	}, [cardId]);

	return (
		<div css={editCardPage}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/' style={{ marginRight: '0.75em' }}>
						🏠 Home
					</Link>
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
			<div className='form-group'>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor='front'>Front</label>
					<textarea
						type='text'
						id='front'
						name='front'
						onChange={handleChange}
						value={formData.front || ''}
						className='input-block'
						placeholder='Front side of card'
						rows='3'
					/>
					<br />
					<label htmlFor='back'>Back</label>
					<textarea
						type='text'
						id='back'
						name='back'
						onChange={handleChange}
						value={formData.back || ''}
						className='input-block'
						placeholder='Back side of card'
						rows='3'
					/>
					<button
						className='btn-primary'
						onClick={() => history.push('../..')}
					>
						Done
					</button>
					<button className='btn-secondary' type='submit'>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default CardEdit;
