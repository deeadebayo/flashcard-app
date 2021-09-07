import React from 'react';
import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const card__btnRow = css`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
`;

// Defined the individual cards in same file to cutback on prop drilling
const HomeDeckInfo = ({ deck, deckCards, handleDeleteDeck }) => {
	const { id, name, description } = deck;
	return (
		<div className='card' style={{ marginBottom: '2em' }}>
			<div className='card-body'>
				<h4 className='card-title'>{name}</h4>
				<h5 className='card-subtitle'>{`${deckCards.length} cards`}</h5>
				<p className='card-text'>{description}</p>
				<div css={card__btnRow}>
					<div>
						<Link
							to={`./decks/${id}`}
							className='card-link paper-btn btn-primary'
							title='view full deck'
						>
							👁‍🗨View
						</Link>
						<Link
							to={`./decks/${id}/study`}
							className='card-link paper-btn btn-secondary'
							title='study this deck'
						>
							📖Study
						</Link>
					</div>
					<Link
						to='/'
						className='delete card-link paper-btn btn-danger'
						title='delete this deck'
						onClick={() => handleDeleteDeck(id)}
					>
						❌
					</Link>
				</div>
			</div>
		</div>
	);
};

const HomeDeckList = ({ decks = [], handleDeleteDeck }) => (
	<>
		{decks.map((deck) => (
			<HomeDeckInfo
				deck={deck}
				key={deck.id}
				deckCards={deck.cards}
				handleDeleteDeck={handleDeleteDeck}
			/>
		))}
	</>
);

export default HomeDeckList;
