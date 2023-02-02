import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedShowId, setSearchValue } from "../../../redux/actions/index"
import "./card.scss";

const Card = (props) => {
    const {
        id,
        name,
        image,
        status,
        rating
    } = props

    const dispatch = useDispatch()

    return (
        <Link
            to={`/show-search/build/${name.replace('/', '-')}`}
            state={props}
            onClick={() => {
                dispatch(setSelectedShowId(id))
                dispatch(setSearchValue(''))
                }}>
            <div className="show-card">
                <div className="show-image">
                    <img src={image?.medium ? image.medium : '/show-search/build//images/5f36cb18a4a17795a0b1e1a419e07749.png'} alt="" />
                </div>
                <div className="brief-data">
                    <div className="name">{name}</div>
                    <div className="ended">Ended: {status}</div>
                    <div className="rating">{rating.average && rating.average + '/10'}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card