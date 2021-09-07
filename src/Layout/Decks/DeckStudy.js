import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { readDeck } from '../../utils/api';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeckStudyCard from './DeckStudyCard';

const studyPageStyle = css`
	ul li > * {
		margin-right: 0.75em;
	}
	padding-bottom: 3em;

	.card-text {
		max-width: 60ch;
		font-size: 1.2em;
	}

	button {
		margin-right: 2em;
	}
`;

const DeckStudy = () => {
	const history = useHistory();
	const { deckId } = useParams();
	const [studyDeck, setStudyDeck] = useState([]);
	const [currentCard, setCurrentCard] = useState({
		index: 0,
		visible: 'front',
	});

	useEffect(() => {
		readDeck(deckId).then(setStudyDeck);
	}, [deckId]);

	const handleCardFlip = () => {
		currentCard.visible === 'front'
			? setCurrentCard({ ...currentCard, visible: 'back' })
			: setCurrentCard({ ...currentCard, visible: 'front' });
	};
	const handleNextCard = () => {
		if (currentCard.index < studyDeck?.cards?.length - 1)
			setCurrentCard({
				visible: 'front',
				index: currentCard.index + 1,
			});
		if (currentCard.index === studyDeck?.cards?.length - 1) {
			setCurrentCard({ ...currentCard, visible: 'back' });
			(() => {
				if (
					window.confirm(
						`Restart cards?\n Click Cancel to resturn to the Home Screen`
					)
				) {
					setCurrentCard({
						visible: 'front',
						index: 0,
					});
				} else {
					history.push('/');
				}
			})();
		}
	};

	return (
		<div css={studyPageStyle}>
			<ul className='breadcrumb border'>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>
					📘 <Link to='./'>{studyDeck.name}</Link>
				</li>
				<li>📖 Study</li>
			</ul>
			<h1>Study: {studyDeck.name}</h1>
			<DeckStudyCard
				currentCard={currentCard}
				studyDeck={studyDeck}
				handleNextCard={handleNextCard}
				handleCardFlip={handleCardFlip}
			/>
		</div>
	);
};

export default DeckStudy;
