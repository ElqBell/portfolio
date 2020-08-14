import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import svgImagePerson from "../../images/svg/boy-sitting-tree-laptop-grass.svg";
import svgImageBlocks from "../../images/svg/block.svg";
import fallbackImagePerson from "../../images/svg/gallery-img.jpg";
import fallbackImageBlocks from "../../images/svg/gallery-img.jpg";
import gitHubIcon from "../../images/icons/github.png";
import localStyles from "./projects.module.css";

export default function Projects() {
  return (
    <Layout mainClass={localStyles.mainContent}>
      <section>
        <h1 className="heading-1">Get to know me through my work.</h1>
        <article>
          <h2 className="heading-2">You can find code examples and more projects on my</h2>
          <a href="https://github.com/ElqBell">
            <img src={gitHubIcon} alt="" />
            GitHub
          </a>
          <img src={svgImageBlocks} onError={function(){this.src=fallbackImageBlocks}} alt="" />
        </article>
      </section>
      <aside>
        <img src={svgImagePerson} onError={function(){this.src=fallbackImagePerson}} alt="" />
        <Link to="/projects/1">1</Link>
        <Link to="/projects/2">2</Link>
        <Link to="/projects/3">3</Link>
        <Link to="/projects/4">4</Link>
      </aside>
    </Layout>
  );
}
