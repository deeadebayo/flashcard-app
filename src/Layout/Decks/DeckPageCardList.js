import React from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
const deckPageCardListStyle = css`
	ul li > * {
		margin-right: 0.75em;
	}
	padding-bottom: 3em;
	h2 {
		margin-top: 1em;
	}

	.btn-row {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	.paper-btn {
		margin-right: 1.5em;
	}
	.question {
		display: flex;
		& > * {
			flex-flow: row;
		}
		gap: 3em;
		justify-content: center;
	}

	.btn-row {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
	}

	a {
		background: none;
	}
`;
const DeckPageCard = ({ cardId, front, back, handleCardDelete }) => (
	<div className='card' style={{ marginBottom: '2em' }}>
		<div className='card-body'>
			<div className='question card-text'>
				<p>{front}</p>
				<p>{back}</p>
			</div>
			<div className='btn-row'>
				<Link to={`./cards/${cardId}/edit`}>
					<div className='card-link paper-btn btn-primary '>
						✏ Edit
					</div>
				</Link>
				<div
					onClick={() => handleCardDelete(cardId)}
					className='delete card-link paper-btn btn-danger'
				>
					❌
				</div>
			</div>
		</div>
	</div>
);

const DeckPageCardList = ({ deckCards, handleCardDelete }) => (
	<div css={deckPageCardListStyle}>
		<h2>Cards</h2>
		<div className='child-borders'>
			{deckCards?.map(({ id, front, back }) => (
				<DeckPageCard
					key={id}
					front={front}
					back={back}
					cardId={id}
					handleCardDelete={handleCardDelete}
				/>
			))}
		</div>
	</div>
);

export default DeckPageCardList;
