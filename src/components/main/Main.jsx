import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actions/index"
import { GET_SHOW } from "../../redux/actions/types"
import Card from "../allCards/card/Card";
import "./main.scss"


const Main = () => {

    const dispatch = useDispatch();
    const { options, show, searchValue } = useSelector(state => state.searchResults);


    return (
        <div className="main-wrapper">
            <div className="main-container">
                <div className="backgroundImg" style={{ backgroundImage: 'url("/show-search/build//images/modern-futuristic-sci-fi-background.jpg")' }}>
                    <div className="background"></div>

                    <div className="content-text">
                        <div className="h1">Search information about any show which are you interested in</div>
                        <div className="text">+60 000 shows</div>

                        <form className="search-space" onSubmit={() => dispatch({ type: GET_SHOW })}>
                            <div className="search-container">
                                <input
                                    className="search"
                                    placeholder="Search for..."
                                    value={searchValue}
                                    onChange={e => dispatch(setSearchValue(e.target.value))}
                                    list="options"
                                />
                                <datalist id="options" className="datalist">

                                    {options &&
                                        options.map((option, i) => (
                                            <option
                                                className="option"
                                                value={option.value}
                                                key={i}
                                            >{option.value}</option>
                                        ))}

                                </datalist>
                            </div>

                            <button className="search-btn" type="submit">
                                <img src="/show-search/build//images/icons8-search-64.png" alt="" />
                            </button>
                        </form>
                    </div>
                </div>


                <div className="main_content">
                    <div className="all-card-wrapper">

                        {searchValue && <div className="section-title">"{searchValue}" Search Results:</div>}

                        <div className="all-show-cards">
                            {show && show.map(show => <Card key={show.id} {...show} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main