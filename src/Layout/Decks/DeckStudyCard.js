import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DeckStudyCardEmpty = ({ studyDeck }) => {
	const { deckId } = useParams();
	const amount = studyDeck?.cards?.length;
	return (
		<div>
			<h2>Not enough cards.</h2>
			<p>
				You need at least 3 cards to study. There are only {amount}{' '}
				cards in this deck.
			</p>
			<Link
				to={`/decks/${deckId}/cards/new`}
				className='btn-success paper-btn'
				title='make a new deck'
			>
				➕ Add Cards
			</Link>
		</div>
	);
};
const DeckStudyCard = ({
	currentCard,
	studyDeck,
	handleNextCard,
	handleCardFlip,
}) => {
	if (studyDeck?.cards?.length < 3)
		return <DeckStudyCardEmpty studyDeck={studyDeck} />;
	return (
		<div className='card'>
			<div className='card-body'>
				<h3 className='card-title'>
					Card {currentCard.index + 1} of {studyDeck?.cards?.length}
				</h3>
				<p className='card-text'>
					{studyDeck?.cards
						? studyDeck.cards[currentCard.index][
								currentCard.visible
						  ]
						: null}
				</p>
				<button
					className='btn-primary'
					onClick={() => handleCardFlip()}
				>
					Flip
				</button>
				{currentCard.visible === 'back' ? (
					<button
						className='btn-secondary'
						onClick={() => handleNextCard()}
						// disabled={
						// 	currentCard.index === studyDeck?.cards?.length - 1
						// }
					>
						Next
					</button>
				) : null}
			</div>
		</div>
	);
};

export default DeckStudyCard;
