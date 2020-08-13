import React from "react";
import { Link } from "gatsby";
import ProjectLayout from "../../components/projectLayout";
import projectImage from "../../images/svg/block.svg";
import localStyles from "./project.module.css";

export default function Project3() {
  return (
    <ProjectLayout>
        <section>
          <h1 className="heading-1">3 Project name here</h1>
          <article>
            <h2 className="heading-3">About:</h2>
            <p>some text here</p>
          </article>
          <article>
            <h2 className="heading-3">Features:</h2>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
              <li>e</li>
            </ul>
          </article>
          <article>
            <h2 className="heading-3">Tools used:</h2>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
              <li>e</li>
            </ul>
          </article>
        </section>
        <aside>
          <Link to="#" target="_blank">View project</Link>
          <img src={projectImage} alt="Project page overview" />
        </aside>
    </ProjectLayout>
  );
}
