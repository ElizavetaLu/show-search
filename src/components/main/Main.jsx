import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actions/index"
import { GET_SHOW } from "../../redux/actions/types"

import "./main.scss"
import Card from "../allCards/card/Card";
import { useEffect } from "react";


const Main = () => {

    const option = useSelector(state => state.searchResults.options)
    const show = useSelector(state => state.searchResults.show)
    const value = useSelector(state => state.searchResults.searchValue)


    const dispatch = useDispatch()


    useEffect(() => {
        const onKeyDown = e => {
            if (e.keyCode === 13) {
                dispatch({ type: GET_SHOW });
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [dispatch]);

    return (
        <div className="main-wrapper">
            <div className="main-container">
                <div className="backgroundImg" style={{ backgroundImage: 'url("/show-search/build//images/modern-futuristic-sci-fi-background.jpg")' }}>
                    <div className="background"></div>


                    <div className="content-text">
                        <div className="h1">Search information about any show which are you interested in</div>
                        <div className="text">+60 000 shows</div>
                        <div className="search-space">
                            <div className="search-container">
                                <input
                                    className="search"
                                    placeholder="Search for..."
                                    value={value}
                                    onChange={e => dispatch(setSearchValue(e.target.value))}
                                    list="options"
                                />
                                <datalist id="options" className="datalist">

                                    {option &&
                                        option.map((option, i) => (
                                            <option
                                                className="option"
                                                value={option.value}
                                                key={i}
                                            >{option.value}</option>
                                        ))}

                                </datalist>
                            </div>



                            <button className="search-btn"
                                onClick={() => dispatch({ type: GET_SHOW })}>
                                <img src="/show-search/build//images/icons8-search-64.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="main_content">
                    <div className="all-card-wrapper">

                        {show.length > 0 && <div className="section-title">Results:</div>}
                        
                        <div className="all-show-cards">
                            {show &&
                                show.map(show => (<Card key={show.id} {...show} />))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main