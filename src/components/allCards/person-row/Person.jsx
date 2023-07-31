import "./person.scss";

const Person = ({ name, image }) => {
    
    return (
        <div className="actor">
            <div
                className="photo"
                style={{
                    backgroundImage: `url(${image?.medium
                        ? image.medium
                        : '/show-search/build//images/no-image.png'
                        })`
                }}
            >
            </div>

            <p className="actor-name">{name}</p>
        </div>
    )
}
export default Person