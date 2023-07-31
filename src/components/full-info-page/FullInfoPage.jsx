import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CaracterCard from "../allCards/caracter-card/CaracterCard";
import EpisodeCard from "../allCards/episode-card/EpisodeCard";
import CardsSection from "../cards-section-row/CardsSection";
import SeasonCard from "../allCards/saeason-card/SeasonCard";
import Person from "../allCards/person-row/Person";
import Dummy from "../dummy-text/Dummy";
import parse from "html-react-parser";
import "./fullInfoPage.scss";



const FullInfoPage = () => {

    const { state } = useLocation();
    const {
        genres,
        image,
        language,
        name,
        premiered,
        ended,
        rating,
        status,
        summary,
    } = state

    const { cast, episodes, seasons } = useSelector(state => state.selectedShow);

    if (!state) return;

    return (
        <div className="fullInfoPage-wrapper">
            <div className="img-bg" style={{ backgroundImage: `url(${image && image?.original})` }}>
                <div className="blur">
                    <div className="background"></div>

                    <div className="show-data">
                        <div className="poster-container">
                            <div className="poster" style={{ backgroundImage: `url(${image?.original || '/show-search/build//images/no-image.png'})` }}></div>

                            <div className="buttons">
                                <button className="poster-btn">Add to Favorites</button>
                                <button className="poster-btn">Watch Online</button>
                                <button className="poster-btn">Official Site</button>
                            </div>
                        </div>

                        <div className="data">
                            <div className="row">
                                <div className="title">
                                    <p className="show-name">{name}</p>
                                    <div className="year">{premiered.slice(0, 4)}</div>
                                </div>
                                <div className="status">Status: <span className="text">{status}</span></div>
                            </div>

                            {
                                genres.length > 0 &&
                                <div className="genres">{genres.join(' | ')}</div>
                            }

                            <div className="information">
                                <div className="information-block">
                                    <h3 className="block-title">Details:</h3>

                                    <div className="details">
                                        <div className="detail-row">
                                            <span className="detail-title">Rating: </span>
                                            <p className="detail-text">{rating.average || '-'}</p>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-title">Language: </span>
                                            <p className="detail-text">{language}</p>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-title">Premiered: </span>
                                            <p className="detail-text">{premiered}</p>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-title">Ended: </span>
                                            <p className="detail-text">{ended ? ended : 'Is running'}</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <span className="description-title">Storyline: </span>
                                        <div className="description-text">{parse(summary)}{parse(summary)}</div>
                                    </div>
                                </div>

                                <div className="information-block">
                                    <h3 className="block-title">Cast:</h3>
                                    <div className="cast-list">
                                        {
                                            cast?.length > 0
                                                ? cast.map(({ person }) => <Person
                                                    key={person.id}
                                                    name={person.name}
                                                    image={person?.image}
                                                />)
                                                : <Dummy text="We don't have information about cast yet..." />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info">
                <CardsSection title="Characters">
                    {
                        cast?.length > 0
                            ? cast.map(({ character }) => (
                                <CaracterCard key={character.id} {...character} />
                            ))
                            : <Dummy text="Sorry, we don't have information about characters" />
                    }
                </CardsSection>

                <CardsSection title="Episodes">
                    {
                        episodes?.length > 0

                            ? episodes.map(item => (
                                <EpisodeCard key={item.id} {...item} />
                            ))
                            : <Dummy text="We don't have information about episodes yet." />
                    }
                </CardsSection>

                <CardsSection title="Seasons">
                    {
                        seasons?.length > 0
                            ? seasons.map(item => (
                                <SeasonCard key={item.id} {...item} />
                            ))
                            : <Dummy text="We don't have information about seasons yet." />
                    }
                </CardsSection>
            </div>
        </div>
    )
}

export default FullInfoPage