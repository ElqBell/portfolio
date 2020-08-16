import React, { useEffect } from "react";
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
        <Header/>
        <main className={props.mainClass}>{props.children}</main>
    </div>
  );
}
