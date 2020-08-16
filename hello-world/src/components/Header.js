import React from "react";
import { Link } from "gatsby";
import toggleMobileNavigation from "../scripts/toggle-mobile-navigation";

function removeScrollLock() {
    document.getElementsByTagName("html")[0].classList.remove("scroll-lock");
}

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">
            <span className="pink-text">D</span>MD
            </Link>
            <div className="mobile-navigation-bar" onClick={toggleMobileNavigation}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" activeClassName="active-link" onClick={removeScrollLock}>
                            <span className="pink-text">H</span>OME
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" activeClassName="active-link" partiallyActive={true} onClick={removeScrollLock}>
                            <span className="pink-text">P</span>ROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active-link" onClick={removeScrollLock}>
                            <span className="pink-text">A</span>BOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active-link" onClick={removeScrollLock}>
                            <span className="pink-text">C</span>ONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}