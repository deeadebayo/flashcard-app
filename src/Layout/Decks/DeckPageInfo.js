import React from 'react';
import { useParams } from 'react-router-dom';

const DeckPageInfo = () => {
	const { deckId } = useParams();
	return <p>THis is the deck page for {deckId}</p>;
};

export default DeckPageInfo;
