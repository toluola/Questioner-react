import React from 'react';

const TitleBar = ({ content }) => {
    return (
        <div className='title-bar'>
            <h1 className='title-bar-content'>{content}</h1>
            <hr />
        </div>
    )
}

export default TitleBar;