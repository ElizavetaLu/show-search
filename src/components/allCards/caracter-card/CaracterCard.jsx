import "./caracterCard.scss";

const CaracterCard = ({ name, image }) => {

    return (
        <div className="caracter-card">
            <img
                className="caracter-photo"
                src={image?.medium
                    ? image.medium
                    : '/images/no-image.png'}
                alt=""
            />

            <div className="caracter">
                <div>Starred as: </div>
                <p className="name">{name}</p>
            </div>
        </div>
    )
}

export default CaracterCard