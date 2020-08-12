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
                        <Link to="/">
                            <span className="pink-text">H</span>OME
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <span className="pink-text">P</span>ROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className="pink-text">A</span>BOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <span className="pink-text">C</span>ONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}