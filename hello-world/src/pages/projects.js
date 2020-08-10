import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <div style={{ color: 'lightblue' }}>
        <h1>all projects page</h1>
        <Link to="/projects/1">1  </Link>
        <Link to="/projects/2">2  </Link>
        <Link to="/projects/3">3  </Link>
        <Link to="/projects/4">4  </Link>
      </div>
    </Layout>
  );
}
