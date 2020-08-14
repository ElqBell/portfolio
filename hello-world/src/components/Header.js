import React from "react";
import { Link } from "gatsby";

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">
            <span className="pink-text">D</span>MD
            </Link>
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