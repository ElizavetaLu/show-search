import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <div className="header-container">
            <header className="header">
                <Link className="logo-link" to="/">
                    <img className="logo" src="/images/logo.png" alt="" />
                </Link>
            </header>
        </div>
    )
}

export default Header