import React from "react";
import Header from "./header";
import "../styles/global.css";

export default function Layout(props) {
  return (
    <>
        <Header/>
        <main>{props.children}</main>
    </>
  );
}
