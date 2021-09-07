import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Form = ({ handleCardAction, initialFormState, url, isNew }) => {
	const history = useHistory();
	const [formData, setFormData] = useState({ ...initialFormState });

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		!isNew
			? handleCardAction(formData).then(() =>
					setFormData({ ...initialFormState })
			  )
			: handleCardAction(formData);
	};

	useEffect(() => {
		setFormData(initialFormState);
	}, [initialFormState]);

	return (
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
					onClick={() => history.push(url)}
				>
					Done
				</button>
				<button className='btn-secondary' type='submit'>
					Save
				</button>
			</form>
		</div>
	);
};

export default Form;
