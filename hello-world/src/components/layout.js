import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import { toggleMobileNavigation } from "../scripts/toggle-mobile-navigation";
import "../style/global.css";

export default function Layout(props) {
  useEffect(() => {
    const handleResize = () => {
      const pageContent = document.getElementsByTagName("main")[0];
        if(window.screen.availWidth > 520 && pageContent.classList.contains("displayOff"))
          toggleMobileNavigation();
    };

    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="page-content">
        <Helmet>
          <title>{`DMD - Home`}</title>
        </Helmet>
        <Header/>
        <main className={props.mainClass}>{props.children}</main>
    </div>
  );
}
