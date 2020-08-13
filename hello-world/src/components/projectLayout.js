import React from "react";
import { Link } from "gatsby";
import Layout from "./layout/layout";

export default function ProjectLayout(props) {
  return (
    <Layout mainClass={props.mainClass}>
      <Link to="..">Go back  </Link>
      {props.children}
    </Layout>
  );
}
