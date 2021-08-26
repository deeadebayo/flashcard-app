import React, { useEffect, useState } from 'react';
import StudyCard from '../Study/StudyCard';
import { useRouteMatch, useParams, Link } from 'react-router-dom';
import { readDeck } from '../../utils/api';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const breadcrumbStyle = css`
	li > * {
		margin-right: 0.75em;
	}
`;

const DeckStudy = () => {
	const { deckId } = useParams();
	const { path, url } = useRouteMatch();
	console.log(path, url);
	const [studyDeck, setStudyDeck] = useState([]);

	useEffect(() => {
		setStudyDeck([]);
		readDeck(deckId).then(setStudyDeck);
	}, [deckId]);

	return (
		<>
			<ul className='breadcrumb border' css={breadcrumbStyle}>
				<li>
					<Link to='/'>🏠 Home</Link>
				</li>
				<li>
					<Link to={url}>📘 {studyDeck.name}</Link>
				</li>
				<li>📖 Study</li>
			</ul>
			<h1>Study: {studyDeck.name}</h1>
			<StudyCard />
		</>
	);
};

export default DeckStudy;
