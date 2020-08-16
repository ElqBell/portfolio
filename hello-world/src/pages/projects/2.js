import React from "react";
import { Link } from "gatsby";
import ProjectLayout from "../../components/projectLayout";
import { ProjectIMG2 } from "../../images";
import localStyles from "./project.module.css";

export default function Project2() {
  return (
    <ProjectLayout mainClass={localStyles.mainContent}>
        <section>
          <Link to=".." className={`button ${localStyles.linkBack}`}>Go back</Link>
          <p className={localStyles.projectNumber}>02.</p>
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
          <Link to="preview" className="button">
            <p>View project</p>
            <img src={ProjectIMG2} alt="Project page overview"/>
          </Link>
        </aside>
    </ProjectLayout>
  );
}
