import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Project(props) {
  console.log(props);
  return (
    <Layout>
      <div style={{ color: 'lightblue' }}>
      <Link to="..">Go back  </Link>
      <h1>single project page ayy</h1>
      </div>
    </Layout>
  );
}
