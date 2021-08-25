import React from 'react';
import StudyCard from './StudyCard';
import { useParams } from 'react-router-dom';

const StudyPage = () => {
	const { deckId } = useParams();
	return (
		<>
			<h1>Study: for {deckId}</h1>
			<StudyCard />
		</>
	);
};

export default StudyPage;
