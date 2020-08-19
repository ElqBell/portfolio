import React, { useEffect } from "react";
import { Helmet } from "react-helmet"
import Header from "./header";
import { turnNavigationOff } from "../scripts/toggle-mobile-navigation";
import "../style/global.css";

export default function Layout(props) {
  useEffect(function(){
    window.addEventListener('resize', function() {
      const pageContent = document.getElementsByTagName("main")[0];
      if(window.screen.availWidth > 520 && pageContent.classList.contains("displayOff"))
          turnNavigationOff(pageContent);
    });
  });

  return (
    <div className="page-content">
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
          <link rel="manifest" href="site.webmanifest" />
          <meta name="keywords" content="" />
          <meta property="og:title" content="DMD - Home" />
          <meta property="og:type" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="" />
          <meta property="og:url" content="https://www.deimantasbutenas.lt/" />
          <link rel="canonical" href="https://www.deimantasbutenas.lt/" />
          <title>DMD - Home</title>
        </Helmet>
        <Header/>
        <main className={props.mainClass}>{props.children}</main>
    </div>
  );
}
