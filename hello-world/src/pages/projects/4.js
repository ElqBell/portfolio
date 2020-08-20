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
          <h1 className="heading-1">Project name.</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>Description.</p>
          </article>
          <article>
            <h2 className="heading-3">Features:</h2>
            <ul>
            </ul>
          </article>
          <article>
            <h2 className="heading-3">Tools used:</h2>
            <ul>
            </ul>
          </article>
        </section>
        <aside>
          <Link to="preview" className="button" target="_blank">
            <p>Visit project page</p>
            <img src={ProjectIMG4} alt="Project page overview"/>
          </Link>
        </aside>
    </ProjectLayout>
  );
}
