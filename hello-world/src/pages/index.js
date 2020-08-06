import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div style={{ color: 'purple' }}>
      <Link to="/projects/1/galleries/">Project 1</Link>
      <h1>Hello Gatsby!</h1>
    </div>
  );
}
