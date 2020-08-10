import React from "react";
import Layout from "../components/layout";

export default function Project({projectId}) {
  return (
    <Layout>
      <div style={{ color: 'lightblue' }}>
      <h1>single project page {projectId}</h1>
      </div>
    </Layout>
  );
}
