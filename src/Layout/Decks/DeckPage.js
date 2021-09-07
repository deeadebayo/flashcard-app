import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeckPageCardList from './DeckPageCardList';
import { deleteCard, readDeck } from '../../utils/api';
const deckPageStyle = css`
	ul li > * {
		margin-right: 0.75em;
	}
	padding-bottom: 3em;

	.btn-row {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	.paper-btn {
		margin-right: 1.5em;
	}
	a {
		background: none;
	}
`;

const DeckPage = ({ handleDeleteDeck }) => {
	const { deckId } = useParams();
	const [thisDeck, setThisDeck] = useState({});
	const history = useHistory();

	const handleCardDelete = (cardToDelete) => {
		if (window.confirm(`You really want to delete this card?`))
			deleteCard(cardToDelete).then(() => history.go(0));
	};

	useEffect(() => {
		setThisDeck({});
		readDeck(deckId).then(setThisDeck);
	}, [deckId]);

	const { name, description, cards } = thisDeck;
	return (
		<div css={deckPageStyle}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>📘 {name}</li>
			</ul>
			<div>
				<h2>{name}</h2>
				<p>{description}</p>
				<div className='btn-row'>
					<div>
						<Link to={`/decks/${deckId}/edit`}>
							<div className='paper-btn btn-primary'>✏ Edit</div>
						</Link>
						<Link to={`/decks/${deckId}/study`}>
							<div className='paper-btn btn-secondary'>
								📖 Study
							</div>
						</Link>
						<Link to={`/decks/${deckId}/cards/new`}>
							<div className='paper-btn btn-secondary'>
								➕ Add Cards
							</div>
						</Link>
					</div>
					<Link
						to='/'
						className='delete card-link paper-btn btn-danger'
						title='delete this deck'
						onClick={() => handleDeleteDeck(deckId)}
					>
						❌
					</Link>
				</div>
			</div>
			<DeckPageCardList
				deckCards={cards}
				handleCardDelete={handleCardDelete}
			/>
		</div>
	);
};

export default DeckPage;
