import React from "react";
import { Link } from "gatsby";
import ProjectLayout from "../../components/projectLayout";
import { ProjectIMG1 } from "../../images";
import localStyles from "./project.module.css";

export default function Project1() {
  return (
    <ProjectLayout mainClass={localStyles.mainContent} projectNum={1} >
        <section>
          <Link to=".." className={`button ${localStyles.linkBack}`}>Go back</Link>
          <p className={localStyles.projectNumber}>01.</p>
          <h1 className="heading-1">Photography portfolio.</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>A photography and videography portfolio website.</p>
          </article>
          <article>
            <h2 className="heading-3">Features:</h2>
            <ul>
              <li>Image and video lazyloading</li>
              <li>Automatic image compression</li>
              <li>Automatic image clean-up(deletion) from S3</li>
              <li>Automatic 'videos' page HTML code generation</li>
              <li>Automatic HTML code generation of individual image galleries' pages and 'all-galleries' page</li>
              <li>Email contact form</li>
            </ul>
          </article>
          <article>
            <h2 className="heading-3">Tools used:</h2>
            <ul>
              <li>Amazon Web Services(AWS)</li>
              <li>NodeJS with AWS Lambda</li>
              <li>NodeJS image processing module 'sharp'</li>
              <li>JavaScript</li>
              <li>SCSS</li>
              <li>HTML</li>
            </ul>
          </article>
        </section>
        <aside>
          <Link to="/preview" className="button">
            <p>Visit project page</p>
            <img src={ProjectIMG1} alt="Project page overview"/>
          </Link>
        </aside>
    </ProjectLayout>
  );
}
