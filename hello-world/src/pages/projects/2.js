import React from "react";
import { Link } from "gatsby";
import ProjectLayout from "../../components/projectLayout";
import { ProjectIMG2 } from "../../images";
import localStyles from "./project.module.css";

export default function Project2() {
  return (
    <ProjectLayout mainClass={localStyles.mainContent} projectNum={2} >
        <section>
          <Link to=".." className={`button ${localStyles.linkBack}`}>Go back</Link>
          <p className={localStyles.projectNumber}>02.</p>
          <h1 className="heading-1">Movie database.</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>Movie database website where you can search for movies and read information about them.</p>
          </article>
          <article>
            <h2 className="heading-3">Features:</h2>
            <ul>
              <li>Data fetching from themoviedb.org</li>
              <li>Simple and intuitive design</li>
              <li>Fast and efficient code</li>
              <li>Movie sorting by popularity</li>
            </ul>
          </article>
          <article>
            <h2 className="heading-3">Tools used:</h2>
            <ul>
              <li>ReactJS with GatsbyJS</li>
              <li>SCSS</li>
              <li>HTML</li>
            </ul>
          </article>
        </section>
        <aside>
          <Link to="preview" className="button">
            <p>Visit project page</p>
            <img src={ProjectIMG2} alt="Project page overview"/>
          </Link>
        </aside>
    </ProjectLayout>
  );
}
