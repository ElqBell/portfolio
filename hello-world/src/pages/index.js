import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import svgImage from "../images/svg/boy-standing-girl-sitting-on-laptop.svg";
import fallbackImage from "../images/svg/gallery-img.jpg";

export default function Home() {
  return (
      <Layout>
        <section>
          <h1>I help you to connect with your customers</h1>
          <article>
            <h4>Frontend developer & designer</h4>
            <h4>Deimantas Butėnas</h4>
            <Link to="/projects">See my projects</Link>
            <Link to="/contact">Contact me</Link>
          </article>
        </section>
        <aside>
          <img src={svgImage} onerror={`this.src=${fallbackImage}`} alt="" />
        </aside>
      </Layout>
  );
}