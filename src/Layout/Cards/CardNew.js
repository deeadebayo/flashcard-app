import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';

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
	const initialFormState = { front: '', back: '' };
	const [formData, setFormData] = useState({ ...initialFormState });
	const [currentDeck, setCurrentDeck] = useState({});
	const { deckId } = useParams();
	const history = useHistory();

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		createCard(deckId, formData).then(() =>
			setFormData({ ...initialFormState })
		);
	};

	useEffect(() => {
		readDeck(Number(deckId)).then(setCurrentDeck);
	}, [deckId]);

	return (
		<div css={newCardPage}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/' style={{ marginRight: '0.75em' }}>
						🏠 Home
					</Link>
				</li>
				<li>Create Deck</li>
			</ul>
			<h3>{currentDeck.name}: Add Card</h3>
			<div className='form-group'>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor='front'>Front</label>
					<textarea
						type='text'
						id='front'
						name='front'
						onChange={handleChange}
						value={formData.front}
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
						value={formData.back}
						className='input-block'
						placeholder='Back side of card'
						rows='3'
					/>
					<button
						className='btn-primary'
						onClick={() => history.push('../')}
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

export default CardNew;
