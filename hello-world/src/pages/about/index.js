import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout/layout";
import localStyles from "./about.module.css";

export default function About() {
  return (
    <Layout>
      <section>
        <h1 className="heading-1">Hello, my name is Deimantas Butėnas.</h1>
        <article>
          <h3 className="heading-3">I'm a passionate frontend developer and designer with high attention to detail and user experience. Currently I'm studying software engineering at Kaunas University of Technology.</h3>
        </article>
        <article>
          <h2 className="heading-2">My skills:</h2>
          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>SCSS(CSS)</li>
            <li>HTML</li>
            <li>Website design</li>
          </ul>
        </article>
        <article>
          <h2 className="heading-2">I also have some experience with:</h2>
          <ul>
            <li>NodeJS</li>
            <li>Amazon Web Services</li>
          </ul>
        </article>
      </section>
      <section>
        <h2 className="heading-2">Interested?</h2>
        <Link to="/projects" className="button">See my projects</Link>
        <Link to="/contact" className="button">Contact me</Link>
      </section>
    </Layout>
  );
}