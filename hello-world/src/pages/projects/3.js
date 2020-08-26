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
          <h1 className="heading-1">Face detection app.</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>A simple web app that detects and recognizes faces in real time. Implemented using JavaScript <a href="https://github.com/justadudewhohacks/face-api.js">face-api</a> that uses <a href="https://www.tensorflow.org">tensorflow</a> machine learning.</p>
          </article>
          <article>
            <h2 className="heading-3">Features:</h2>
            <ul>
              <li>Multiple face detection</li>
              <li>Emotion recognition (such as happiness or sadness)</li>
              <li>Facial landmark (feature) recognition</li>
            </ul>
          </article>
          <article>
            <h2 className="heading-3">Tools used:</h2>
            <ul>
              <li>'face-api' for face detection and recognition</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
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
