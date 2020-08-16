import React from "react";
import { Link } from "gatsby";
import { toggleMobileNavigation } from "../scripts/toggle-mobile-navigation";

export default function Header() {
    const handleClick = function(e) {
        if (e.keyCode === 13) toggleMobileNavigation();
    };

    return (
        <header>
            <Link to="/" className="logo">
                <span className="pink-text">D</span>MD
            </Link>
            <div className="nav-menu" role="button" tabIndex="0" onClick={toggleMobileNavigation} onKeyDown={handleClick}>
                <span className="pink-text">M</span>ENU
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" activeClassName="active-link">
                            <span className="pink-text">H</span>OME
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" activeClassName="active-link" partiallyActive={true}>
                            <span className="pink-text">P</span>ROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active-link">
                            <span className="pink-text">A</span>BOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active-link">
                            <span className="pink-text">C</span>ONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}