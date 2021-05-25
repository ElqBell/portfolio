import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { GitHub, SVGBoy, SVGBoyFallback, ProjectIMG1,
         ProjectIMG2, ProjectIMG3, ProjectIMG4, ProjectIMG1lowq,
         ProjectIMG2lowq, ProjectIMG3lowq, ProjectIMG4lowq
       } from "../../images";
import localStyles from "./projects.module.css";
import LazyLoad from "vanilla-lazyload";

export default function Projects() {
  useEffect(function() {
    // Initialize lazyload one time for the entire application
    if (!document.lazyLoadInstance)
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload"
      });
  }, []);

  return (
    <Layout mainClass={localStyles.mainContent}>
      <Helmet>
        <title>{`Deimantas Butėnas - Projects`}</title>
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
          <Link to="1">
            <p>Learn more</p>
            <img className="lazyload" src={ProjectIMG1lowq} data-src={ProjectIMG1} alt="First project page overview"/>
          </Link>
          <Link to="2">
            <p>Learn more</p>
            <img className="lazyload" src={ProjectIMG2lowq} data-src={ProjectIMG2} alt="Second project page overview"/>
          </Link>
          <Link to="3" >
            <p>Learn more</p>
            <img className="lazyload" src={ProjectIMG3lowq} data-src={ProjectIMG3} alt="Third project page overview"/>
          </Link>
          <Link to="4" >
            <p>Learn more</p>
            <img className="lazyload" src={ProjectIMG4lowq} data-src={ProjectIMG4} alt="Fourth project page overview"/>
          </Link> 
        </div>
      </aside>
    </Layout>
  );
}