import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import localStyles from "./about.module.css";

export default function About() {
  return (
    <Layout mainClass={localStyles.mainContent}>
      <Helmet>
        <title>{`DMD - About`}</title>
      </Helmet>
      <section>
        <h1 className="heading-1">Hello, my name is Deimantas Butėnas.</h1>
        <h3 className="heading-3">I'm a passionate frontend developer with high attention to detail and user experience. Currently I'm studying Software Systems at Kaunas University of Technology.</h3>
        <div className={localStyles.articleWrapper}>
          <article>
            <h2 className="heading-2">Tools I use:</h2>
            <ul>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>SCSS, CSS</li>
              <li>HTML</li>
              <li>Git</li>
            </ul>
          </article>
          <article>
            <h2 className="heading-2">I also have some experience with:</h2>
            <ul>
              <li>NodeJS</li>
              <li>Amazon Web Services</li>
            </ul>
          </article>
        </div>
      </section>
      <section>
        <h2 className="heading-2">Interested?</h2>
        <Link to="/projects" className="button">See my projects</Link>
        <Link to="/contact" className="button">Contact me</Link>
      </section>
    </Layout>
  );
}
