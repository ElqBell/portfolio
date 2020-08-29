import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { GitHub, SVGBoy, SVGBoyFallback, ProjectIMG1,
         ProjectIMG2, ProjectIMG3, ProjectIMG4, ComingSoon
       } from "../../images";
import localStyles from "./projects.module.css";

export default function Projects() {
  return (
    <Layout mainClass={localStyles.mainContent}>
      <Helmet>
        <title>{`DMD - Projects`}</title>
      </Helmet>
      <section>
        <h1 className="heading-1">Get to know me through my work.</h1>
        <article>
          <h2 className="heading-3">You can find code examples and more projects on my:</h2>
          <div className={localStyles.gitLink} href="https://github.com/ElqBell">
            <img src={GitHub} alt="" />
            <a href="https://github.com/ElqBell" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className={localStyles.svgDiv}>
            <img src={SVGBoy} onError={function(){this.src=SVGBoyFallback}} alt="" />
          </div>
        </article>
      </section>
      <aside>
        <div>
          <Link to="projects/1/">
            <p>Learn more</p>
            <img src={ProjectIMG1} alt="First project page overview"/>
          </Link>
          <Link to="projects/2/">
            <p>Learn more</p>
            <img src={ProjectIMG2} alt="Second project page overview"/>
          </Link>
          <Link className={localStyles.comingSoon} >
            <p>Learn more</p>
            <img src={ComingSoon} alt="Third project page overview"/>
          </Link>
          <Link className={localStyles.comingSoon} >
            <p>Learn more</p>
            <img src={ComingSoon} alt="Fourth project page overview"/>
          </Link> 
        </div>
      </aside>
    </Layout>
  );
}