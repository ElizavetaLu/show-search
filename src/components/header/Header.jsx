import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <div className="header-container">
            <header className="header">
                <Link className="logo-link" to="/show-search/build/">
                    <img className="logo" src="/show-search/build//images/logo.png" alt="" />
                </Link>
            </header>
        </div>
    )
}

export default Header