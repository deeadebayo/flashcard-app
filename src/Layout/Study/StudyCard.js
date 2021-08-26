import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const studyCardStyle = css`
	p {
		max-width: 65ch;
	}
`;
const StudyCard = () => {
	return (
		<>
			<div className='card' css={studyCardStyle}>
				<div className='card-body'>
					<h3 className='card-title'>Card 1 of </h3>
					<p className='card-text'>
						This is another example of a card without image. Cards
						are also meant to be used without images, but with
						text/links/buttons.
					</p>
				</div>
			</div>
		</>
	);
};

export default StudyCard;
