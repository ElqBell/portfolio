import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import svgImage from "../images/svg/boy-standing-girl-sitting-on-laptop.svg";
import fallbackImage from "../images/svg/gallery-img.jpg";
import localStyles from "./home.module.css";

export default function Home() {
  console.log(localStyles);
  return (
      <Layout mainClass={localStyles.mainContent}>
        <section>
          <h1 className="heading-1">I help you to connect with your customers</h1>
          <article>
            <h2 className="heading-3">Frontend developer & designer</h2>
            <h2 className="heading-3">Deimantas Butėnas</h2>
            <Link to="/projects" className="button">See my projects</Link>
            <Link to="/contact" className="button">Contact me</Link>
          </article>
        </section>
        <aside>
          <img src={svgImage} onError={function(){this.src=fallbackImage}} alt="" />
        </aside>
      </Layout>
  );
}