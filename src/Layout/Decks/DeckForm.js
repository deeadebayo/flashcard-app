import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DeckForm = ({ handleDeckAction, initialFormState, isOld }) => {
	const history = useHistory();
	const [formData, setFormData] = useState({});

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleDeckAction(formData);
	};

	useEffect(() => {
		setFormData(initialFormState);
	}, [initialFormState]);

	return (
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
					required
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
					required
				/>
				<button onClick={() => history.push('./')}>Cancel</button>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default DeckForm;
