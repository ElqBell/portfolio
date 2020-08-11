import React from "react";
import { Link } from "gatsby";

export default function Header() {
    return (
        <header>
            <Link to="/">DMD</Link>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
}