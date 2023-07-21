import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actions/index"
import { GET_SHOW } from "../../redux/actions/types"
import Card from "../allCards/card/Card";
import "./main.scss" 


const Main = () => {

    const dispatch = useDispatch();
    const { options, show } = useSelector(state => state.searchResults);


    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {

            dispatch(setSearchValue(searchTerm))
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchTerm])


    const onSearch = e => {
        e.preventDefault();
        dispatch({ type: GET_SHOW })
    }

    return (
        <main className="main">
            <section className="search-section">
                <div className="bottom-gradient"></div>

                <div className="content">
                    <div className="title">Search information about any show which are you interested in</div>
                    <div className="text">+60 000 shows</div>

                    <form className="search-form" onSubmit={onSearch}>
                        <input
                            className="search"
                            placeholder="Search for..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            list="options"
                        />
                        <datalist id="options" className="options">
                            {
                                options &&
                                options.map((option, i) => (
                                    <option
                                        className="option"
                                        value={option.value}
                                        key={i}
                                    >{option.value}</option>
                                ))
                            }
                        </datalist>

                        <button className="search-btn" type="submit">
                            <img className="search-icon" src="/images/icons8-search-64.png" alt="" />
                        </button>
                    </form>
                </div>
            </section>

            <section className="main-content">
                <div className="show-list">
                    {show && show.map(show => <Card key={show.id} {...show} />)}
                </div>
            </section>
        </main>
    )
}

export default Main