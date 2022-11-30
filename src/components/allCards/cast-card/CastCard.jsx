import React from "react";
import "./castCard.scss";

const CastCard = (props) => {
    const {
        person,
        character
    } = props


    return (
        <div className="cast-card">
            <div className="cast-photo">
                <img src={person?.image?.medium ? person.image.medium : '/show-search/build//images/5f36cb18a4a17795a0b1e1a419e07749.png'} alt="" />
            </div>

            <div className="cast-info">
                <div className="name">{person.name}</div>
                <div className="starred-as">Starred as: {character.name}</div>
            </div>
        </div>
    )
}

export default CastCard