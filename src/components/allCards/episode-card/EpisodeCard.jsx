import React from "react";
import "./episodeCard.scss";

const EpisodeCard = (props) => {
    const {
        name,
        image,
        season
    } = props


    return (
        <div className="episode-card">
            <div className="episode-photo">
                <img src={image?.medium ? image.medium : '/show-search/build//images/5f36cb18a4a17795a0b1e1a419e07749.png'} alt="" />
            </div>

            <div className="episode-info">
                <div className="season">Season {season}</div>
                <div className="name">{name}</div>
            </div>
        </div>
    )
}

export default EpisodeCard