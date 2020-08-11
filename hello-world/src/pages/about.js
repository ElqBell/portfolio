import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <section>
        <h1>Hello, my name is Deimantas Butėnas.</h1>
        <article>
          <h4>I'm a passionate frontend developer and designer with high attention to detail and user experience. Currently I'm studying software engineering at Kaunas University of Technology.</h4>
        </article>
        <article>
          <h3>My skills:</h3>
          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>SCSS(CSS)</li>
            <li>HTML</li>
            <li>Website design</li>
          </ul>
        </article>
        <article>
          <h3>I also have some experience with:</h3>
          <ul>
            <li>NodeJS</li>
            <li>Amazon Web Services</li>
          </ul>
        </article>
      </section>
      <aside>
        <h2>Interested?</h2>
        <Link to="/projects">See my projects</Link>
        <Link to="/contact">Contact me</Link>
      </aside>
    </Layout>
  );
}
