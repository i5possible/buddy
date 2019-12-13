import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './FlippyCard.css';

const FlippyCard = (props) => {
    const {frontSideContent, backSideContent} = {...props};
    return (
        <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            isFlippy={false}
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
