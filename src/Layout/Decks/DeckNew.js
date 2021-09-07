import React from 'react';
import { Link, useHistory } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeckForm from './DeckForm';
import { createDeck } from '../../utils/api';
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

const DeckNew = () => {
	const history = useHistory();
	const initialFormState = {
		name: '',
		description: '',
	};

	const handleDeckNew = (formData) => {
		createDeck(formData).then((res) => history.push(`/decks/${res.id}`));
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
			<DeckForm
				handleDeckAction={handleDeckNew}
				initialFormState={initialFormState}
			/>
		</div>
	);
};

export default DeckNew;
