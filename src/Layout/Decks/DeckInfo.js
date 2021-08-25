import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const card__btnRow = css`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
`;

const DeckInfo = ({ deck }) => {
	const { url, path } = useRouteMatch();
	console.log(url, path);
	const { id, name, description } = deck;
	return (
		<div className='card' style={{ marginBottom: '2em' }}>
			<div className='card-body'>
				<h4 className='card-title'>{name}</h4>
				<h5 className='card-subtitle'>3 cards in this deck</h5>
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
					<div
						className='delete card-link paper-btn btn-danger'
						title='delete this deck'
					>
						❌
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeckInfo;
