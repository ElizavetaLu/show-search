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
            to={`/${name.replace('/', '-')}`}
            state={props}
            onClick={() => {
                dispatch(setSelectedShowId(id))
                dispatch(setSearchValue(''))
            }}
            className="card-link"
        >
            <div className="card">
                {
                    rating.average &&
                    <div className="rate">{rating.average}</div>
                }

                <img
                    className="show-image"
                    src={image?.medium ? image.medium : '/images/no-image.png'}
                    alt=""
                />

                <div className="brief-data">
                    <div className="name">{name}</div>
                    <div className="ended">Ended: {status}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card