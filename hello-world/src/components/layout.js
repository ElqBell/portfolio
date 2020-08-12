import React from "react";
import Header from "./header";
import "../styles/global.css";

export default function Layout(props) {
  return (
    <div className="page-content">
        <Header/>
        <main>{props.children}</main>
    </div>
  );
}
