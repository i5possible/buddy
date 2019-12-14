import React from 'react';
import Flippy, { FrontSide, BackSide } from '../Flippy';
import './FlippyCard.css';

const FlippyCard = (props) => {
    const {frontSideContent, backSideContent, isFlipped} = {...props};
    return (
        <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            isFlipped={isFlipped}
            {...props}
        >
            <FrontSide className="frontSide center">
                {frontSideContent}
            </FrontSide>
            <BackSide className="backSide center">
                {backSideContent}
            </BackSide>
        </Flippy>
    );
};

FlippyCard.propTypes = {

};

export default FlippyCard;
