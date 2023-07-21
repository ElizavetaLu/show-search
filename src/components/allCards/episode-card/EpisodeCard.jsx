import React from "react";
import "./episodeCard.scss";

const EpisodeCard = ({ name, image, season }) => {

    return (
        <div className="episode-card">
            <img
                className="episode-image"
                src={image?.medium ? image.medium : '/images/no-image.png'}
                alt=""
            />

            <div className="episode-info">
                <div className="season">Season {season}</div>
                <div className="name">{name}</div>
            </div>
        </div>
    )
}

export default EpisodeCard