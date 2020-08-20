import React from "react";
import { Link } from "gatsby";
import ProjectLayout from "../../components/projectLayout";
import { ProjectIMG3 } from "../../images";
import localStyles from "./project.module.css";

export default function Project3() {
  return (
    <ProjectLayout mainClass={localStyles.mainContent} projectNum={3} >
        <section>
          <Link to=".." className={`button ${localStyles.linkBack}`}>Go back</Link>
          <p className={localStyles.projectNumber}>03.</p>
          <h1 className="heading-1">Project name.</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>Description..</p>
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
            <p>Visit project page</p>
            <img src={ProjectIMG3} alt="Project page overview"/>
          </Link>
        </aside>
    </ProjectLayout>
  );
}
