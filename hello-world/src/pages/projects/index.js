import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import svgImagePerson from "../../images/svg/boy-sitting-tree-laptop-grass.svg";
import svgImageBlocks from "../../images/svg/work-in-progress-blocks.svg";
import fallbackImagePeron from "../../images/svg/gallery-img.jpg";
import fallbackImageBlocks from "../../images/svg/gallery-img.jpg";
import gitHubIcon from "../../images/icons/github.png";

export default function Projects() {
  return (
    <Layout>
      <section>
        <h1>Get to know me through my work.</h1>
        <article>
          <h3>You can find code examples and more projects on my</h3>
          <a href="https://github.com/ElqBell">
            <img src={gitHubIcon} alt="" />
            GitHub
          </a>
          <img src={svgImageBlocks} onerror={`this.src=${fallbackImageBlocks}`} alt="" />
        </article>
      </section>
      <aside>
        <img src={svgImagePerson} onerror={`this.src=${svgImagePerson}`} alt="" />
        <Link to="/projects/1">1</Link>
        <Link to="/projects/2">2</Link>
        <Link to="/projects/3">3</Link>
        <Link to="/projects/4">4</Link>
      </aside>
    </Layout>
  );
}
