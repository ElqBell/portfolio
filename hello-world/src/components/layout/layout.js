import React from "react";
import Header from "../header";
import "./global.css";

export default function Layout(props) {
  return (
    <div className="page-content">
        <Header/>
        <main className={props.mainClass}>{props.children}</main>
    </div>
  );
}
