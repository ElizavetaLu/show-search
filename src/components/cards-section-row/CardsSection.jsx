import "./cardsSection.scss";

const CardsSection = ({ title, children }) => {
    return (
        <div className="cards-section">
            <div className="section-title">{title}:</div>
            <div className="section-cards">
                {children}
            </div>
        </div>
    )
}

export default CardsSection