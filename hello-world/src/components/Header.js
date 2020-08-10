import React from "react";
import { Link } from "gatsby";

export default function Header() {
    return (
        <header>
            <h1>this is header!u</h1>
            <Link to="/">home </Link>
            <Link to="/projects">projects </Link>
            <Link to="/about">about </Link>
            <Link to="/contact">contact </Link>
        </header>
    );
}