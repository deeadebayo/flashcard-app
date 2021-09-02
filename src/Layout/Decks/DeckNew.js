import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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

const DeckNew = ({ addDeck }) => {
	const initialFormState = {
		name: '',
		description: '',
	};
	const [formData, setFormData] = useState({ ...initialFormState });
	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const history = useHistory();

	const handleFormSubmit = (event) => {
		event.preventDefault();
		addDeck(formData);
	};

	return (
		<div css={newDeckPage}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>Create Deck</li>
			</ul>
			<h2>Create Deck</h2>
			<div className='form-group'>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						name='name'
						onChange={handleChange}
						value={formData.name}
						className='input-block'
						placeholder='Deck Name'
					/>
					<label htmlFor='description'>Description</label>
					<textarea
						type='text'
						id='description'
						name='description'
						onChange={handleChange}
						value={formData.description}
						className='input-block'
						placeholder='Brief description of the deck'
						rows='5'
					/>
					<button onClick={() => history.push('/')}>Cancel</button>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default DeckNew;
