import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

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

	const [formData, setFormData] = useState({});

	useEffect(() => {
		readDeck(deckId).then(setFormData);
	}, [deckId]);

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
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
			<div className='form-group'>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						name='name'
						onChange={handleChange}
						value={formData.name || ''}
						className='input-block'
						placeholder='Deck Name'
					/>
					<label htmlFor='description'>Description</label>
					<textarea
						type='text'
						id='description'
						name='description'
						onChange={handleChange}
						value={formData.description || ''}
						className='input-block'
						placeholder='Brief description of the deck'
						rows='5'
					/>
					<button onClick={() => history.push('./')}>Cancel</button>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default DeckEdit;
