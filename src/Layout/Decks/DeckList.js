import React, { useEffect, useState } from 'react';
import DeckInfo from './DeckInfo';

const DeckList = () => {
	const [decks, setDecks] = useState([]);

	useEffect(() => {
		setDecks([]);
		const abortController = new AbortController();
		fetch('http://localhost:5000/decks', { signal: abortController.signal })
			.then((response) => response.json())
			.then(setDecks)
			.catch((error) => {
				if (error.name !== 'AbortError') throw error;
			});
		return () => abortController.abort();
	}, []);

	return (
		<>
			{decks.map((deck) => (
				<DeckInfo deck={deck} />
			))}
		</>
	);
};

export default DeckList;
