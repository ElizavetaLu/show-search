import React from "react";
import "./seasonCard.scss";

const SeasonCard = (props) => {
    const {
        number,
        image,
        episodeOrder
    } = props


    return (
        <div className="season-card">
            <div className="season-image">
                <img src={image?.medium ? image.medium : '/show-search/build//images/5f36cb18a4a17795a0b1e1a419e07749.png'} alt="" />
            </div>

            <div className="season-info">
                <div className="number">Season: {number}</div>
                <div className="amount">Episodes: {episodeOrder}</div>
            </div>
        </div>
    )
}

export default SeasonCard