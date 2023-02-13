import type { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/" className="brand">
                        <img
                            src="/images/logo-bg.png"
                            alt="Learn with Sumit Logo"
                        />
                        <h3>Quiz Application</h3>
                    </a>
                </li>
            </ul>
            <div className="account">
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <Link to="/signup">Signup</Link>
                {/* <span className="material-icons-outlined" title="Logout">
                    Logout
                </span> */}
            </div>
        </nav>
    );
};

export default Navbar;
