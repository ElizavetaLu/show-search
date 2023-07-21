import React from "react";
import "./seasonCard.scss";

const SeasonCard = ({ number, image, episodeOrder }) => {

    return (
        <div className="season-card">
            <img
                className="season-image"
                src={image?.medium ? image.medium : '/images/no-image.png'}
                alt=""
            />
            
            <div className="season-info">
                <div className="number">Season: {number}</div>
                <div className="amount">Episodes: {episodeOrder}</div>
            </div>
        </div>
    )
}

export default SeasonCard