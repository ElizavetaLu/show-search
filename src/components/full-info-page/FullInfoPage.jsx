import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CastCard from "../allCards/cast-card/CastCard";
import EpisodeCard from "../allCards/episode-card/EpisodeCard";
import SeasonCard from "../allCards/saeason-card/SeasonCard";
import "./fullInfoPage.scss"


const FullInfoPage = () => {

    const parse = require('html-react-parser');

    const { state } = useLocation()
    const {
        genres,
        image,
        language,
        name,
        premiered,
        rating,
        status,
        summary,
    } = state

    const cast = useSelector(state => state.selectedShow.cast)
    const episodes = useSelector(state => state.selectedShow.episodes)
    const seasons = useSelector(state => state.selectedShow.seasons)

    if (!state) return

    return (
        <div className="fullInfoPage-wrapper">
            <div className="img-bg" style={{ backgroundImage: `url(${image ? image?.original : ''})` }}>
                <div className="blur">
                    <div className="background"></div>

                    <Link to={'/show-search'}>
                        <div className="navigation">
                            <div className="icon">
                                <img src="/show-search//images/arrow.png" alt="" />
                            </div>
                            <div className="nav-text"> Get back to search</div>
                        </div>
                    </Link>

                    <div className="main-show-info">
                        <div className="poster-img">
                            <img src={image.original ? image.original : '/show-search//images/5f36cb18a4a17795a0b1e1a419e07749.png'} alt="" />
                        </div>
                        <div className="full-info">
                            <div className="genres">Genres: {genres?.join(', ')}</div>
                            <div className="showName">
                                <div className="text">{name}</div>
                                <div className="rate">{rating?.average}</div>
                            </div>
                            <div className="premiered">Premiered: {premiered}</div>
                            <div className="status">Status: {status}</div>
                            <div className="language">Language: {language}</div>
                            <div className="description">{parse(summary)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info">

                <div className="cards-row">
                    <div className="section-title">Cast:</div>
                    <div className="section-cards">
                        {
                            cast && cast.lenght < 0
                                ? <span className="dumb"> ...We don't have information about cast yet.</span>
                                : cast.map(item => (
                                    <CastCard key={item.person.id} {...item} />
                                ))
                        }

                    </div>
                </div>

                <div className="cards-row episodes">
                    <div className="section-title">Episodes:</div>
                    <div className="section-cards">
                        {
                            episodes && episodes.lenght < 0
                                ? <span className="dumb"> ...We don't have information about episodes yet.</span>
                                : episodes.map(item => (
                                    <EpisodeCard key={item.id} {...item} />
                                ))
                        }
                    </div>
                </div>

                <div className="cards-row">
                    <div className="section-title">Seasons:</div>
                    <div className="section-cards">
                        {
                            seasons && seasons.lenght < 0
                                ? <span className="dumb"> ...We don't have information about seasons yet.</span>
                                : seasons.map(item => (
                                    <SeasonCard key={item.id} {...item} />
                                ))
                        }

                    </div>
                </div>


            </div>
        </div>
    )
}

export default FullInfoPage