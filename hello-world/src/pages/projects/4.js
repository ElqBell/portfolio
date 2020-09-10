import React from "react";
import { Link } from "gatsby";
import ProjectLayout from "../../components/projectLayout";
import { ProjectIMG4 } from "../../images";
import localStyles from "./project.module.css";

export default function Project4() {
  return (
    <ProjectLayout mainClass={localStyles.mainContent} projectNum={4} >
        <section>
          <Link to=".." className={`button ${localStyles.linkBack}`}>Go back</Link>
          <p className={localStyles.projectNumber}>04.</p>
          <h1 className="heading-1">Japanese Musicians.</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>A website showcasing a few music artists and bands from Japan. With this project I mainly focused on design.</p>
          </article>
          <article>
            <h2 className="heading-3">Tools used:</h2>
            <ul>
              <li>ReactJS with GatsbyJS</li>
              <li>SCSS</li>
              <li>HTML</li>
              <li><a href="http://mypaint.org" target="_blank" rel="noreferrer" >MyPaint</a> for image editing</li>
            </ul>
          </article>
        </section>
        <aside>
          <Link to="preview" className="button">
            <p>Visit project page</p>
            <img src={ProjectIMG4} alt="Project page overview"/>
          </Link>
        </aside>
    </ProjectLayout>
  );
}